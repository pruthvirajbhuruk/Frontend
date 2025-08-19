import React, { useState } from "react";
import { approveInvestment } from "../api";

export default function Admin() {
  const [uid, setUid] = useState("");
  const [amount, setAmount] = useState("");

  const approve = async () => {
    const res = await approveInvestment("Pruthvirajbhuruk", uid, amount);
    alert(res.success ? "Approved ?" : "Error");
  };

  return (
    <div className="glass-card space-y-3 text-center">
      <h2 className="font-bold text-xl">Admin Panel</h2>
      <input
        placeholder="User ID"
        className="text-black p-2 rounded w-full"
        value={uid}
        onChange={e => setUid(e.target.value)}
      />
      <input
        placeholder="Amount"
        className="text-black p-2 rounded w-full"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={approve} className="w-full bg-green-600 p-2 rounded hover:bg-green-700">
        Approve Investment
      </button>
    </div>
  );
}
