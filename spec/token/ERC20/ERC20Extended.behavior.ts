import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { describeFilter } from '@solidstate/library';
import { IERC20Extended } from '@solidstate/typechain-types';
import { expect } from 'chai';
import { ContractTransaction } from 'ethers';
import { ethers } from 'hardhat';

export interface ERC20ExtendedBehaviorArgs {
  mint: (address: string, amount: BigInt) => Promise<ContractTransaction>;
  burn: (address: string, amount: BigInt) => Promise<ContractTransaction>;
  allowance: (holder: string, spender: string) => Promise<BigInt>;
  supply: BigInt;
}

export function describeBehaviorOfERC20Extended(
  deploy: () => Promise<IERC20Extended>,
  { mint, burn, allowance, supply }: ERC20ExtendedBehaviorArgs,
  skips?: string[],
) {
  const describe = describeFilter(skips);

  describe('::ERC20Extended', function () {
    let deployer: SignerWithAddress;
    let holder: SignerWithAddress;
    let spender: SignerWithAddress;
    let instance: IERC20Extended;

    before(async function () {
      [deployer, holder, spender] = await ethers.getSigners();
    });

    beforeEach(async function () {
      instance = await deploy();
    });

    describe('#increaseAllowance(address,uint256)', function () {
      it('returns true', async () => {
        expect(
          await instance
            .connect(holder)
            ['increaseAllowance(address,uint256)'].staticCall(
              await instance.getAddress(),
              0,
            ),
        ).to.be.true;
      });

      it('increases approval of spender with respect to holder by given amount', async function () {
        let amount = 2n;

        await instance
          .connect(holder)
          ['increaseAllowance(address,uint256)'](spender.address, amount);

        await expect(await allowance(holder.address, spender.address)).to.equal(
          amount,
        );

        await instance
          .connect(holder)
          ['increaseAllowance(address,uint256)'](spender.address, amount);

        await expect(await allowance(holder.address, spender.address)).to.equal(
          amount + amount,
        );

        // TODO: test case is no different from #allowance test; tested further by #transferFrom tests
      });

      it('emits Approval event', async function () {
        let amount = 2n;

        await expect(
          instance
            .connect(holder)
            ['increaseAllowance(address,uint256)'](spender.address, amount),
        )
          .to.emit(instance, 'Approval')
          .withArgs(holder.address, spender.address, amount);
      });

      describe('reverts if', function () {
        it('approval amount overflows uint256', async function () {
          await instance
            .connect(holder)
            ['increaseAllowance(address,uint256)'](
              spender.address,
              ethers.MaxUint256,
            );

          await expect(
            instance
              .connect(holder)
              ['increaseAllowance(address,uint256)'](spender.address, 1),
          ).to.be.revertedWithCustomError(
            instance,
            'ERC20Extended__ExcessiveAllowance',
          );
        });
      });
    });

    describe('#decreaseAllowance(address,uint256)', function () {
      it('returns true', async () => {
        expect(
          await instance
            .connect(holder)
            ['decreaseAllowance(address,uint256)'].staticCall(
              await instance.getAddress(),
              0,
            ),
        ).to.be.true;
      });

      it('decreases approval of spender with respect to holder by given amount', async function () {
        let amount = 2n;
        await instance
          .connect(holder)
          ['increaseAllowance(address,uint256)'](
            spender.address,
            amount.mul(2),
          );

        await instance
          .connect(holder)
          ['decreaseAllowance(address,uint256)'](spender.address, amount);

        await expect(await allowance(holder.address, spender.address)).to.equal(
          amount,
        );

        await instance
          .connect(holder)
          ['decreaseAllowance(address,uint256)'](spender.address, amount);

        await expect(await allowance(holder.address, spender.address)).to.equal(
          0,
        );

        // TODO: test case is no different from #allowance test; tested further by #transferFrom tests
      });

      it('emits Approval event', async function () {
        let amount = 2n;
        await instance
          .connect(holder)
          ['increaseAllowance(address,uint256)'](spender.address, amount);

        await expect(
          instance
            .connect(holder)
            ['decreaseAllowance(address,uint256)'](spender.address, amount),
        )
          .to.emit(instance, 'Approval')
          .withArgs(holder.address, spender.address, 0);
      });

      describe('reverts if', function () {
        it('approval amount underflows uint256', async function () {
          await expect(
            instance
              .connect(holder)
              ['decreaseAllowance(address,uint256)'](spender.address, 1),
          ).to.be.revertedWithCustomError(
            instance,
            'ERC20Base__InsufficientAllowance',
          );
        });
      });
    });
  });
}
