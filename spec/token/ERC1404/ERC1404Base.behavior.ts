import { expect } from 'chai';
import { ethers } from 'hardhat';
import { describeFilter } from '@solidstate/library/mocha_describe_filter';
import { describeBehaviorOfERC20Base } from '../ERC20/ERC20Base.behavior';
import { ERC1404Base } from '../../../typechain';
import { ContractTransaction } from 'ethers';

interface ERC1404BaseBehaviorArgs {
  deploy: () => Promise<ERC1404Base>;
  restrictions: any;
  mint: (
    address: string,
    amount: ethers.BigNumber,
  ) => Promise<ContractTransaction>;
  burn: (
    address: string,
    amount: ethers.BigNumber,
  ) => Promise<ContractTransaction>;
  supply: ethers.BigNumber;
}

export function describeBehaviorOfERC1404Base(
  { deploy, restrictions, mint, burn, supply }: ERC1404BaseBehaviorArgs,
  skips: string[],
) {
  const describe = describeFilter(skips);

  describe('::ERC1404Base', function () {
    let instance: ERC1404Base;

    beforeEach(async function () {
      instance = await deploy();
    });

    // eslint-disable-next-line mocha/no-setup-in-describe
    describeBehaviorOfERC20Base(
      {
        deploy,
        supply,
        mint,
        burn,
      },
      skips,
    );

    // TODO: transfers blocked if restriction exists

    describe('#detectTransferRestriction', function () {
      it('returns zero if no restriction exists', async function () {
        expect(
          await instance.callStatic.detectTransferRestriction(
            ethers.constants.AddressZero,
            ethers.constants.AddressZero,
            ethers.constants.One,
          ),
        ).to.equal(0);
      });
    });

    describe('#messageForTransferRestriction', function () {
      it('returns empty string for unknown restriction code', async function () {
        expect(
          await instance.callStatic.messageForTransferRestriction(255),
        ).to.equal('');
      });

      for (let restriction of restrictions) {
        it(`returns "${restriction.message}" for code ${restriction.code}`, async function () {
          expect(
            await instance.callStatic.messageForTransferRestriction(
              restriction.code,
            ),
          ).to.equal(restriction.message);
        });
      }
    });
  });
}
