/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from '../common';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';

export interface MetamorphicFactoryInterface extends utils.Interface {
  functions: {
    'getMetamorphicImplementation()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'getMetamorphicImplementation'
      | 'getMetamorphicImplementation()',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'getMetamorphicImplementation',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getMetamorphicImplementation()',
    values?: undefined,
  ): string;

  decodeFunctionResult(
    functionFragment: 'getMetamorphicImplementation',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getMetamorphicImplementation()',
    data: BytesLike,
  ): Result;

  events: {};
}

export interface MetamorphicFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MetamorphicFactoryInterface;

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
    getMetamorphicImplementation(
      overrides?: CallOverrides,
    ): Promise<[string] & { implementation: string }>;

    'getMetamorphicImplementation()'(
      overrides?: CallOverrides,
    ): Promise<[string] & { implementation: string }>;
  };

  getMetamorphicImplementation(overrides?: CallOverrides): Promise<string>;

  'getMetamorphicImplementation()'(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getMetamorphicImplementation(overrides?: CallOverrides): Promise<string>;

    'getMetamorphicImplementation()'(
      overrides?: CallOverrides,
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getMetamorphicImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    'getMetamorphicImplementation()'(
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMetamorphicImplementation(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'getMetamorphicImplementation()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
