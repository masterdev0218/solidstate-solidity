/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from '../../../common';
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';

export interface ERC721EnumerableMockInterface extends utils.Interface {
  functions: {
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'burn(uint256)': FunctionFragment;
    'getApproved(uint256)': FunctionFragment;
    'isApprovedForAll(address,address)': FunctionFragment;
    'mint(address,uint256)': FunctionFragment;
    'ownerOf(uint256)': FunctionFragment;
    'safeTransferFrom(address,address,uint256)': FunctionFragment;
    'safeTransferFrom(address,address,uint256,bytes)': FunctionFragment;
    'setApprovalForAll(address,bool)': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
    'tokenByIndex(uint256)': FunctionFragment;
    'tokenOfOwnerByIndex(address,uint256)': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'approve'
      | 'approve(address,uint256)'
      | 'balanceOf'
      | 'balanceOf(address)'
      | 'burn'
      | 'burn(uint256)'
      | 'getApproved'
      | 'getApproved(uint256)'
      | 'isApprovedForAll'
      | 'isApprovedForAll(address,address)'
      | 'mint'
      | 'mint(address,uint256)'
      | 'ownerOf'
      | 'ownerOf(uint256)'
      | 'safeTransferFrom(address,address,uint256)'
      | 'safeTransferFrom(address,address,uint256,bytes)'
      | 'setApprovalForAll'
      | 'setApprovalForAll(address,bool)'
      | 'supportsInterface'
      | 'supportsInterface(bytes4)'
      | 'tokenByIndex'
      | 'tokenByIndex(uint256)'
      | 'tokenOfOwnerByIndex'
      | 'tokenOfOwnerByIndex(address,uint256)'
      | 'totalSupply'
      | 'totalSupply()'
      | 'transferFrom'
      | 'transferFrom(address,address,uint256)',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'approve',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'approve(address,uint256)',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'balanceOf(address)',
    values: [string],
  ): string;
  encodeFunctionData(functionFragment: 'burn', values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'burn(uint256)',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'getApproved',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'getApproved(uint256)',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'isApprovedForAll',
    values: [string, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'isApprovedForAll(address,address)',
    values: [string, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'mint',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'mint(address,uint256)',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'ownerOf',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'ownerOf(uint256)',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'safeTransferFrom(address,address,uint256)',
    values: [string, string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'safeTransferFrom(address,address,uint256,bytes)',
    values: [string, string, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'setApprovalForAll',
    values: [string, boolean],
  ): string;
  encodeFunctionData(
    functionFragment: 'setApprovalForAll(address,bool)',
    values: [string, boolean],
  ): string;
  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'supportsInterface(bytes4)',
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'tokenByIndex',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'tokenByIndex(uint256)',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'tokenOfOwnerByIndex',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'tokenOfOwnerByIndex(address,uint256)',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'totalSupply',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'totalSupply()',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom(address,address,uint256)',
    values: [string, string, BigNumberish],
  ): string;

  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'approve(address,uint256)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'balanceOf(address)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'burn(uint256)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getApproved',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getApproved(uint256)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isApprovedForAll',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isApprovedForAll(address,address)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'mint(address,uint256)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'ownerOf', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'ownerOf(uint256)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom(address,address,uint256)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom(address,address,uint256,bytes)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setApprovalForAll',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setApprovalForAll(address,bool)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'supportsInterface',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'supportsInterface(bytes4)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'tokenByIndex',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'tokenByIndex(uint256)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'tokenOfOwnerByIndex',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'tokenOfOwnerByIndex(address,uint256)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'totalSupply',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'totalSupply()',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferFrom',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferFrom(address,address,uint256)',
    data: BytesLike,
  ): Result;

  events: {
    'Approval(address,address,uint256)': EventFragment;
    'ApprovalForAll(address,address,bool)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'Approval(address,address,uint256)',
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'ApprovalForAll(address,address,bool)',
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'Transfer(address,address,uint256)',
  ): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  operator: string;
  tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ApprovalForAllEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface ERC721EnumerableMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC721EnumerableMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approve(
      operator: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'approve(address,uint256)'(
      operator: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'burn(uint256)'(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    'getApproved(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    'isApprovedForAll(address,address)'(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    mint(
      account: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'mint(address,uint256)'(
      account: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    'ownerOf(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'setApprovalForAll(address,bool)'(
      operator: string,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    'tokenByIndex(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    'tokenOfOwnerByIndex(address,uint256)'(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    'totalSupply()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  approve(
    operator: string,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'approve(address,uint256)'(
    operator: string,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  'balanceOf(address)'(
    account: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  burn(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'burn(uint256)'(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>;

  'getApproved(uint256)'(
    tokenId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>;

  isApprovedForAll(
    account: string,
    operator: string,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'isApprovedForAll(address,address)'(
    account: string,
    operator: string,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  mint(
    account: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'mint(address,uint256)'(
    account: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  'ownerOf(uint256)'(
    tokenId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>;

  'safeTransferFrom(address,address,uint256)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'safeTransferFrom(address,address,uint256,bytes)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    status: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'setApprovalForAll(address,bool)'(
    operator: string,
    status: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'supportsInterface(bytes4)'(
    interfaceId: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  tokenByIndex(
    index: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'tokenByIndex(uint256)'(
    index: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  tokenOfOwnerByIndex(
    owner: string,
    index: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'tokenOfOwnerByIndex(address,uint256)'(
    owner: string,
    index: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'transferFrom(address,address,uint256)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    approve(
      operator: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    'approve(address,uint256)'(
      operator: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    'burn(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>;

    'getApproved(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'isApprovedForAll(address,address)'(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    mint(
      account: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    'mint(address,uint256)'(
      account: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    'ownerOf(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>;

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      status: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;

    'setApprovalForAll(address,bool)'(
      operator: string,
      status: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'tokenByIndex(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'tokenOfOwnerByIndex(address,uint256)'(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    'Approval(address,address,uint256)'(
      owner?: string | null,
      operator?: string | null,
      tokenId?: BigNumberish | null,
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      operator?: string | null,
      tokenId?: BigNumberish | null,
    ): ApprovalEventFilter;

    'ApprovalForAll(address,address,bool)'(
      owner?: string | null,
      operator?: string | null,
      approved?: null,
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null,
    ): ApprovalForAllEventFilter;

    'Transfer(address,address,uint256)'(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null,
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null,
    ): TransferEventFilter;
  };

  estimateGas: {
    approve(
      operator: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'approve(address,uint256)'(
      operator: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'burn(uint256)'(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'getApproved(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'isApprovedForAll(address,address)'(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    mint(
      account: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'mint(address,uint256)'(
      account: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'ownerOf(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'setApprovalForAll(address,bool)'(
      operator: string,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'tokenByIndex(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'tokenOfOwnerByIndex(address,uint256)'(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      operator: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'approve(address,uint256)'(
      operator: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    burn(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'burn(uint256)'(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'getApproved(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'isApprovedForAll(address,address)'(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    mint(
      account: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'mint(address,uint256)'(
      account: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'ownerOf(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'setApprovalForAll(address,bool)'(
      operator: string,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'tokenByIndex(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'tokenOfOwnerByIndex(address,uint256)'(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'totalSupply()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
