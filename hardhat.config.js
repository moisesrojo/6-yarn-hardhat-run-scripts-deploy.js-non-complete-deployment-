require("@nomicfoundation/hardhat-toolbox")

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners()

    for (const account of accounts) {
        console.log(account.address)
    }
})
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.9",
    networks: {
        hardhat: {
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
        },
        goerli: {
            url: process.env.GOERLI_RPC_URL,
            accounts: process.env.PRIVATE_KEY,
            saveDeployments: true,
            chainId: 5,
        },
    },
}
