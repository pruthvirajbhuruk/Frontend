import React, { useState } from "react";
import { submitInvestment } from "../api";

export default function Invest({ user }) {
  const [plan, setPlan] = useState("");
  const [amount, setAmount] = useState("");
  const [hash, setHash] = useState("");
  const [wallet, setWallet] = useState("");
  const submit = async () => {
    if (!plan || !amount || !hash) return alert("Fill all fields!");
    const res = await submitInvestment({ id: user.id, plan, amount, txn_hash: hash });
    setWallet(res.wallet);
  };

  return (
    <div className="glass-card space-y-3">
      <h2 className="font-bold text-xl">Invest Now</h2>
      <select value={plan} onChange={e => setPlan(e.target.value)} className="text-black p-2 rounded w-full">
        <option value="">Select Plan</option>
        <option value="basic">Basic ($15-69)</option>
        <option value="classic">Classic ($200-499)</option>
        <option value="pro">Pro ($1000-1999)</option>
      </select>
      <input
        className="p-2 rounded w-full text-black"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <input
        className="p-2 rounded w-full text-black"
        placeholder="TXN Hash"
        value={hash}
        onChange={e => setHash(e.target.value)}
      />
      <button onClick={submit} className="w-full p-2 bg-purple-600 rounded hover:bg-purple-700">
        Submit
      </button>
      {wallet && (
        <p>Send USDT-TRC20 to <b>{wallet}</b></p>
      )}
    </div>
  );
}
