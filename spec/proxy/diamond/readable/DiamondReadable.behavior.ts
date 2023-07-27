import { describeBehaviorOfERC165Base } from '../../../introspection';
import { describeFilter } from '@solidstate/library';
import { IDiamondReadable } from '@solidstate/typechain-types';
import { expect } from 'chai';
import { ethers } from 'hardhat';

export interface DiamondReadableBehaviorArgs {
  facetCuts: any[];
}

export function describeBehaviorOfDiamondReadable(
  deploy: () => Promise<IDiamondReadable>,
  { facetCuts }: DiamondReadableBehaviorArgs,
  skips?: string[],
) {
  const describe = describeFilter(skips);

  describe('::DiamondReadable', function () {
    let instance: IDiamondReadable;

    beforeEach(async function () {
      expect(facetCuts).to.have.lengthOf.at.least(1);
      instance = await deploy();
    });

    // TODO: nonstandard usage
    describeBehaviorOfERC165Base(
      deploy as any,
      {
        interfaceIds: ['0x48e2b093'],
      },
      skips,
    );

    describe('#facets()', function () {
      it('returns facet cuts', async function () {
        expect(
          Array.from(await instance.facets.staticCall()),
        ).to.have.deep.members(
          facetCuts.map((fc) => [fc.target, fc.selectors]),
        );
      });
    });

    describe('#facetAddresses()', function () {
      it('returns facets', async function () {
        expect(
          Array.from(await instance.facetAddresses.staticCall()),
        ).to.have.members(facetCuts.map((fc) => fc.target));
      });
    });

    describe('#facetFunctionSelectors(address)', function () {
      it('returns selectors for given facet', async function () {
        for (let facet of facetCuts) {
          expect(
            Array.from(
              await instance.facetFunctionSelectors.staticCall(facet.target),
            ),
          ).to.have.members(facet.selectors);
        }
      });

      it('returns empty array for unrecognized facet', async function () {
        expect(
          await instance.facetFunctionSelectors.staticCall(ethers.ZeroAddress),
        ).to.have.lengthOf(0);
      });
    });

    describe('#facetAddress(bytes4)', function () {
      it('returns facet for given selector', async function () {
        for (let facet of facetCuts) {
          for (let selector of facet.selectors) {
            expect(await instance.facetAddress.staticCall(selector)).to.equal(
              facet.target,
            );
          }
        }
      });

      it('returns zero address for unrecognized selector', async function () {
        expect(await instance.facetAddress.staticCall('0x00000000')).to.equal(
          ethers.ZeroAddress,
        );
      });
    });
  });
}
