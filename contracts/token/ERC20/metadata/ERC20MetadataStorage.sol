// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

library ERC20MetadataStorage {
    struct Layout {
        string name;
        string symbol;
        uint8 decimals;
    }

    bytes32 internal constant STORAGE_SLOT =
        keccak256('solidstate.contracts.storage.ERC20Metadata');

    function layout() internal pure returns (Layout storage l) {
        bytes32 slot = STORAGE_SLOT;
        assembly {
            l.slot := slot
        }
    }

    function setName(Layout storage l, string memory name) internal {
        l.name = name;
    }

    function setSymbol(Layout storage l, string memory symbol) internal {
        l.symbol = symbol;
    }

    function setDecimals(Layout storage l, uint8 decimals) internal {
        l.decimals = decimals;
    }
}
