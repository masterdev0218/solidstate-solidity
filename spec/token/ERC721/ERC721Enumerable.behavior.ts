import { describeFilter } from '@solidstate/library';
import { ERC721Enumerable } from '@solidstate/typechain-types';
import { expect } from 'chai';
import { ContractTransaction } from 'ethers';

export interface ERC721EnumerableBehaviorArgs {
  mint: (address: string, tokenId: BigInt) => Promise<ContractTransaction>;
  burn: (tokenId: BigInt) => Promise<ContractTransaction>;
  supply: BigInt;
}

export function describeBehaviorOfERC721Enumerable(
  deploy: () => Promise<ERC721Enumerable>,
  { mint, burn, supply }: ERC721EnumerableBehaviorArgs,
  skips?: string[],
) {
  const describe = describeFilter(skips);

  describe('::ERC721Enumerable', function () {
    let instance: ERC721Enumerable;

    beforeEach(async function () {
      instance = await deploy();
    });

    describe('#totalSupply()', function () {
      it('returns total token supply', async function () {
        expect(await instance.totalSupply()).to.equal(supply);

        await mint(await instance.getAddress(), 2n);
        expect(await instance.totalSupply()).to.equal(supply + 1n);

        await burn(2);
        expect(await instance.totalSupply()).to.equal(supply);
      });
    });

    describe('#tokenOfOwnerByIndex(address,uint256)', function () {
      it('returns token id held by given account at given index', async function () {
        // TODO: query balance to determine starting index

        await expect(
          instance.tokenOfOwnerByIndex.staticCall(
            await instance.getAddress(),
            0,
          ),
        ).to.be.revertedWithCustomError(
          instance,
          'EnumerableSet__IndexOutOfBounds',
        );

        await expect(
          instance.tokenOfOwnerByIndex.staticCall(
            await instance.getAddress(),
            1,
          ),
        ).to.be.revertedWithCustomError(
          instance,
          'EnumerableSet__IndexOutOfBounds',
        );

        await mint(await instance.getAddress(), 1n);
        await mint(await instance.getAddress(), 2n);

        expect(
          await instance.tokenOfOwnerByIndex.staticCall(
            await instance.getAddress(),
            0,
          ),
        ).to.equal(1);

        expect(
          await instance.tokenOfOwnerByIndex.staticCall(
            await instance.getAddress(),
            1,
          ),
        ).to.equal(2);
      });
    });

    describe('#tokenByIndex(uint256)', function () {
      it('returns token id held globally at given index', async function () {
        const index = await instance.totalSupply.staticCall();

        await expect(
          instance.tokenByIndex.staticCall(index),
        ).to.be.revertedWithCustomError(
          instance,
          'EnumerableMap__IndexOutOfBounds',
        );

        await expect(
          instance.tokenByIndex.staticCall(index + 1n),
        ).to.be.revertedWithCustomError(
          instance,
          'EnumerableMap__IndexOutOfBounds',
        );

        // TODO: mint to different addresses
        await mint(await instance.getAddress(), 1n);
        await mint(await instance.getAddress(), 2n);

        expect(await instance.tokenByIndex.staticCall(index)).to.equal(1);

        expect(await instance.tokenByIndex.staticCall(index + 1n)).to.equal(2);
      });
    });
  });
}
