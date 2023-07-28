import { describeBehaviorOfERC20Base, ERC20BaseBehaviorArgs } from '../ERC20';
import { describeFilter } from '@solidstate/library';
import { IERC1404Base } from '@solidstate/typechain-types';
import { expect } from 'chai';
import { ContractTransaction } from 'ethers';
import { ethers } from 'hardhat';

export interface ERC1404BaseBehaviorArgs extends ERC20BaseBehaviorArgs {
  restrictions: any;
}

export function describeBehaviorOfERC1404Base(
  deploy: () => Promise<IERC1404Base>,
  { restrictions, mint, burn, supply }: ERC1404BaseBehaviorArgs,
  skips?: string[],
) {
  const describe = describeFilter(skips);

  describe('::ERC1404Base', function () {
    let instance: IERC1404Base;

    beforeEach(async function () {
      instance = await deploy();
    });

    describeBehaviorOfERC20Base(
      deploy,
      {
        supply,
        mint,
        burn,
      },
      skips,
    );

    // TODO: transfers blocked if restriction exists

    describe('#detectTransferRestriction(address,address,uint256)', function () {
      it('returns zero if no restriction exists', async function () {
        expect(
          await instance.detectTransferRestriction.staticCall(
            ethers.ZeroAddress,
            ethers.ZeroAddress,
            1,
          ),
        ).to.equal(0);
      });
    });

    describe('#messageForTransferRestriction(uint8)', function () {
      it('returns empty string for unknown restriction code', async function () {
        expect(
          await instance.messageForTransferRestriction.staticCall(255),
        ).to.equal('');
      });

      for (let restriction of restrictions) {
        it(`returns "${restriction.message}" for code ${restriction.code}`, async function () {
          expect(
            await instance.messageForTransferRestriction.staticCall(
              restriction.code,
            ),
          ).to.equal(restriction.message);
        });
      }
    });
  });
}
