// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import './ERC20Base.sol';
import './ERC20MetadataStorage.sol';
import './IERC20Metadata.sol';

abstract contract ERC20Metadata is IERC20Metadata, ERC20Base {
  function name () virtual override public view returns (string memory) {
    return ERC20MetadataStorage.layout().name;
  }

  function symbol () virtual override public view returns (string memory) {
    return ERC20MetadataStorage.layout().symbol;
  }

  function decimals () virtual override public view returns (uint8) {
    return ERC20MetadataStorage.layout().decimals;
  }
}
