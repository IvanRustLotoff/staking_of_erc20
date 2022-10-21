import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'solidity-coverage'
require('dotenv').config()

const getEnvVar = (key: string) => {
  console.log(process.env[key])
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return process.env[key] || "";
};

export const ALCHEMY_KEY = getEnvVar("ALCHEMY_KEY");
export const PRIVATE_KEY = getEnvVar("PRIVATE_KEY");

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000
      }
    }
  },
  networks: {
    goerli: {
      chainId: 5,
      url:`https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts:[PRIVATE_KEY],
    },

    hardhat: {
      chainId: 1337
    }
  },
};

export default config;