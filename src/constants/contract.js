const ABIToken = [
  {
    'inputs': [],
    'stateMutability': 'nonpayable',
    'type': 'constructor',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'owner',
        'type': 'address',
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'spender',
        'type': 'address',
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'value',
        'type': 'uint256',
      },
    ],
    'name': 'Approval',
    'type': 'event',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'previousOwner',
        'type': 'address',
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'newOwner',
        'type': 'address',
      },
    ],
    'name': 'OwnershipTransferred',
    'type': 'event',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'from',
        'type': 'address',
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'to',
        'type': 'address',
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'value',
        'type': 'uint256',
      },
    ],
    'name': 'Transfer',
    'type': 'event',
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'owner',
        'type': 'address',
      },
      {
        'internalType': 'address',
        'name': 'spender',
        'type': 'address',
      },
    ],
    'name': 'allowance',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'spender',
        'type': 'address',
      },
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256',
      },
    ],
    'name': 'approve',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool',
      },
    ],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'account',
        'type': 'address',
      },
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256',
      },
    ],
    'name': 'burn',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'account',
        'type': 'address',
      },
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256',
      },
    ],
    'name': 'burnFrom',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [],
    'name': 'decimals',
    'outputs': [
      {
        'internalType': 'uint8',
        'name': '',
        'type': 'uint8',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'spender',
        'type': 'address',
      },
      {
        'internalType': 'uint256',
        'name': 'subtractedValue',
        'type': 'uint256',
      },
    ],
    'name': 'decreaseAllowance',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool',
      },
    ],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'spender',
        'type': 'address',
      },
      {
        'internalType': 'uint256',
        'name': 'addedValue',
        'type': 'uint256',
      },
    ],
    'name': 'increaseAllowance',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool',
      },
    ],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [],
    'name': 'name',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [],
    'name': 'owner',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [],
    'name': 'renounceOwnership',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [],
    'name': 'symbol',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'recipient',
        'type': 'address',
      },
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256',
      },
    ],
    'name': 'transfer',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool',
      },
    ],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'sender',
        'type': 'address',
      },
      {
        'internalType': 'address',
        'name': 'recipient',
        'type': 'address',
      },
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256',
      },
    ],
    'name': 'transferFrom',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool',
      },
    ],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'newOwner',
        'type': 'address',
      },
    ],
    'name': 'transferOwnership',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
];

const addressToken = '0x0230E3760B53b08426d15aaf5A327ED6d0Dd36B7';


const ABIContractBuilder = [
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'rewardToken_',
        'type': 'address',
      },
    ],
    'stateMutability': 'nonpayable',
    'type': 'constructor',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'id',
        'type': 'uint256',
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'totalSupply',
        'type': 'uint256',
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'timeEndFund',
        'type': 'uint256',
      },
    ],
    'name': 'NewFunding',
    'type': 'event',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'id',
        'type': 'uint256',
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'sumTask',
        'type': 'uint256',
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'timeTaskEnd',
        'type': 'uint256',
      },
    ],
    'name': 'NewTask',
    'type': 'event',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'id',
        'type': 'uint256',
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'sumOption',
        'type': 'uint256',
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'timeVoteEnd',
        'type': 'uint256',
      },
    ],
    'name': 'NewVote',
    'type': 'event',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'contract IERC20',
        'name': 'token',
        'type': 'address',
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'beneficiary',
        'type': 'address',
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'balance',
        'type': 'uint256',
      },
    ],
    'name': 'SweepToken',
    'type': 'event',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'tokenAddress',
        'type': 'address',
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'startingSupply',
        'type': 'uint256',
      },
    ],
    'name': 'TokenCreated',
    'type': 'event',
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'oldBeneficiary',
        'type': 'address',
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'beneficiary',
        'type': 'address',
      },
    ],
    'name': 'TransferBeneficiary',
    'type': 'event',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': '_sumTask',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': '_timeEnd',
        'type': 'uint256',
      },
    ],
    'name': 'CreateTask',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': '_sumOption',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': '_timeEnd',
        'type': 'uint256',
      },
    ],
    'name': 'CreateVote',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': '_idOption',
        'type': 'uint256',
      },
    ],
    'name': 'PersonVote',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256',
      },
    ],
    'name': 'VoteToOwer',
    'outputs': [
      {
        'internalType': 'address',
        'name': 'chairPerson',
        'type': 'address',
      },
      {
        'internalType': 'uint256',
        'name': 'sumOption',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': 'timeVoteEnd',
        'type': 'uint256',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256',
      },
    ],
    'name': 'allTokens',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [],
    'name': 'allTokensLength',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [],
    'name': 'beneficiary',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': '_fee',
        'type': 'uint256',
      },
    ],
    'name': 'bidFunding',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'token_',
        'type': 'address',
      },
      {
        'internalType': 'uint256',
        'name': 'fee_',
        'type': 'uint256',
      },
    ],
    'name': 'buyTokenFan',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [],
    'name': 'checkStake',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': 'name',
        'type': 'string',
      },
      {
        'internalType': 'string',
        'name': 'symbol',
        'type': 'string',
      },
      {
        'internalType': 'uint256',
        'name': 'supply',
        'type': 'uint256',
      },
    ],
    'name': 'createToken',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address',
      },
    ],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [],
    'name': 'freeToken',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256',
      },
    ],
    'name': 'fundToOwer',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': 'id',
        'type': 'uint256',
      },
      {
        'internalType': 'address',
        'name': 'chairPerson',
        'type': 'address',
      },
      {
        'internalType': 'uint256',
        'name': 'totalFundPerson',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': 'totalSupply',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': 'timeEndFund',
        'type': 'uint256',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
    ],
    'name': 'getChairPerson',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
    ],
    'name': 'getChairPersonFunding',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
    ],
    'name': 'getCheckVote',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': '_option',
        'type': 'uint256',
      },
    ],
    'name': 'getOption',
    'outputs': [
      {
        'internalType': 'address[]',
        'name': '',
        'type': 'address[]',
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
    ],
    'name': 'getPresonFund',
    'outputs': [
      {
        'internalType': 'address[]',
        'name': '',
        'type': 'address[]',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
    ],
    'name': 'getSumMoneyPresonFund',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
    ],
    'name': 'getSumOptionVote',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
    ],
    'name': 'getTimeEndFund',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
    ],
    'name': 'getTimeEndVote',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
    ],
    'name': 'getTimeTaskEnd',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
    ],
    'name': 'getTotalFundPerson',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256',
      },
    ],
    'name': 'ownerToTask',
    'outputs': [
      {
        'internalType': 'address',
        'name': 'chairPerson',
        'type': 'address',
      },
      {
        'internalType': 'uint256',
        'name': 'sumTask',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': 'timeTaskEnd',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': 'totalReward',
        'type': 'uint256',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'token_',
        'type': 'address',
      },
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': '_sumTaskOk',
        'type': 'uint256',
      },
    ],
    'name': 'rewardTask',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'fee_',
        'type': 'uint256',
      },
    ],
    'name': 'staking',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': '_totalSupply',
        'type': 'uint256',
      },
      {
        'internalType': 'uint256',
        'name': '_timeEnd',
        'type': 'uint256',
      },
    ],
    'name': 'stakingAndFunding',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function',
  },
  {
    'inputs': [],
    'name': 'token',
    'outputs': [
      {
        'internalType': 'contract IERC20',
        'name': '',
        'type': 'address',
      },
    ],
    'stateMutability': 'view',
    'type': 'function',
  },
];


const addressContractBuilder = '0x3101E4fDA6a84c14bC975668a71b1dE78066A4f5';

const webDomain = 'http://ratp.link';

const contracts = {
  ABIToken,
  addressToken,
  ABIContractBuilder,
  addressContractBuilder,
  webDomain,
};


export default contracts;
