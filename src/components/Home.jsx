import React from "react";

export default function Home({ user }) {
  const referral = `https://t.me/YourBotUsername?start=${user?.id}`;
  return (
    <div className="glass-card text-center">
      <h2 className="text-2xl font-bold mb-3">Welcome {user?.username}</h2>
      <p>Share your referral link and earn 1%:</p>
      <input
        value={referral}
        readOnly
        className="w-full mt-2 p-2 text-black rounded"
        onClick={(e) => {
          navigator.clipboard.writeText(referral);
          alert("Copied!");
        }}
      />
    </div>
  );
}
