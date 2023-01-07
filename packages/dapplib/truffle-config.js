require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remember million good problem off veteran'; 
let testAccounts = [
"0xfe3de3af23c5c46e3ebaf40ba6b0da455fe8586b79c52064d9de0f9f2120586b",
"0x24c5c03bae78c1dd2423cc811e843f05ff7e0f39309c2120fe96e306710fceb0",
"0xd3e129b3879065f045c14263546a6e80264acee42023e4c774c76f8f5a115cd4",
"0x9bf5168de737e5e3cdae4e423497316d8c16a4562f8254f727fa36d136dd43c0",
"0x8af8fe8f32d612e594556663fadb22b34ee1679b0ca84b1862979775a9baf9e8",
"0x79b105a1309a1f3069f24e70cf0d7fc110afef62662559a56da14958772de920",
"0x86c693959a2c9c3407415fdba077bd6d6b0b86b2f3ec7b42c257682ffdf3e539",
"0xdd497290ae25c0df1942dd15e9050a257a6dea59a2415f4807daf23fff3419d5",
"0xd96a3621a35aa376305c7e24ff1c8218d061c994de022e4f5af613465c5d1d07",
"0x42b820ec287f7966c8d67686377afc24d7b3584a16d4feaae72a4d09cb82326c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


