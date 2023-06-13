import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { describeBehaviorOfERC20Base } from '@solidstate/spec';
import {
  ERC20BaseMock,
  ERC20BaseMock__factory,
} from '@solidstate/typechain-types';
import { expect } from 'chai';
import { BigNumber } from 'ethers';
import { ethers } from 'hardhat';

describe('ERC20Base', function () {
  let sender: SignerWithAddress;
  let receiver: SignerWithAddress;
  let holder: SignerWithAddress;
  let spender: SignerWithAddress;
  let instance: ERC20BaseMock;

  before(async function () {
    [sender, receiver, holder, spender] = await ethers.getSigners();
  });

  beforeEach(async function () {
    const [deployer] = await ethers.getSigners();
    instance = await new ERC20BaseMock__factory(deployer).deploy();
  });

  describeBehaviorOfERC20Base(async () => instance, {
    supply: 0,
    mint: (recipient, amount) => instance.__mint(recipient, amount),
    burn: (recipient, amount) => instance.__burn(recipient, amount),
  });

  describe('__internal', function () {
    describe('#_totalSupply()', function () {
      it('todo');
    });

    describe('#_balanceOf(address)', function () {
      it('todo');
    });

    describe('#_mint(address,uint256)', function () {
      it('increases balance of given account by given amount', async function () {
        let amount = BigNumber.from(2);

        await expect(() =>
          instance.__mint(receiver.address, amount),
        ).to.changeTokenBalance(instance, receiver, amount);
      });

      it('increases total supply by given amount', async function () {
        let amount = BigNumber.from(2);

        let initialSupply = await instance['totalSupply()'].staticCall();
        await instance.__mint(receiver.address, amount);
        let finalSupply = await instance['totalSupply()'].staticCall();

        expect(finalSupply.sub(initialSupply)).to.equal(amount);
      });

      it('emits Transfer event', async function () {
        let amount = BigNumber.from(2);

        await expect(instance.__mint(receiver.address, amount))
          .to.emit(instance, 'Transfer')
          .withArgs(ethers.ZeroAddress, receiver.address, amount);
      });

      describe('reverts if', function () {
        it('given account is zero address', async function () {
          await expect(
            instance.__mint(ethers.ZeroAddress, 0),
          ).to.be.revertedWithCustomError(
            instance,
            'ERC20Base__MintToZeroAddress',
          );
        });
      });
    });

    describe('#_burn(address,uint256)', function () {
      it('decreases balance of given account by given amount', async function () {
        let amount = BigNumber.from(2);
        await instance.__mint(receiver.address, amount);

        await expect(() =>
          instance.__burn(receiver.address, amount),
        ).to.changeTokenBalance(instance, receiver, amount.mul(-1));
      });

      it('decreases total supply by given amount', async function () {
        let amount = BigNumber.from(2);
        await instance.__mint(receiver.address, amount);

        let initialSupply = await instance['totalSupply()'].staticCall();
        await instance.__burn(receiver.address, amount);
        let finalSupply = await instance['totalSupply()'].staticCall();

        expect(initialSupply.sub(finalSupply)).to.equal(amount);
      });

      it('emits Transfer event', async function () {
        let amount = BigNumber.from(2);
        await instance.__mint(receiver.address, amount);

        await expect(instance.__burn(receiver.address, amount))
          .to.emit(instance, 'Transfer')
          .withArgs(receiver.address, ethers.ZeroAddress, amount);
      });

      describe('reverts if', function () {
        it('given account is zero address', async function () {
          await expect(
            instance.__burn(ethers.ZeroAddress, 0),
          ).to.be.revertedWithCustomError(
            instance,
            'ERC20Base__BurnFromZeroAddress',
          );
        });

        it('burn amount exceeds balance', async () => {
          await instance.__mint(receiver.address, 100);
          await expect(
            instance.__burn(receiver.address, 101),
          ).to.be.revertedWithCustomError(
            instance,
            'ERC20Base__BurnExceedsBalance',
          );
        });
      });
    });

    describe('#_transfer(address,address,uint256)', function () {
      it('decreases balance of sender and increases balance of recipient by given amount', async function () {
        let amount = BigNumber.from(2);
        await instance.__mint(sender.address, amount);

        await expect(() =>
          instance.__transfer(sender.address, receiver.address, amount),
        ).to.changeTokenBalances(
          instance,
          [sender, receiver],
          [amount.mul(-1), amount],
        );
      });

      it('does not modify total supply', async function () {
        let amount = BigNumber.from(2);
        await instance.__mint(sender.address, amount);

        let initialSupply = await instance['totalSupply()'].staticCall();
        await instance.__transfer(sender.address, receiver.address, amount);
        let finalSupply = await instance['totalSupply()'].staticCall();

        expect(finalSupply).to.equal(initialSupply);
      });

      it('emits Transfer event', async function () {
        let amount = BigNumber.from(2);
        await instance.__mint(sender.address, amount);

        await expect(
          instance.__transfer(sender.address, receiver.address, amount),
        )
          .to.emit(instance, 'Transfer')
          .withArgs(sender.address, receiver.address, amount);
      });

      describe('reverts if', function () {
        it('sender is the zero address', async function () {
          await expect(
            instance.__transfer(ethers.ZeroAddress, receiver.address, 0),
          ).to.be.revertedWithCustomError(
            instance,
            'ERC20Base__TransferFromZeroAddress',
          );
        });

        it('receiver is the zero address', async function () {
          await expect(
            instance.__transfer(sender.address, ethers.ZeroAddress, 0),
          ).to.be.revertedWithCustomError(
            instance,
            'ERC20Base__TransferToZeroAddress',
          );
        });
      });
    });

    describe('#_approve(address,address,uint256)', function () {
      it('sets approval of spender with respect to holder to given amount', async function () {
        let amount = BigNumber.from(2);

        await instance
          .connect(holder)
          .__approve(holder.address, spender.address, amount);
        await expect(
          await instance['allowance(address,address)'].staticCall(
            holder.address,
            spender.address,
          ),
        ).to.equal(amount);

        // approvals are not cumulative
        await instance
          .connect(holder)
          .__approve(holder.address, spender.address, amount);
        await expect(
          await instance['allowance(address,address)'].staticCall(
            holder.address,
            spender.address,
          ),
        ).to.equal(amount);
      });

      it('emits Approval event', async function () {
        let amount = BigNumber.from(2);

        await expect(
          instance.__approve(holder.address, spender.address, amount),
        )
          .to.emit(instance, 'Approval')
          .withArgs(holder.address, spender.address, amount);
      });

      describe('reverts if', function () {
        it('holder is the zero address', async function () {
          await expect(
            instance.__approve(ethers.ZeroAddress, spender.address, 0),
          ).to.be.revertedWithCustomError(
            instance,
            'ERC20Base__ApproveFromZeroAddress',
          );
        });

        it('spender is the zero address', async function () {
          await expect(
            instance.__approve(holder.address, ethers.ZeroAddress, 0),
          ).to.be.revertedWithCustomError(
            instance,
            'ERC20Base__ApproveToZeroAddress',
          );
        });
      });
    });

    describe('#_decreaseAllowance(address,address,uint256)', function () {
      it('reduces approval of spender with respect to holder by given amount', async function () {
        await instance.__approve(holder.address, spender.address, 2);

        await instance
          .connect(holder)
          .__decreaseAllowance(holder.address, spender.address, 1);

        await expect(
          await instance['allowance(address,address)'].staticCall(
            holder.address,
            spender.address,
          ),
        ).to.equal(1);

        // decreases are cumulative
        await instance
          .connect(holder)
          .__decreaseAllowance(holder.address, spender.address, 1);

        await expect(
          await instance['allowance(address,address)'].staticCall(
            holder.address,
            spender.address,
          ),
        ).to.equal(0);
      });

      it('emits Approval event', async function () {
        await instance.__approve(holder.address, spender.address, 2);

        await expect(
          instance.__decreaseAllowance(holder.address, spender.address, 1),
        )
          .to.emit(instance, 'Approval')
          .withArgs(holder.address, spender.address, 1);
      });

      describe('reverts if', function () {
        it('holder is the zero address', async function () {
          await expect(
            instance.__decreaseAllowance(
              ethers.ZeroAddress,
              spender.address,
              0,
            ),
          ).to.be.revertedWithCustomError(
            instance,
            'ERC20Base__ApproveFromZeroAddress',
          );
        });

        it('spender is the zero address', async function () {
          await expect(
            instance.__decreaseAllowance(holder.address, ethers.ZeroAddress, 0),
          ).to.be.revertedWithCustomError(
            instance,
            'ERC20Base__ApproveToZeroAddress',
          );
        });
      });
    });

    describe('#_beforeTokenTransfer(address,address,uint256)', function () {
      it('todo');
    });
  });
});
