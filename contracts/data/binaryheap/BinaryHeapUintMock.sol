// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import { BinaryHeap } from './BinaryHeap.sol';

contract BinaryHeapUintMock {
    using BinaryHeap for BinaryHeap.UintHeap;

    BinaryHeap.UintHeap internal uintHeap;

    function heap() external view returns (uint256[] memory) {
        uint256 l = uintHeap.length();
        uint256[] memory arr = new uint256[](l);
        for (uint256 i = 0; i < l; i++) {
            arr[i] = uintHeap.at(i);
        }
        return arr;
    }

    function at(uint256 index) external view returns (uint256) {
        return uintHeap.at(index);
    }

    function contains(uint256 value) external view returns (bool) {
        return uintHeap.contains(value);
    }

    function indexOf(uint256 value) external view returns (uint256) {
        return uintHeap.indexOf(value);
    }

    function length() external view returns (uint256) {
        return uintHeap.length();
    }

    function root() external view returns (uint256) {
        return uintHeap.root();
    }

    function add(uint256 value) external {
        uintHeap.add(value);
    }

    function remove(uint256 value) external returns (bool) {
        return uintHeap.remove(value);
    }
}
