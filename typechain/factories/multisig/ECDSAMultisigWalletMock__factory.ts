/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ECDSAMultisigWalletMock,
  ECDSAMultisigWalletMockInterface,
} from '../../multisig/ECDSAMultisigWalletMock';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from 'ethers';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'signers',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'quorum',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address payable',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'delegate',
            type: 'bool',
          },
        ],
        internalType: 'struct ECDSAMultisigWallet.Parameters',
        name: 'parameters',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
        ],
        internalType: 'struct ECDSAMultisigWallet.Signature[]',
        name: 'signatures',
        type: 'tuple[]',
      },
    ],
    name: 'verifyAndExecute',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b50604051620011b5380380620011b5833981016040819052620000349162000337565b60006200004b620000c960201b620000aa1760201c565b905060005b8351811015620000a5576200009084828151811062000073576200007362000411565b602002602001015183620000ed60201b620000ce1790919060201c565b806200009c8162000427565b91505062000050565b50620000c08282620001ef60201b620001b01790919060201c565b50505062000451565b7fefbeb23122815a77e8a934c80d6f169b772e3a6471b982e51a98ff0d8fa5c7b790565b61010062000109836001016200028360201b620002351760201c565b106200016e5760405162461bcd60e51b815260206004820152602960248201527f45434453414d756c746973696757616c6c65743a207369676e6572206c696d696044820152681d081c995858da195960ba1b60648201526084015b60405180910390fd5b6200018b81836001016200029460201b6200023f1790919060201c565b620001eb5760405162461bcd60e51b815260206004820152602960248201527f45434453414d756c746973696757616c6c65743a206661696c656420746f206160448201526832321039b4b3b732b960b91b606482015260840162000165565b5050565b62000208826001016200028360201b620002351760201c565b8111156200027f5760405162461bcd60e51b815260206004820152603860248201527f45434453414d756c746973696757616c6c65743a20696e73756666696369656e60448201527f74207369676e65727320746f206d6565742071756f72756d0000000000000000606482015260840162000165565b9055565b60006200028e825490565b92915050565b6000620002ab836001600160a01b038416620002b2565b9392505050565b6000818152600183016020526040812054620002fb575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200028e565b5060006200028e565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200033257600080fd5b919050565b600080604083850312156200034b57600080fd5b82516001600160401b03808211156200036357600080fd5b818501915085601f8301126200037857600080fd5b81516020828211156200038f576200038f62000304565b8160051b604051601f19603f83011681018181108682111715620003b757620003b762000304565b604052928352818301935084810182019289841115620003d657600080fd5b948201945b83861015620003ff57620003ef866200031a565b85529482019493820193620003db565b97909101519698969750505050505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200044a57634e487b7160e01b600052601160045260246000fd5b5060010190565b610d5480620004616000396000f3fe6080604052600436106100225760003560e01c806304887cf51461002e57600080fd5b3661002957005b600080fd5b61004161003c366004610b2f565b610057565b60405161004e9190610c37565b60405180910390f35b606061009883600001518460200151856040015186606001516040516020016100839493929190610c6a565b60405160208183030381529060405283610254565b6100a183610540565b90505b92915050565b7fefbeb23122815a77e8a934c80d6f169b772e3a6471b982e51a98ff0d8fa5c7b790565b6101006100dd83600101610235565b106101415760405162461bcd60e51b815260206004820152602960248201527f45434453414d756c746973696757616c6c65743a207369676e6572206c696d696044820152681d081c995858da195960ba1b60648201526084015b60405180910390fd5b61014e600183018261023f565b6101ac5760405162461bcd60e51b815260206004820152602960248201527f45434453414d756c746973696757616c6c65743a206661696c656420746f206160448201526832321039b4b3b732b960b91b6064820152608401610138565b5050565b6101bc82600101610235565b8111156102315760405162461bcd60e51b815260206004820152603860248201527f45434453414d756c746973696757616c6c65743a20696e73756666696369656e60448201527f74207369676e65727320746f206d6565742071756f72756d00000000000000006064820152608401610138565b9055565b60006100a4825490565b60006100a1836001600160a01b0384166106bb565b600061025e6100aa565b90508060000154825110156102c55760405162461bcd60e51b815260206004820152602760248201527f45434453414d756c746973696757616c6c65743a2071756f72756d206e6f74206044820152661c995858da195960ca1b6064820152608401610138565b6000805b83518110156105395760008482815181106102e6576102e6610cb3565b60200260200101519050600061037c82600001516103768985602001513060405160200161031693929190610cc9565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b9061070a565b9050600061038d6001870183610785565b905061010081106103fd5760405162461bcd60e51b815260206004820152603460248201527f45434453414d756c746973696757616c6c65743a207265636f766572656420736044820152731a59db995c881b9bdd08185d5d1a1bdc9a5e995960621b6064820152608401610138565b6020838101516001600160a01b038416600090815260038901835260408082209282529190925290205460ff16156104825760405162461bcd60e51b815260206004820152602260248201527f45434453414d756c746973696757616c6c65743a20696e76616c6964206e6f6e604482015261636560f01b6064820152608401610138565b6020838101516001600160a01b03841660009081526003890183526040808220928252919092529020805460ff191660011790556001811b858116156105295760405162461bcd60e51b815260206004820152603660248201527f45434453414d756c746973696757616c6c65743a207369676e65722063616e6e6044820152756f74207369676e206d6f7265207468616e206f6e636560501b6064820152608401610138565b94909417935050506001016102c9565b5050505050565b60606000606083606001511561063657348460400151146105cb576040805162461bcd60e51b81526020600482015260248101919091527f45434453414d756c746973696757616c6c65743a2064656c656761746563616c60448201527f6c2076616c7565206d757374206d61746368207369676e656420616d6f756e746064820152608401610138565b83600001516001600160a01b031684602001516040516105eb9190610d02565b600060405180830381855af49150503d8060008114610626576040519150601f19603f3d011682016040523d82523d6000602084013e61062b565b606091505b5090925090506106a4565b83600001516001600160a01b03168460400151856020015160405161065b9190610d02565b60006040518083038185875af1925050503d8060008114610698576040519150601f19603f3d011682016040523d82523d6000602084013e61069d565b606091505b5090925090505b81156106b1579392505050565b3d6000803e3d6000fd5b6000818152600183016020526040812054610702575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556100a4565b5060006100a4565b6000815160411461075d5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610138565b60208201516040830151606084015160001a61077b868285856107a9565b9695505050505050565b6001600160a01b0381166000908152600183016020526040812054600019016100a1565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156108265760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610138565b8360ff16601b148061083b57508360ff16601c145b6108925760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610138565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa1580156108e6573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166109495760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610138565b95945050505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561098b5761098b610952565b60405290565b6040516080810167ffffffffffffffff8111828210171561098b5761098b610952565b604051601f8201601f1916810167ffffffffffffffff811182821017156109dd576109dd610952565b604052919050565b600082601f8301126109f657600080fd5b813567ffffffffffffffff811115610a1057610a10610952565b610a23601f8201601f19166020016109b4565b818152846020838601011115610a3857600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f830112610a6657600080fd5b8135602067ffffffffffffffff80831115610a8357610a83610952565b8260051b610a928382016109b4565b9384528581018301938381019088861115610aac57600080fd5b84880192505b85831015610b2357823584811115610aca5760008081fd5b88016040818b03601f1901811315610ae25760008081fd5b610aea610968565b8783013587811115610afc5760008081fd5b610b0a8d8a838701016109e5565b8252509101358682015282529184019190840190610ab2565b98975050505050505050565b60008060408385031215610b4257600080fd5b823567ffffffffffffffff80821115610b5a57600080fd5b9084019060808287031215610b6e57600080fd5b610b76610991565b82356001600160a01b0381168114610b8d57600080fd5b8152602083013582811115610ba157600080fd5b610bad888286016109e5565b60208301525060408301356040820152606083013592508215158314610bd257600080fd5b826060820152809450506020850135915080821115610bf057600080fd5b50610bfd85828601610a55565b9150509250929050565b60005b83811015610c22578181015183820152602001610c0a565b83811115610c31576000848401525b50505050565b6020815260008251806020840152610c56816040850160208701610c07565b601f01601f19169190910160400192915050565b6bffffffffffffffffffffffff198560601b16815260008451610c94816014850160208901610c07565b909101601481019390935250151560f81b603482015260350192915050565b634e487b7160e01b600052603260045260246000fd5b60008451610cdb818460208901610c07565b919091019283525060601b6bffffffffffffffffffffffff19166020820152603401919050565b60008251610d14818460208701610c07565b919091019291505056fea26469706673582212206d9136c55004a2c71699c329bccc743b37d01506156a9c5e0f02112d5f21065964736f6c634300080a0033';

type ECDSAMultisigWalletMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ECDSAMultisigWalletMockConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ECDSAMultisigWalletMock__factory extends ContractFactory {
  constructor(...args: ECDSAMultisigWalletMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    signers: string[],
    quorum: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ECDSAMultisigWalletMock> {
    return super.deploy(
      signers,
      quorum,
      overrides || {},
    ) as Promise<ECDSAMultisigWalletMock>;
  }
  override getDeployTransaction(
    signers: string[],
    quorum: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(signers, quorum, overrides || {});
  }
  override attach(address: string): ECDSAMultisigWalletMock {
    return super.attach(address) as ECDSAMultisigWalletMock;
  }
  override connect(signer: Signer): ECDSAMultisigWalletMock__factory {
    return super.connect(signer) as ECDSAMultisigWalletMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ECDSAMultisigWalletMockInterface {
    return new utils.Interface(_abi) as ECDSAMultisigWalletMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): ECDSAMultisigWalletMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider,
    ) as ECDSAMultisigWalletMock;
  }
}
