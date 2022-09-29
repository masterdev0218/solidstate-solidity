// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

/**
 * @title Partial ERC4626 interface needed by internal functions
 */
interface IERC4626Internal {
    error ERC4626Internal__MaximumAmountExceeded();
    error ERC4626Internal__AllowanceExceeded();

    event Deposit(
        address indexed caller,
        address indexed owner,
        uint256 assets,
        uint256 shares
    );

    event Withdraw(
        address indexed caller,
        address indexed receiver,
        address indexed owner,
        uint256 assets,
        uint256 shares
    );
}
