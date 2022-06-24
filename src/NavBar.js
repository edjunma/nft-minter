import React from 'react';

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  return (
    <div>
      {/* Left Side - Social Media ICons */}
      <div>Facebook</div>
      <div>Twitter</div>
      <div>Email</div>

      {/* Right Side - Sections and Connect */}
      <div></div>
    </div>
  )
}