import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import {
  InitializableMock,
  InitializableMock__factory,
} from '@solidstate/typechain-types';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Initializable', function () {
  let deployer: SignerWithAddress;
  let instance: InitializableMock;

  before(async function () {
    [deployer] = await ethers.getSigners();
  });

  beforeEach(async function () {
    instance = await new InitializableMock__factory(deployer).deploy();
  });

  describe('__internal', function () {
    describe('initializer() modifier', function () {
      it('sets initialized version to 1', async () => {
        await instance.initializerTest();

        expect(await instance.callStatic.__getInitializedVersion()).to.equal(
          1n,
        );
      });

      describe('reverts if', () => {
        it('initializer has already been called', async () => {
          await instance.initializerTest();

          await expect(
            instance.initializerTest(),
          ).to.be.revertedWithCustomError(
            instance,
            'Initializable__AlreadyInitialized',
          );
        });
      });
    });

    describe('reinitializer(uint8) modifier', function () {
      it('sets monotonically increasing initialized version', async () => {
        await instance.reinitializerTest(1n);
        await instance.reinitializerTest(2n);
        await instance.reinitializerTest(100n);
      });

      describe('reverts if', () => {
        it('version is less than or equal to previously initialized version', async () => {
          await expect(
            instance.reinitializerTest(0n),
          ).to.be.revertedWithCustomError(
            instance,
            'Initializable__AlreadyInitialized',
          );

          await instance.reinitializerTest(2n);

          await expect(
            instance.reinitializerTest(1n),
          ).to.be.revertedWithCustomError(
            instance,
            'Initializable__AlreadyInitialized',
          );

          await expect(
            instance.reinitializerTest(2n),
          ).to.be.revertedWithCustomError(
            instance,
            'Initializable__AlreadyInitialized',
          );
        });

        it('initialier has already been called and reinitialization version is 1', async () => {
          await instance.initializerTest();

          await expect(
            instance.reinitializerTest(1n),
          ).to.be.revertedWithCustomError(
            instance,
            'Initializable__AlreadyInitialized',
          );
        });
      });
    });

    describe('#_getInitializedVersion()', () => {
      it('returns initialized version', async () => {
        expect(await instance.callStatic.__getInitializedVersion()).to.equal(
          0n,
        );

        await instance.__setInitializedVersion(1n);

        expect(await instance.callStatic.__getInitializedVersion()).to.equal(
          1n,
        );
      });
    });

    describe('#_setInitializedVersion(uint8)', () => {
      it('sets monotonically increasing initialize version', async () => {
        await instance.__setInitializedVersion(1n);
        await instance.__setInitializedVersion(2n);
        await instance.__setInitializedVersion(100n);
      });

      describe('reverts if', () => {
        it('version is less than or equal to previously initialized version', async () => {
          await expect(
            instance.reinitializerTest(0n),
          ).to.be.revertedWithCustomError(
            instance,
            'Initializable__AlreadyInitialized',
          );

          await instance.__setInitializedVersion(2n);

          await expect(
            instance.reinitializerTest(1n),
          ).to.be.revertedWithCustomError(
            instance,
            'Initializable__AlreadyInitialized',
          );

          await expect(
            instance.reinitializerTest(2n),
          ).to.be.revertedWithCustomError(
            instance,
            'Initializable__AlreadyInitialized',
          );
        });
      });
    });
  });
});
