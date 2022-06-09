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
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';

export interface ERC1404BaseInterface extends utils.Interface {
  functions: {
    'allowance(address,address)': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'detectTransferRestriction(address,address,uint256)': FunctionFragment;
    'messageForTransferRestriction(uint8)': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'allowance'
      | 'allowance(address,address)'
      | 'approve'
      | 'approve(address,uint256)'
      | 'balanceOf'
      | 'balanceOf(address)'
      | 'detectTransferRestriction'
      | 'detectTransferRestriction(address,address,uint256)'
      | 'messageForTransferRestriction'
      | 'messageForTransferRestriction(uint8)'
      | 'totalSupply'
      | 'totalSupply()'
      | 'transfer'
      | 'transfer(address,uint256)'
      | 'transferFrom'
      | 'transferFrom(address,address,uint256)',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'allowance',
    values: [string, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'allowance(address,address)',
    values: [string, string],
  ): string;
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
  encodeFunctionData(
    functionFragment: 'detectTransferRestriction',
    values: [string, string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'detectTransferRestriction(address,address,uint256)',
    values: [string, string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'messageForTransferRestriction',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'messageForTransferRestriction(uint8)',
    values: [BigNumberish],
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
    functionFragment: 'transfer',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'transfer(address,uint256)',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom(address,address,uint256)',
    values: [string, string, BigNumberish],
  ): string;

  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'allowance(address,address)',
    data: BytesLike,
  ): Result;
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
  decodeFunctionResult(
    functionFragment: 'detectTransferRestriction',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'detectTransferRestriction(address,address,uint256)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'messageForTransferRestriction',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'messageForTransferRestriction(uint8)',
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
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'transfer(address,uint256)',
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
    'Transfer(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'Approval(address,address,uint256)',
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'Transfer(address,address,uint256)',
  ): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface ERC1404Base extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC1404BaseInterface;

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
    allowance(
      holder: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    'allowance(address,address)'(
      holder: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    detectTransferRestriction(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[number]>;

    'detectTransferRestriction(address,address,uint256)'(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[number]>;

    messageForTransferRestriction(
      restrictionCode: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    'messageForTransferRestriction(uint8)'(
      restrictionCode: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    'totalSupply()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'transferFrom(address,address,uint256)'(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  allowance(
    holder: string,
    spender: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'allowance(address,address)'(
    holder: string,
    spender: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'approve(address,uint256)'(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  'balanceOf(address)'(
    account: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  detectTransferRestriction(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<number>;

  'detectTransferRestriction(address,address,uint256)'(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<number>;

  messageForTransferRestriction(
    restrictionCode: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>;

  'messageForTransferRestriction(uint8)'(
    restrictionCode: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'transfer(address,uint256)'(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferFrom(
    holder: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'transferFrom(address,address,uint256)'(
    holder: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      holder: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'allowance(address,address)'(
      holder: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    detectTransferRestriction(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<number>;

    'detectTransferRestriction(address,address,uint256)'(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<number>;

    messageForTransferRestriction(
      restrictionCode: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>;

    'messageForTransferRestriction(uint8)'(
      restrictionCode: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferFrom(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'transferFrom(address,address,uint256)'(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {
    'Approval(address,address,uint256)'(
      owner?: string | null,
      spender?: string | null,
      value?: null,
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null,
    ): ApprovalEventFilter;

    'Transfer(address,address,uint256)'(
      from?: string | null,
      to?: string | null,
      value?: null,
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null,
    ): TransferEventFilter;
  };

  estimateGas: {
    allowance(
      holder: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'allowance(address,address)'(
      holder: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    detectTransferRestriction(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'detectTransferRestriction(address,address,uint256)'(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    messageForTransferRestriction(
      restrictionCode: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'messageForTransferRestriction(uint8)'(
      restrictionCode: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferFrom(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'transferFrom(address,address,uint256)'(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      holder: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'allowance(address,address)'(
      holder: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'approve(address,uint256)'(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'balanceOf(address)'(
      account: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    detectTransferRestriction(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'detectTransferRestriction(address,address,uint256)'(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    messageForTransferRestriction(
      restrictionCode: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'messageForTransferRestriction(uint8)'(
      restrictionCode: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'totalSupply()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'transfer(address,uint256)'(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferFrom(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'transferFrom(address,address,uint256)'(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
