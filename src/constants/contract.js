const ABI = [
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

const address = '0xD52d9Bb4437Ff34C86D1ECA3cB1e01C02F042ad7';
const webDomain = 'http://ratp.link';

const contracts = {
  ABI,
  address,
  webDomain,
};


export default contracts;
