require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

const alchmeyApiKeyUrl = process.env.ALCHEMY_API_KEY_URL;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.8",
  },
  networks: {
    hardhat: {
      forking: {
        url: alchmeyApiKeyUrl,
        blockNumber: 4043801
      }
    }
  }
};
