/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ArrayUtilsMock,
  ArrayUtilsMockInterface,
} from '../../utils/ArrayUtilsMock';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'array',
        type: 'uint256[]',
      },
    ],
    name: 'max',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: 'array',
        type: 'bytes32[]',
      },
    ],
    name: 'max',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'array',
        type: 'address[]',
      },
    ],
    name: 'max',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: 'array',
        type: 'bytes32[]',
      },
    ],
    name: 'min',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'array',
        type: 'address[]',
      },
    ],
    name: 'min',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256[]',
        name: 'array',
        type: 'uint256[]',
      },
    ],
    name: 'min',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50610563806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631bfe664d146100675780633bf6de961461008d57806377c5ca71146100a057806386d6e594146100b3578063abf91ea4146100de578063d834e619146100f1575b600080fd5b61007a6100753660046103e5565b610104565b6040519081526020015b60405180910390f35b61007a61009b3660046103e5565b610115565b61007a6100ae3660046103e5565b610120565b6100c66100c136600461047b565b61012b565b6040516001600160a01b039091168152602001610084565b6100c66100ec36600461047b565b610136565b61007a6100ff3660046103e5565b610141565b600061010f8261014c565b92915050565b600061010f826101a9565b600061010f826101fd565b600061010f82610251565b600061010f826102b7565b600061010f82610324565b6000600019815b83518110156101a2578184828151811061016f5761016f610517565b6020026020010151101561019a5783818151811061018f5761018f610517565b602002602001015191505b600101610153565b5092915050565b600080805b83518110156101a257818482815181106101ca576101ca610517565b602002602001015111156101f5578381815181106101ea576101ea610517565b602002602001015191505b6001016101ae565b600080805b83518110156101a2578184828151811061021e5761021e610517565b602002602001015111156102495783818151811061023e5761023e610517565b602002602001015191505b600101610202565b600080805b83518110156101a257816001600160a01b031684828151811061027b5761027b610517565b60200260200101516001600160a01b031611156102af578381815181106102a4576102a4610517565b602002602001015191505b600101610256565b60006001600160a01b03815b83518110156101a257816001600160a01b03168482815181106102e8576102e8610517565b60200260200101516001600160a01b0316101561031c5783818151811061031157610311610517565b602002602001015191505b6001016102c3565b6000600019815b83518110156101a2578184828151811061034757610347610517565b602002602001015110156103725783818151811061036757610367610517565b602002602001015191505b60010161032b565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156103b9576103b961037a565b604052919050565b600067ffffffffffffffff8211156103db576103db61037a565b5060051b60200190565b600060208083850312156103f857600080fd5b823567ffffffffffffffff81111561040f57600080fd5b8301601f8101851361042057600080fd5b803561043361042e826103c1565b610390565b81815260059190911b8201830190838101908783111561045257600080fd5b928401925b8284101561047057833582529284019290840190610457565b979650505050505050565b6000602080838503121561048e57600080fd5b823567ffffffffffffffff8111156104a557600080fd5b8301601f810185136104b657600080fd5b80356104c461042e826103c1565b81815260059190911b820183019083810190878311156104e357600080fd5b928401925b828410156104705783356001600160a01b03811681146105085760008081fd5b825292840192908401906104e8565b634e487b7160e01b600052603260045260246000fdfea26469706673582212206c4dbfb0840472b251952434508a95e5aaf39fce7d34e2ea6ec11ec0bc0e0ca964736f6c634300080a0033';

type ArrayUtilsMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArrayUtilsMockConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArrayUtilsMock__factory extends ContractFactory {
  constructor(...args: ArrayUtilsMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ArrayUtilsMock> {
    return super.deploy(overrides || {}) as Promise<ArrayUtilsMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ArrayUtilsMock {
    return super.attach(address) as ArrayUtilsMock;
  }
  override connect(signer: Signer): ArrayUtilsMock__factory {
    return super.connect(signer) as ArrayUtilsMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArrayUtilsMockInterface {
    return new utils.Interface(_abi) as ArrayUtilsMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): ArrayUtilsMock {
    return new Contract(address, _abi, signerOrProvider) as ArrayUtilsMock;
  }
}
