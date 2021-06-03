require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy reward stick unique grace person bubble genius'; 
let testAccounts = [
"0xaa2a8e450f51df46eb0c465dcb98600458a8f279a21b84a342cc44e029b95cef",
"0x3b695a91a8d449dc0c8988994b34e3ca62cbca8361d7697748a219bd7bd3d11a",
"0x488b4467af3b3b45c63a3bfa1be500c0b0b56d7553b194b893af8c053dad1e8d",
"0x4b346632566e6a5d1f08fc3b84ab9bd9dd82f9f5295b9d80cefe8a2f039b1121",
"0xf0e10ccfeb7dc7a7dda2ea93ce5c26b0860e78f81a1d90adb31d666c2f69e84a",
"0xeb5e0b2d57f13d182f740feb050a56c660f7cf94baf3faa27af64c84e88d5174",
"0x51a3453ebec894c675f794a12f8ca81e50a036e4d3c63bf3e7d8aad688f51908",
"0xf2e214d8d6b62de2f62c624131fb5f32a2fa2a08f005b19422a39729f09fc666",
"0xe8cf4a9fdba4c12a4cb09e49195cbcbd21ef2c7e687c0e7cdc5bcec3f644baaa",
"0xcb7091ab9c4d9a5f8dbee56827a89435593185cf304ce2bef0f3a7ea01b48c61"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

