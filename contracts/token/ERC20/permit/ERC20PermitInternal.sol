// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import { ECDSA } from '../../../cryptography/ECDSA.sol';
import { EIP712 } from '../../../cryptography/EIP712.sol';
import { ERC20BaseInternal } from '../base/ERC20BaseInternal.sol';
import { ERC20MetadataInternal } from '../metadata/ERC20MetadataInternal.sol';
import { ERC20PermitStorage } from './ERC20PermitStorage.sol';
import { IERC20PermitInternal } from './IERC20PermitInternal.sol';

/**
 * @title ERC20 extension with support for ERC2612 permits
 * @dev derived from https://github.com/soliditylabs/ERC20-Permit (MIT license)
 */
abstract contract ERC20PermitInternal is
    ERC20BaseInternal,
    ERC20MetadataInternal,
    IERC20PermitInternal
{
    using ECDSA for bytes32;

    bytes32 internal constant EIP712_TYPE_HASH =
        keccak256(
            'Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)'
        );

    /**
     * @notice return the EIP-712 domain separator unique to contract and chain
     * @return domainSeparator domain separator
     */
    function _DOMAIN_SEPARATOR()
        internal
        view
        returns (bytes32 domainSeparator)
    {
        domainSeparator = ERC20PermitStorage.layout().domainSeparators[
            block.chainid
        ];

        if (domainSeparator == 0x00) {
            domainSeparator = EIP712.calculateDomainSeparator(
                _nameHash(),
                _versionHash()
            );
        }
    }

    /**
     * @notice get the current ERC2612 nonce for the given address
     * @return current nonce
     */
    function _nonces(address owner) internal view returns (uint256) {
        return ERC20PermitStorage.layout().nonces[owner];
    }

    /**
     * @notice calculate the hash of the human-readable signing domain name
     * @dev ERC20Metadata token name is used as signing domain name
     * @return nameHash hash of signing domain name
     */
    function _nameHash() internal view virtual returns (bytes32 nameHash) {
        nameHash = keccak256(bytes(_name()));
    }

    /**
     * @notice calculate the hash of the ERC20Metadata token name
     * @return versionHash hash of token name
     */
    function _versionHash()
        internal
        view
        virtual
        returns (bytes32 versionHash)
    {
        versionHash = keccak256(bytes('1'));
    }

    /**
     * @notice approve spender to transfer tokens held by owner via signature
     * @dev this function may be vulnerable to approval replay attacks
     * @param owner holder of tokens and signer of permit
     * @param spender beneficiary of approval
     * @param amount quantity of tokens to approve
     * @param v secp256k1 'v' value
     * @param r secp256k1 'r' value
     * @param s secp256k1 's' value
     * @dev If https://eips.ethereum.org/EIPS/eip-1344[ChainID] ever changes, the
     * EIP712 Domain Separator is automatically recalculated.
     */
    function _permit(
        address owner,
        address spender,
        uint256 amount,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) internal virtual {
        if (block.timestamp > deadline) revert ERC20Permit__ExpiredDeadline();

        // Assembly for more efficiently computing:
        // bytes32 hashStruct = keccak256(
        //   abi.encode(
        //     EIP712_TYPE_HASH,
        //     owner,
        //     spender,
        //     amount,
        //     nonce,
        //     deadline
        //   )
        // );

        ERC20PermitStorage.Layout storage l = ERC20PermitStorage.layout();

        bytes32 hashStruct;
        uint256 nonce = l.nonces[owner];

        bytes32 typeHash = EIP712_TYPE_HASH;

        assembly {
            // Load free memory pointer
            let pointer := mload(64)

            mstore(pointer, typeHash)
            mstore(add(pointer, 32), owner)
            mstore(add(pointer, 64), spender)
            mstore(add(pointer, 96), amount)
            mstore(add(pointer, 128), nonce)
            mstore(add(pointer, 160), deadline)

            hashStruct := keccak256(pointer, 192)
        }

        bytes32 domainSeparator = l.domainSeparators[block.chainid];

        if (domainSeparator == 0x00) {
            domainSeparator = EIP712.calculateDomainSeparator(
                _nameHash(),
                _versionHash()
            );
            l.domainSeparators[block.chainid] = domainSeparator;
        }

        // Assembly for more efficient computing:
        // bytes32 hash = keccak256(
        //   abi.encodePacked(uint16(0x1901), domainSeparator, hashStruct)
        // );

        bytes32 hash;

        assembly {
            // Load free memory pointer
            let pointer := mload(64)

            mstore(
                pointer,
                0x1901000000000000000000000000000000000000000000000000000000000000
            ) // EIP191 header
            mstore(add(pointer, 2), domainSeparator) // EIP712 domain hash
            mstore(add(pointer, 34), hashStruct) // Hash of struct

            hash := keccak256(pointer, 66)
        }

        address signer = hash.recover(v, r, s);

        if (signer != owner) revert ERC20Permit__InvalidSignature();

        l.nonces[owner]++;
        _approve(owner, spender, amount);
    }
}
