/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from '../../../common';
import type { EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { BaseContract, BigNumber, Signer, utils } from 'ethers';

export interface ERC1155EnumerableInternalInterface extends utils.Interface {
  functions: {};

  events: {
    'ApprovalForAll(address,address,bool)': EventFragment;
    'TransferBatch(address,address,address,uint256[],uint256[])': EventFragment;
    'TransferSingle(address,address,address,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'ApprovalForAll(address,address,bool)',
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TransferBatch'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'TransferBatch(address,address,address,uint256[],uint256[])',
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TransferSingle'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'TransferSingle(address,address,address,uint256,uint256)',
  ): EventFragment;
}

export interface ApprovalForAllEventObject {
  account: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface TransferBatchEventObject {
  operator: string;
  from: string;
  to: string;
  ids: BigNumber[];
  values: BigNumber[];
}
export type TransferBatchEvent = TypedEvent<
  [string, string, string, BigNumber[], BigNumber[]],
  TransferBatchEventObject
>;

export type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;

export interface TransferSingleEventObject {
  operator: string;
  from: string;
  to: string;
  id: BigNumber;
  value: BigNumber;
}
export type TransferSingleEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  TransferSingleEventObject
>;

export type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;

export interface ERC1155EnumerableInternal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC1155EnumerableInternalInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    'ApprovalForAll(address,address,bool)'(
      account?: string | null,
      operator?: string | null,
      approved?: null,
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      account?: string | null,
      operator?: string | null,
      approved?: null,
    ): ApprovalForAllEventFilter;

    'TransferBatch(address,address,address,uint256[],uint256[])'(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null,
    ): TransferBatchEventFilter;
    TransferBatch(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null,
    ): TransferBatchEventFilter;

    'TransferSingle(address,address,address,uint256,uint256)'(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null,
    ): TransferSingleEventFilter;
    TransferSingle(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null,
    ): TransferSingleEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
