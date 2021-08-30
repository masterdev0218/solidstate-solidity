// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

library ERC20SnapshotStorage {
  struct Snapshots {
    uint[] ids;
    uint[] values;
  }

  struct Layout {
    mapping (address => Snapshots) accountBalanceSnapshots;
    Snapshots totalSupplySnapshots;
    uint snapshotId;
  }

  bytes32 internal constant STORAGE_SLOT = keccak256(
    'solidstate.contracts.storage.ERC20Snapshot'
  );

  function layout () internal pure returns (Layout storage l) {
    bytes32 slot = STORAGE_SLOT;
    assembly { l.slot := slot }
  }
}
