require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

const alchmeyApiKeyUrl = process.env.ALCHEMY_API_KEY_URL;
const rinkeybyPrivateKey = process.env.RINKEBY_PRIVATE_KEY;
const etherscanApiKey = process.env.ETHER_SCAN_API_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.8",
  },
  networks: {
    rinkeby: {
      url: alchmeyApiKeyUrl,
      accounts: [rinkeybyPrivateKey],
    },
  },
  etherscan: {
    apiKey: etherscanApiKey,
  }
};
