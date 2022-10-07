import {
  IncrementalMerkleTreeMock,
  IncrementalMerkleTreeMock__factory,
} from '@solidstate/typechain-types';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import keccak256 from 'keccak256';
import { MerkleTree } from 'merkletreejs';

describe('IncrementalMerkleTree', function () {
  let instance: IncrementalMerkleTreeMock;

  beforeEach(async function () {
    const [deployer] = await ethers.getSigners();
    instance = await new IncrementalMerkleTreeMock__factory(deployer).deploy();
  });

  describe('#size', () => {
    it('returns number of elements in tree', async () => {
      expect(await instance.callStatic.size()).to.equal(0);

      for (let i = 1; i < 10; i++) {
        await instance.push(ethers.utils.randomBytes(32));

        expect(await instance.callStatic.size()).to.equal(i);
      }
    });
  });

  describe('#height', () => {
    it('returns one-indexed height of tree', async () => {
      expect(await instance.callStatic.size()).to.equal(0);

      for (let i = 1; i < 10; i++) {
        await instance.push(ethers.utils.randomBytes(32));

        expect(await instance.callStatic.height()).to.equal(
          Math.ceil(Math.log2(i) + 1),
        );
      }
    });
  });

  describe('#root', () => {
    it('returns zero bytes for tree of size zero', async () => {
      expect(await instance.callStatic.root()).to.equal(
        ethers.constants.HashZero,
      );
    });

    it('returns contained element for tree of size one', async () => {
      const hash = ethers.utils.randomBytes(32);

      await instance.push(hash);

      expect(await instance.callStatic.root()).to.equal(
        ethers.utils.hexlify(hash),
      );
    });

    it('returns Merkle root derived from elements contained in balanced tree', async () => {
      const hash_a = ethers.utils.randomBytes(32);
      const hash_b = ethers.utils.randomBytes(32);

      const hash = ethers.utils.solidityKeccak256(
        ['bytes32', 'bytes32'],
        [hash_a, hash_b],
      );

      await instance.push(hash_a);
      await instance.push(hash_b);

      expect(await instance.callStatic.root()).to.equal(hash);
    });

    it('returns Merkle root derived from elements contained in unbalanced tree', async () => {
      const hash_a = ethers.utils.randomBytes(32);
      const hash_b = ethers.utils.randomBytes(32);
      const hash_c = ethers.utils.randomBytes(32);

      const hash_ab = ethers.utils.solidityKeccak256(
        ['bytes32', 'bytes32'],
        [hash_a, hash_b],
      );

      const hash = ethers.utils.solidityKeccak256(
        ['bytes32', 'bytes32'],
        [hash_ab, hash_c],
      );

      await instance.push(hash_a);
      await instance.push(hash_b);
      await instance.push(hash_c);

      expect(await instance.callStatic.root()).to.equal(hash);
    });

    it('POC: returns Merkle root derived from elements contained in unbalanced tree', async () => {
      const hash_a = ethers.utils.randomBytes(32);
      const hash_b = ethers.utils.randomBytes(32);
      const hash_c = ethers.utils.randomBytes(32);

      const leaves = [hash_a, hash_b, hash_c];
      const tree = new MerkleTree(leaves, keccak256);
      const root = tree.getHexRoot();

      await instance.push(hash_a);
      await instance.push(hash_b);
      await instance.push(hash_c);

      expect(await instance.callStatic.root()).to.equal(root);
    });
  });

  describe('#push', () => {
    it('updates Merkle root', async () => {
      const hashes = [];

      for (let i = 0; i < 10; i++) {
        const hash = ethers.utils.randomBytes(32);
        hashes.push(hash);
      }

      for (let i = 0; i < hashes.length; i++) {
        await instance.push(hashes[i]);

        const tree = new MerkleTree(hashes.slice(0, i + 1), keccak256);

        expect(await instance.callStatic.root()).to.equal(tree.getHexRoot());
      }
    });
  });

  describe('#set', () => {
    it('updates Merkle root', async () => {
      const hashes = [];

      for (let i = 0; i < 10; i++) {
        const hash = ethers.utils.randomBytes(32);
        hashes.push(hash);
        await instance.push(hash);
      }

      for (let i = 0; i < hashes.length; i++) {
        const hash = ethers.utils.randomBytes(32);

        hashes[i] = hash;
        await instance.set(i, hash);

        const tree = new MerkleTree(hashes, keccak256);

        expect(await instance.callStatic.root()).to.equal(tree.getHexRoot());
      }
    });
  });
});
