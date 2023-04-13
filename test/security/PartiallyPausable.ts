import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { describeBehaviorOfPartiallyPausable } from '@solidstate/spec';
import {
  PartiallyPausableMock,
  PartiallyPausableMock__factory,
} from '@solidstate/typechain-types';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('PartiallyPausable', function () {
  let deployer: SignerWithAddress;
  let instance: PartiallyPausableMock;

  before(async function () {
    [deployer] = await ethers.getSigners();
  });

  beforeEach(async function () {
    instance = await new PartiallyPausableMock__factory(deployer).deploy();
  });

  describeBehaviorOfPartiallyPausable(async () => instance, {});

  describe('__internal', function () {
    describe('whenNotPartiallyPaused(bytes32) modifier', () => {
      it('todo');

      describe('reverts if', () => {
        it('todo');
      });
    });

    describe('whenPartiallyPaused(bytes32) modifier', () => {
      it('todo');

      describe('reverts if', () => {
        it('todo');
      });
    });

    describe('#_partiallyPaused(bytes32)', () => {
      it('todo');
    });

    describe('#_partiallyPause()', function () {
      it('sets paused status to true', async function () {
        const key = ethers.utils.randomBytes(32);

        await instance.__partiallyPause(key);

        expect(await instance.__partiallyPaused(key)).to.be.true;
      });

      it('emits PartiallyPaused event', async function () {
        const key = ethers.utils.randomBytes(32);

        await expect(instance.connect(deployer).__partiallyPause(key))
          .to.emit(instance, 'PartiallyPaused')
          .withArgs(deployer.address, key);
      });

      it('todo: does not affect other keys');

      describe('reverts if', () => {
        it('contract is partially paused already', async function () {
          const key = ethers.utils.randomBytes(32);

          await instance.__partiallyPause(key);

          await expect(
            instance.__partiallyPause(key),
          ).to.be.revertedWithCustomError(
            instance,
            'PartiallyPausable__PartiallyPaused',
          );
        });
      });
    });

    describe('#_partiallyUnpause()', function () {
      it('sets paused status to false', async function () {
        const key = ethers.utils.randomBytes(32);

        await instance.__partiallyPause(key);
        await instance.__partiallyUnpause(key);

        expect(await instance.__partiallyPaused(key)).to.be.false;
      });

      it('emits PartiallyUnpaused event', async function () {
        const key = ethers.utils.randomBytes(32);

        await instance.__partiallyPause(key);

        await expect(instance.connect(deployer).__partiallyUnpause(key))
          .to.emit(instance, 'PartiallyUnpaused')
          .withArgs(deployer.address, key);
      });

      it('todo: does not affect other keys');

      describe('reverts if', () => {
        it('contract is not partially paused', async function () {
          const key = ethers.utils.randomBytes(32);

          await expect(
            instance.__partiallyUnpause(key),
          ).to.be.revertedWithCustomError(
            instance,
            'PartiallyPausable__NotPartiallyPaused',
          );
        });
      });
    });
  });
});
