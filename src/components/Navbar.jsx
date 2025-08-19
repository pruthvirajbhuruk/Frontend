import React from "react";
export default function Navbar({ setPage, user }) {
  return (
    <nav className="bg-purple-700 p-4 flex justify-between items-center">
      <h1 className="font-bold">?? E-Bank</h1>
      <div className="space-x-3 text-sm">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("invest")}>Invest</button>
        <button onClick={() => setPage("portfolio")}>Portfolio</button>
        {/* show admin only for you */}
        {user?.username === "Pruthvirajbhuruk" && (
          <button onClick={() => setPage("admin")}>Admin</button>
        )}
      </div>
    </nav>
  );
}
