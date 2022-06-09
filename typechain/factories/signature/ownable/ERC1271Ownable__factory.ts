/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ERC1271Ownable,
  ERC1271OwnableInterface,
} from '../../../signature/ownable/ERC1271Ownable';
import type { Provider } from '@ethersproject/providers';
import { Contract, Signer, utils } from 'ethers';

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'hash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'isValidSignature',
    outputs: [
      {
        internalType: 'bytes4',
        name: 'magicValue',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class ERC1271Ownable__factory {
  static readonly abi = _abi;
  static createInterface(): ERC1271OwnableInterface {
    return new utils.Interface(_abi) as ERC1271OwnableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): ERC1271Ownable {
    return new Contract(address, _abi, signerOrProvider) as ERC1271Ownable;
  }
}
