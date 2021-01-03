// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

library SafeOwnableStorage {
  bytes32 internal constant STORAGE_SLOT = keccak256(
    'solidstate.contracts.storage.SafeOwnable'
  );

  struct Layout {
    address nomineeOwner;
  }

  function layout () internal pure returns (Layout storage l) {
    bytes32 slot = STORAGE_SLOT;
    assembly { l.slot := slot }
  }

  function setNomineeOwner (
    Layout storage l,
    address nomineeOwner
  ) internal {
    l.nomineeOwner = nomineeOwner;
  }
}
