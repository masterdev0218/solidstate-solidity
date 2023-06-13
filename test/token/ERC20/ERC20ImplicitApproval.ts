import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { describeBehaviorOfERC20ImplicitApproval } from '@solidstate/spec';
import {
  ERC20ImplicitApprovalMock,
  ERC20ImplicitApprovalMock__factory,
} from '@solidstate/typechain-types';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('ERC20ImplicitApproval', function () {
  let holder: SignerWithAddress;
  let implicitlyApprovedSpender: SignerWithAddress;
  let instance: ERC20ImplicitApprovalMock;

  before(async function () {
    // TODO: avoid need for gap in array by passing separate (non-implicitly-approved) spender to ERC20Base behavior tests
    [holder, , implicitlyApprovedSpender] = await ethers.getSigners();
  });

  beforeEach(async function () {
    const [deployer] = await ethers.getSigners();
    instance = await new ERC20ImplicitApprovalMock__factory(deployer).deploy([
      implicitlyApprovedSpender.address,
    ]);
  });

  describeBehaviorOfERC20ImplicitApproval(async () => instance, {
    supply: 0,
    mint: (recipient, amount) => instance.__mint(recipient, amount),
    burn: (recipient, amount) => instance.__burn(recipient, amount),
    getHolder: async () => holder,
    getImplicitlyApprovedSpender: async () => implicitlyApprovedSpender,
  });

  describe('__internal', function () {
    describe('#_isImplicitlyApproved(address)', function () {
      it('returns implicit approval status of address', async function () {
        expect(
          await instance.__isImplicitlyApproved.staticCall(ethers.ZeroAddress),
        ).to.be.false;

        expect(
          await instance.__isImplicitlyApproved.staticCall(
            implicitlyApprovedSpender.address,
          ),
        ).to.be.true;
      });
    });
  });
});
