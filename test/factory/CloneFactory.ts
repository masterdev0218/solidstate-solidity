import { describeBehaviorOfCloneFactory } from '@solidstate/spec';
import {
  CloneFactoryMock,
  CloneFactoryMock__factory,
} from '@solidstate/typechain-types';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('CloneFactory', function () {
  let instance: CloneFactoryMock;

  beforeEach(async function () {
    const [deployer] = await ethers.getSigners();
    instance = await new CloneFactoryMock__factory(deployer).deploy();
  });

  describeBehaviorOfCloneFactory(async () => instance, {});

  describe('__internal', function () {
    describe('#_deployClone()', function () {
      it('deploys clone and returns deployment address', async function () {
        const address = await instance['__deployClone()'].staticCall();
        expect(address).to.be.properAddress;

        await instance['__deployClone()']();

        expect(await ethers.provider.getCode(address)).to.equal(
          await ethers.provider.getCode(await instance.getAddress()),
        );
      });

      describe('reverts if', function () {
        it('contract creation fails');
      });
    });

    describe('#_deployClone(bytes32)', function () {
      it('deploys clone and returns deployment address', async function () {
        const salt = ethers.randomBytes(32);

        const address = await instance['__deployClone(bytes32)'].staticCall(
          salt,
        );
        expect(address).to.be.properAddress;

        await instance['__deployClone(bytes32)'](salt);

        expect(await ethers.provider.getCode(address)).to.equal(
          await ethers.provider.getCode(await instance.getAddress()),
        );
      });

      describe('reverts if', function () {
        it('contract creation fails');

        it('salt has already been used', async function () {
          const salt = ethers.randomBytes(32);

          await instance['__deployClone(bytes32)'](salt);

          await expect(
            instance['__deployClone(bytes32)'](salt),
          ).to.be.revertedWithCustomError(
            instance,
            'Factory__FailedDeployment',
          );
        });
      });
    });

    describe('#_calculateCloneDeploymentAddress(bytes32)', function () {
      it('returns address of not-yet-deployed contract', async function () {
        const initCode = '0x58333b90818180333cf3';
        const initCodeHash = ethers.keccak256(initCode);
        const salt = ethers.randomBytes(32);

        expect(
          await instance.__calculateCloneDeploymentAddress.staticCall(salt),
        ).to.equal(
          ethers.getCreate2Address(
            await instance.getAddress(),
            salt,
            initCodeHash,
          ),
        );
      });
    });
  });
});
