const BASE_URL = "https://YOUR-BACKEND-URL";

export async function registerUser(user) {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then(r => r.json());
}

export async function submitInvestment(data) {
  return fetch(`${BASE_URL}/invest`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(r => r.json());
}

export async function getPortfolio(uid) {
  return fetch(`${BASE_URL}/portfolio/${uid}`).then(r => r.json());
}

export async function approveInvestment(admin, uid, amt) {
  return fetch(`${BASE_URL}/approve`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({admin, user_id: uid, amount: amt})
  }).then(r => r.json());
}
