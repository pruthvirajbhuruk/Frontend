import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Invest from "./components/Invest";
import Portfolio from "./components/Portfolio";
import Admin from "./components/Admin";
import { registerUser } from "./api";

function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();

    const u = tg.initDataUnsafe.user;
    registerUser({ id: u.id, username: u.username }).then(() => {
      setUser({ id: u.id, username: u.username });
    });
  }, []);

  if (!user) return <div className="p-4 text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-animated text-white">
      <Navbar setPage={setPage} user={user} />
      <div className="p-4 max-w-md mx-auto">
        {page === "home" && <Home user={user} />}
        {page === "invest" && <Invest user={user} />}
        {page === "portfolio" && <Portfolio user={user} />}
        {page === "admin" && <Admin />}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
