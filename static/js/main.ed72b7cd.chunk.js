(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{136:function(e){e.exports=JSON.parse('{"contractName":"Whitelist","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_address","type":"address"}],"name":"Whitelisted","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"whitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"nonpayable","type":"function"}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.6.11+commit.5ef660b1\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"address\\",\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"Whitelisted\\",\\"type\\":\\"event\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"_whitelist\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"addresses\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"getAddresses\\",\\"outputs\\":[{\\"internalType\\":\\"address[]\\",\\"name\\":\\"\\",\\"type\\":\\"address[]\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"whitelist\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"kind\\":\\"dev\\",\\"methods\\":{},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{},\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"/Users/yosrahelal/whitelist-react-box/contracts/Whitelist.sol\\":\\"Whitelist\\"},\\"evmVersion\\":\\"byzantium\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\"},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"/Users/yosrahelal/whitelist-react-box/contracts/Whitelist.sol\\":{\\"keccak256\\":\\"0xdd4e5e23e99366330d4ac3d74f5b5a6c532976126489eba94f4025c605926dcd\\",\\"license\\":\\"MIT\\",\\"urls\\":[\\"bzz-raw://f89ccb3c4fd14d875986788d344d091bca192c40b17ba4a39271a8abe9bd4e00\\",\\"dweb:/ipfs/QmPbvxa3Fo8eF4gyP1eeju4oX4u3cubD96XGP7eyaRH4bG\\"]}},\\"version\\":1}","bytecode":"0x608060405234801561001057600080fd5b506104e2806100206000396000f3fe608060405234801561001057600080fd5b5060043610610069576000357c0100000000000000000000000000000000000000000000000000000000900480639b19251a1461006e578063a39fac12146100b2578063cfdb63ac14610111578063edf26d9b1461016d575b600080fd5b6100b06004803603602081101561008457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101db565b005b6100ba61039d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100fd5780820151818401526020810190506100e2565b505050509050019250505060405180910390f35b6101536004803603602081101561012757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061042b565b604051808215151515815260200191505060405180910390f35b6101996004803603602081101561018357600080fd5b810190808035906020019092919050505061044b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561027d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806104886025913960400191505060405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507faab7954e9d246b167ef88aeddad35209ca2489d95a8aeb59e288d9b19fae5a5481604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6060600180548060200260200160405190810160405280929190818152602001828054801561042157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116103d7575b5050505050905090565b60006020528060005260406000206000915054906101000a900460ff1681565b6001818154811061045857fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe54686973206164647265737320697320616c72656164792077686974656c69737465642021a2646970667358221220c1ac9b0163d8d7f6e6b73439f201ac74c6ecdb3e247befd8ecabe099486de94364736f6c634300060b0033","deployedBytecode":"0x608060405234801561001057600080fd5b5060043610610069576000357c0100000000000000000000000000000000000000000000000000000000900480639b19251a1461006e578063a39fac12146100b2578063cfdb63ac14610111578063edf26d9b1461016d575b600080fd5b6100b06004803603602081101561008457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101db565b005b6100ba61039d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100fd5780820151818401526020810190506100e2565b505050509050019250505060405180910390f35b6101536004803603602081101561012757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061042b565b604051808215151515815260200191505060405180910390f35b6101996004803603602081101561018357600080fd5b810190808035906020019092919050505061044b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561027d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806104886025913960400191505060405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507faab7954e9d246b167ef88aeddad35209ca2489d95a8aeb59e288d9b19fae5a5481604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6060600180548060200260200160405190810160405280929190818152602001828054801561042157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116103d7575b5050505050905090565b60006020528060005260406000206000915054906101000a900460ff1681565b6001818154811061045857fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe54686973206164647265737320697320616c72656164792077686974656c69737465642021a2646970667358221220c1ac9b0163d8d7f6e6b73439f201ac74c6ecdb3e247befd8ecabe099486de94364736f6c634300060b0033","immutableReferences":{},"sourceMap":"57:484:1:-:0;;;;;;;;;;;;;;;;;;;","deployedSourceMap":"57:484:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;204:239;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;449:89;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;82:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;129:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;204:239;267:10;:20;278:8;267:20;;;;;;;;;;;;;;;;;;;;;;;;;266:21;258:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;362:4;339:10;:20;350:8;339:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;376:9;391:8;376:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;415:21;427:8;415:21;;;;;;;;;;;;;;;;;;;;;;204:239;:::o;449:89::-;488:16;522:9;515:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;449:89;:::o;82:41::-;;;;;;;;;;;;;;;;;;;;;;:::o;129:26::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"// SPDX-License-Identifier: MIT\\npragma solidity 0.6.11;\\n\\ncontract Whitelist {\\n    mapping(address=> bool) public _whitelist;\\n    address[] public addresses;\\n    event Whitelisted(address _address); \\n\\n    function whitelist(address _address) public {\\n        require(!_whitelist[_address], \\"This address is already whitelisted !\\");\\n        _whitelist[_address] = true;\\n        addresses.push(_address);\\n        emit Whitelisted(_address);\\n    }\\n\\n    function getAddresses() public returns(address[] memory){\\n        return addresses;\\n    }\\n\\n}\\n","sourcePath":"/Users/yosrahelal/whitelist-react-box/contracts/Whitelist.sol","ast":{"absolutePath":"/Users/yosrahelal/whitelist-react-box/contracts/Whitelist.sol","exportedSymbols":{"Whitelist":[89]},"id":90,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":38,"literals":["solidity","0.6",".11"],"nodeType":"PragmaDirective","src":"32:23:1"},{"abstract":false,"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":89,"linearizedBaseContracts":[89],"name":"Whitelist","nodeType":"ContractDefinition","nodes":[{"constant":false,"functionSelector":"cfdb63ac","id":42,"mutability":"mutable","name":"_whitelist","nodeType":"VariableDeclaration","overrides":null,"scope":89,"src":"82:41:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"typeName":{"id":41,"keyType":{"id":39,"name":"address","nodeType":"ElementaryTypeName","src":"90:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"82:23:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"valueType":{"id":40,"name":"bool","nodeType":"ElementaryTypeName","src":"100:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}},"value":null,"visibility":"public"},{"constant":false,"functionSelector":"edf26d9b","id":45,"mutability":"mutable","name":"addresses","nodeType":"VariableDeclaration","overrides":null,"scope":89,"src":"129:26:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":43,"name":"address","nodeType":"ElementaryTypeName","src":"129:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":44,"length":null,"nodeType":"ArrayTypeName","src":"129:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":49,"name":"Whitelisted","nodeType":"EventDefinition","parameters":{"id":48,"nodeType":"ParameterList","parameters":[{"constant":false,"id":47,"indexed":false,"mutability":"mutable","name":"_address","nodeType":"VariableDeclaration","overrides":null,"scope":49,"src":"179:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":46,"name":"address","nodeType":"ElementaryTypeName","src":"179:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"178:18:1"},"src":"161:36:1"},{"body":{"id":78,"nodeType":"Block","src":"248:195:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":58,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"266:21:1","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":55,"name":"_whitelist","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":42,"src":"267:10:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":57,"indexExpression":{"argumentTypes":null,"id":56,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"278:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"267:20:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"54686973206164647265737320697320616c72656164792077686974656c69737465642021","id":59,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"289:39:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_5c1ceab27dd6ed07f05dac916dcd1b6bd794a03c45049dce86e59097d8a43cc9","typeString":"literal_string \\"This address is already whitelisted !\\""},"value":"This address is already whitelisted !"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_5c1ceab27dd6ed07f05dac916dcd1b6bd794a03c45049dce86e59097d8a43cc9","typeString":"literal_string \\"This address is already whitelisted !\\""}],"id":54,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"258:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":60,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"258:71:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":61,"nodeType":"ExpressionStatement","src":"258:71:1"},{"expression":{"argumentTypes":null,"id":66,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":62,"name":"_whitelist","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":42,"src":"339:10:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":64,"indexExpression":{"argumentTypes":null,"id":63,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"350:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"339:20:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":65,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"362:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"339:27:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":67,"nodeType":"ExpressionStatement","src":"339:27:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":71,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"391:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":68,"name":"addresses","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":45,"src":"376:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"376:14:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":72,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"376:24:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":73,"nodeType":"ExpressionStatement","src":"376:24:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":75,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"427:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":74,"name":"Whitelisted","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":49,"src":"415:11:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":76,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"415:21:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":77,"nodeType":"EmitStatement","src":"410:26:1"}]},"documentation":null,"functionSelector":"9b19251a","id":79,"implemented":true,"kind":"function","modifiers":[],"name":"whitelist","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":52,"nodeType":"ParameterList","parameters":[{"constant":false,"id":51,"mutability":"mutable","name":"_address","nodeType":"VariableDeclaration","overrides":null,"scope":79,"src":"223:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":50,"name":"address","nodeType":"ElementaryTypeName","src":"223:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"222:18:1"},"returnParameters":{"id":53,"nodeType":"ParameterList","parameters":[],"src":"248:0:1"},"scope":89,"src":"204:239:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":87,"nodeType":"Block","src":"505:33:1","statements":[{"expression":{"argumentTypes":null,"id":85,"name":"addresses","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":45,"src":"522:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"functionReturnParameters":84,"id":86,"nodeType":"Return","src":"515:16:1"}]},"documentation":null,"functionSelector":"a39fac12","id":88,"implemented":true,"kind":"function","modifiers":[],"name":"getAddresses","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":80,"nodeType":"ParameterList","parameters":[],"src":"470:2:1"},"returnParameters":{"id":84,"nodeType":"ParameterList","parameters":[{"constant":false,"id":83,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":88,"src":"488:16:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":81,"name":"address","nodeType":"ElementaryTypeName","src":"488:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":82,"length":null,"nodeType":"ArrayTypeName","src":"488:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"src":"487:18:1"},"scope":89,"src":"449:89:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"}],"scope":90,"src":"57:484:1"}],"src":"32:510:1"},"legacyAST":{"absolutePath":"/Users/yosrahelal/whitelist-react-box/contracts/Whitelist.sol","exportedSymbols":{"Whitelist":[89]},"id":90,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":38,"literals":["solidity","0.6",".11"],"nodeType":"PragmaDirective","src":"32:23:1"},{"abstract":false,"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":89,"linearizedBaseContracts":[89],"name":"Whitelist","nodeType":"ContractDefinition","nodes":[{"constant":false,"functionSelector":"cfdb63ac","id":42,"mutability":"mutable","name":"_whitelist","nodeType":"VariableDeclaration","overrides":null,"scope":89,"src":"82:41:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"typeName":{"id":41,"keyType":{"id":39,"name":"address","nodeType":"ElementaryTypeName","src":"90:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"82:23:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"valueType":{"id":40,"name":"bool","nodeType":"ElementaryTypeName","src":"100:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}},"value":null,"visibility":"public"},{"constant":false,"functionSelector":"edf26d9b","id":45,"mutability":"mutable","name":"addresses","nodeType":"VariableDeclaration","overrides":null,"scope":89,"src":"129:26:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":43,"name":"address","nodeType":"ElementaryTypeName","src":"129:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":44,"length":null,"nodeType":"ArrayTypeName","src":"129:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":49,"name":"Whitelisted","nodeType":"EventDefinition","parameters":{"id":48,"nodeType":"ParameterList","parameters":[{"constant":false,"id":47,"indexed":false,"mutability":"mutable","name":"_address","nodeType":"VariableDeclaration","overrides":null,"scope":49,"src":"179:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":46,"name":"address","nodeType":"ElementaryTypeName","src":"179:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"178:18:1"},"src":"161:36:1"},{"body":{"id":78,"nodeType":"Block","src":"248:195:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":58,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"266:21:1","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":55,"name":"_whitelist","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":42,"src":"267:10:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":57,"indexExpression":{"argumentTypes":null,"id":56,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"278:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"267:20:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"54686973206164647265737320697320616c72656164792077686974656c69737465642021","id":59,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"289:39:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_5c1ceab27dd6ed07f05dac916dcd1b6bd794a03c45049dce86e59097d8a43cc9","typeString":"literal_string \\"This address is already whitelisted !\\""},"value":"This address is already whitelisted !"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_5c1ceab27dd6ed07f05dac916dcd1b6bd794a03c45049dce86e59097d8a43cc9","typeString":"literal_string \\"This address is already whitelisted !\\""}],"id":54,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"258:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":60,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"258:71:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":61,"nodeType":"ExpressionStatement","src":"258:71:1"},{"expression":{"argumentTypes":null,"id":66,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":62,"name":"_whitelist","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":42,"src":"339:10:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":64,"indexExpression":{"argumentTypes":null,"id":63,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"350:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"339:20:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":65,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"362:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"339:27:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":67,"nodeType":"ExpressionStatement","src":"339:27:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":71,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"391:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":68,"name":"addresses","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":45,"src":"376:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"376:14:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":72,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"376:24:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":73,"nodeType":"ExpressionStatement","src":"376:24:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":75,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"427:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":74,"name":"Whitelisted","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":49,"src":"415:11:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":76,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"415:21:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":77,"nodeType":"EmitStatement","src":"410:26:1"}]},"documentation":null,"functionSelector":"9b19251a","id":79,"implemented":true,"kind":"function","modifiers":[],"name":"whitelist","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":52,"nodeType":"ParameterList","parameters":[{"constant":false,"id":51,"mutability":"mutable","name":"_address","nodeType":"VariableDeclaration","overrides":null,"scope":79,"src":"223:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":50,"name":"address","nodeType":"ElementaryTypeName","src":"223:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"222:18:1"},"returnParameters":{"id":53,"nodeType":"ParameterList","parameters":[],"src":"248:0:1"},"scope":89,"src":"204:239:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":87,"nodeType":"Block","src":"505:33:1","statements":[{"expression":{"argumentTypes":null,"id":85,"name":"addresses","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":45,"src":"522:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"functionReturnParameters":84,"id":86,"nodeType":"Return","src":"515:16:1"}]},"documentation":null,"functionSelector":"a39fac12","id":88,"implemented":true,"kind":"function","modifiers":[],"name":"getAddresses","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":80,"nodeType":"ParameterList","parameters":[],"src":"470:2:1"},"returnParameters":{"id":84,"nodeType":"ParameterList","parameters":[{"constant":false,"id":83,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":88,"src":"488:16:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":81,"name":"address","nodeType":"ElementaryTypeName","src":"488:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":82,"length":null,"nodeType":"ArrayTypeName","src":"488:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"src":"487:18:1"},"scope":89,"src":"449:89:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"}],"scope":90,"src":"57:484:1"}],"src":"32:510:1"},"compiler":{"name":"solc","version":"0.6.11+commit.5ef660b1.Emscripten.clang"},"networks":{"3":{"events":{},"links":{},"address":"0x968E3E2c2250eC61B78846f400E0EC07C67cB424","transactionHash":"0xb3c19a7a7140a550f63d948c4db17856b0ac8e473b799c5a1972afaa48430eed"}},"schemaVersion":"3.2.3","updatedAt":"2020-07-30T17:52:38.184Z","devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}}')},269:function(e,t,f){e.exports=f(608)},274:function(e,t,f){},288:function(e,t){},312:function(e,t){},314:function(e,t){},331:function(e,t){},404:function(e,t){},406:function(e,t){},435:function(e,t){},436:function(e,t){},480:function(e,t){},482:function(e,t){},514:function(e,t){},516:function(e,t){},522:function(e,t){},604:function(e,t,f){},608:function(e,t,f){"use strict";f.r(t);var a=f(0),s=f.n(a),n=f(265),r=f.n(n),i=(f(274),f(25)),d=f.n(i),l=f(63),o=f(5),p=f(6),c=f(19),y=f(15),u=f(20),m=(f(276),f(268)),b=f(138),_=f(50),g=f(137),T=f(267),D=f(136),h=f(92),v=f.n(h),I=function(){return new Promise((function(e,t){window.addEventListener("load",Object(l.a)(d.a.mark((function f(){var a,s,n,r;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(!window.ethereum){f.next=13;break}return a=new v.a(window.ethereum),f.prev=2,f.next=5,window.ethereum.enable();case 5:e(a),f.next=11;break;case 8:f.prev=8,f.t0=f.catch(2),t(f.t0);case 11:f.next=14;break;case 13:window.web3?(s=window.web3,console.log("Injected web3 detected."),e(s)):(n=new v.a.providers.HttpProvider("http://127.0.0.1:8545"),r=new v.a(n),console.log("No web3 instance injected, using Local web3."),e(r));case 14:case"end":return f.stop()}}),f,null,[[2,8]])}))))}))},S=(f(604),function(e){function t(){var e,f;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(f=Object(c.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(s)))).state={web3:null,accounts:null,contract:null,whitelist:null},f.componentWillMount=Object(l.a)(d.a.mark((function e(){var t,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:return t=e.sent,e.next=6,t.eth.getAccounts();case 6:a=e.sent,D.networks[3],s=new t.eth.Contract(D.abi,"0x968E3E2c2250eC61B78846f400E0EC07C67cB424"),f.setState({web3:t,accounts:a,contract:s},f.runInit),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),alert("Non-Ethereum browser detected. Can you please try to install MetaMask before starting."),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),f.runInit=Object(l.a)(d.a.mark((function e(){var t,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.state,t.accounts,a=t.contract,e.next=3,a.methods.getAddresses().call();case 3:s=e.sent,f.setState({whitelist:s});case 5:case"end":return e.stop()}}),e)}))),f.whitelist=Object(l.a)(d.a.mark((function e(){var t,a,s,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.state,a=t.accounts,s=t.contract,n=f.address.value,e.next=4,s.methods.whitelist(n).send({from:a[0]});case 4:f.runInit();case 5:case"end":return e.stop()}}),e)}))),f}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state.whitelist;return this.state.web3?s.a.createElement("div",{className:"App"},s.a.createElement("div",null,s.a.createElement("h2",{className:"text-center"},"Syst\xe8me d'une liste blanche"),s.a.createElement("hr",null),s.a.createElement("br",null)),s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement(_.a,{style:{width:"50rem"}},s.a.createElement(_.a.Header,null,s.a.createElement("strong",null,"Liste des comptes autoris\xe9s")),s.a.createElement(_.a.Body,null,s.a.createElement(g.a,{variant:"flush"},s.a.createElement(g.a.Item,null,s.a.createElement(T.a,{striped:!0,bordered:!0,hover:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"@"))),s.a.createElement("tbody",null,null!==t&&t.map((function(e){return s.a.createElement("tr",null,s.a.createElement("td",null,e))}))))))))),s.a.createElement("br",null),s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement(_.a,{style:{width:"50rem"}},s.a.createElement(_.a.Header,null,s.a.createElement("strong",null,"Autoriser un nouveau compte")),s.a.createElement(_.a.Body,null,s.a.createElement(b.a.Group,{controlId:"formAddress"},s.a.createElement(b.a.Control,{type:"text",id:"address",ref:function(t){e.address=t}})),s.a.createElement(m.a,{onClick:this.whitelist,variant:"dark"}," Autoriser ")))),s.a.createElement("br",null)):s.a.createElement("div",null,"Loading Web3, accounts, and contract...")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[269,1,2]]]);
//# sourceMappingURL=main.ed72b7cd.chunk.js.map