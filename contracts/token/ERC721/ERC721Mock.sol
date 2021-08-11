// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import { ERC721 } from './ERC721.sol';
import { ERC721MetadataStorage } from './ERC721MetadataStorage.sol';

contract ERC721Mock is ERC721 {
  constructor (
    string memory name,
    string memory symbol,
    string memory baseURI
  ) {
    ERC721MetadataStorage.Layout storage l = ERC721MetadataStorage.layout();
    l.name = name;
    l.symbol = symbol;
    l.baseURI = baseURI;
  }

  function mint (
    address account,
    uint tokenId
  ) external {
    _mint(account, tokenId);
  }

  function burn (
    uint tokenId
  ) external {
    _burn(tokenId);
  }
}
