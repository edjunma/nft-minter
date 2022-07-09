import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import roboPunksNFT from './RoboPunksNFT.json';

const roboPunksNFTAddress = '0x6F7Cf89f8518E676921b6159b2F174d58F167880';

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        roboPunksNFTAddress,
        roboPunksNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount));
        console.log('response: ', response);
      } catch (err) {
        console.log("error: ", err)
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  }

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="520px">
        <h1>RoboPunks</h1>
        <p>It's 2078. Can the RoboPunks NFT save humans from destructive rampant NFT speculation? Mint RoboPunks to find out.</p>
        {isConnected ? (
          <div>
            <div>
              <button onClick={handleDecrement}>-</button>
              <input type="number" value={mintAmount} />
              <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={handleMint}>Mint Now</button>
          </div>
        ) : (
          <p>You must be connected to Mint.</p>
        )}
      </Box>
    </Flex>
  )
}

export default MainMint;