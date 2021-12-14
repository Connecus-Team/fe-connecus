
========================================================================================================
1. new contract
- new web3.eth.Contract(jsonInterface[, address][, options])
example: 
var myContract = new web3.eth.Contract([...], '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
    from: '0x1234567890123456789012345678901234567891', // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});

2. defaultAccount: This default address is used as the default "from" property, if no "from" property is specified in for the following methods:
web3.eth.Contract.defaultAccount
contract.defaultAccount // on contract instance


example:
web3.eth.defaultAccount;
> undefined

// set the default account
web3.eth.defaultAccount = '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe';

3. defaultBlock : The default block is used for certain methods. You can override it by passing in the defaultBlock as last parameter. The default value is "latest"
web3.eth.Contract.defaultBlock
contract.defaultBlock // on contract instance

example:
contract.defaultBlock;
> "latest"

// set the default block
contract.defaultBlock = 231;


4. defaultHardfork : The default hardfork property is used for signing transactions locally.
contract.defaultHardfork

example: 
contract.defaultHardfork;
> "petersburg"

// set the default block
contract.defaultHardfork = 'istanbul';

5. defaultChain : The default chain property is used for signing transactions locally.
contract.defaultChain

example: 
contract.defaultChain;
> "mainnet"

// set the default chain
contract.defaultChain = 'goerli';

6. defaultCommon : The default common property is used for signing transactions locally.
contract.defaultCommon

example:
contract.defaultCommon;
> {customChain: {name: 'custom-network', chainId: 1, networkId: 1}, baseChain: 'mainnet', hardfork: 'petersburg'}

// set the default common
contract.defaultCommon = {customChain: {name: 'custom-network', chainId: 1, networkId: 1}, baseChain: 'mainnet', hardfork: 'petersburg'};

7. transactionBlockTimeout : The transactionBlockTimeout is used over socket-based connections. This option defines the amount of new blocks it should wait until the first confirmation happens, otherwise the PromiEvent rejects with a timeout error.
web3.eth.Contract.transcationBlockTimeout
contract.transactionBlockTimeout // on contract instance

example: 
web3.eth.Contract.transcationBlockTimeout
contract.transactionBlockTimeout // on contract instance

8. transactionConfirmationBlocks : This defines the number of blocks it requires until a transaction is considered confirmed.
web3.eth.Contract.transactionConfirmationBlocks
contract.transactionConfirmationBlocks // on contract instance

9. transactionPollingTimeout : The transactionPollingTimeout is used over HTTP connections. This option defines the number of seconds Web3 will wait for a receipt which confirms that a transaction was mined by the network. Note: If this method times out, the transaction may still be pending.
web3.eth.Contract.transactionPollingTimeout
contract.transactionPollingTimeout // on contract instance

10. handleRevert : The handleRevert options property defaults to false and returns the revert reason string if enabled on send or call of a contract method.
web3.eth.Contract.handleRevert
contract.handleRevert // on contract instance

11. option : The options object for the contract instance. from, gas and gasPrice are used as fallback values when sending transactions.
address - String: The address where the contract is deployed. See options.address.
jsonInterface - Array: The json interface of the contract. See options.jsonInterface.
data - String: The byte code of the contract. Used when the contract gets deployed.
from - String: The address transactions should be made from.
gasPrice - String: The gas price in wei to use for transactions.
gas - Number: The maximum gas provided for a transaction (gas limit).
handleRevert - Boolean: It will otherwise use the default value provided from the Eth module. See handleRevert.
transactionBlockTimeout - Number: It will otherwise use the default value provided from the Eth module. See transactionBlockTimeout.
transactionConfirmationBlocks - Number: It will otherwise use the default value provided from the Eth module. See transactionConfirmationBlocks.
transactionPollingTimeout - Number: It will otherwise use the default value provided from the Eth module. See transactionPollingTimeout.
chain - Number: It will otherwise use the default value provided from the Eth module. See defaultChain.
hardfork - Number: It will otherwise use the default value provided from the Eth module. See defaultHardfork.
common - Number: It will otherwise use the default value provided from the Eth module. See defaultCommon.

example: 
myContract.options;
> {
    address: '0x1234567890123456789012345678901234567891',
    jsonInterface: [...],
    from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
    gasPrice: '10000000000000',
    gas: 1000000
}

myContract.options.from = '0x1234567890123456789012345678901234567891'; // default from address
myContract.options.gasPrice = '20000000000000'; // default gas price in wei
myContract.options.gas = 5000000; // provide as fallback always 5M gas


12. options.address: The address used for this contract instance. All transactions generated by web3.js from this contract will contain this address as the "to"
myContract.options.address

myContract.options.address;
> '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae'

// set a new address
myContract.options.address = '0x1234FFDD...';


13. options.jsonInterface :  The json interface object derived from the ABI of this contract.
myContract.options.jsonInterface

example: 
myContract.options.jsonInterface;
> [{
    "type":"function",
    "name":"foo",
    "inputs": [{"name":"a","type":"uint256"}],
    "outputs": [{"name":"b","type":"address"}]
},{
    "type":"event",
    "name":"Event",
    "inputs": [{"name":"a","type":"uint256","indexed":true},{"name":"b","type":"bytes32","indexed":false}],
}]

// set a new interface
myContract.options.jsonInterface = [...];

14. clone()
15. deploy()
16. methods()
17. methods.myMethod.call()
18. methods.myMethod.send()
19. methods.myMethod.estimateGas()
20. methods.myMethod.encodeABI
21. once
22. events
23. events.allEvents()
24. getPastEvents()


========================================================================================================