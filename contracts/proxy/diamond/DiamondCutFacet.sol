// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import '../../access/OwnableInternal.sol';
import './IDiamondCut.sol';
import './LibDiamond.sol';

/**
 * @title EIP-2535 "Diamond" proxy update contract
 * @dev derived from https://github.com/mudgen/diamond-2 (MIT license)
 */
contract DiamondCutFacet is IDiamondCut, OwnableInternal {
  /// @notice Add/replace/remove any number of functions and optionally execute
  ///         a function with delegatecall
  /// @param _diamondCut Contains the facet addresses and function selectors
  /// @param _init The address of the contract or facet to execute _calldata
  /// @param _calldata A function call, including function selector and arguments
  ///                  _calldata is executed with delegatecall on _init
  function diamondCut(
    FacetCut[] calldata _diamondCut,
    address _init,
    bytes calldata _calldata
  ) external override onlyOwner {
    LibDiamond.DiamondStorage storage ds = LibDiamond.diamondStorage();

    uint256 originalSelectorCount = ds.selectorCount;
    uint256 selectorCount = originalSelectorCount;
    bytes32 selectorSlot;

    // check if last selector slot is not full
    if (selectorCount % 8 > 0) {
      // get last selectorSlot
      selectorSlot = ds.selectorSlots[selectorCount / 8];
    }

    for (uint i; i < _diamondCut.length; i++) {
      (selectorCount, selectorSlot) = LibDiamond.addReplaceRemoveFacetSelectors(
        selectorCount,
        selectorSlot,
        _diamondCut[i].facetAddress,
        _diamondCut[i].action,
        _diamondCut[i].functionSelectors
      );
    }

    if (selectorCount != originalSelectorCount) {
      ds.selectorCount = uint16(selectorCount);
    }

    // If last selector slot is not full
    if (selectorCount % 8 > 0) {
      ds.selectorSlots[selectorCount / 8] = selectorSlot;
    }

    emit DiamondCut(_diamondCut, _init, _calldata);
    LibDiamond.initializeDiamondCut(_init, _calldata);
  }
}
