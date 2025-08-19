import React, { useEffect, useState } from "react";
import { getPortfolio } from "../api";

export default function Portfolio({ user }) {
  const [data, setData] = useState(null);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    const load = async () => {
      const res = await getPortfolio(user.id);
      setData(res);
      if (res.ref_count > 0) {
        setConfetti(true);
        setTimeout(() => setConfetti(false), 4000);
      }
    };
    load();
    const timer = setInterval(load, 3000);
    return () => clearInterval(timer);
  }, []);

  if (!data) return <div className="p-4">Loading...</div>;

  return (
    <div className="glass-card space-y-2 text-center">
      {confetti && <Confetti />}
      <h2 className="font-bold text-xl mb-1">My Portfolio</h2>
      <p>Plan: {data.plan}</p>
      <p>Invested: {data.amount} USDT</p>
      <p>Next Payout: {data.next_payout}</p>
      <p>Referral Earnings: {data.ref_earn}</p>
      <p>Referrals: {data.ref_count}</p>
    </div>
  );
}

