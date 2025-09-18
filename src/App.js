import React, { useEffect, useState } from "react";

import UserCard from "./components/UserCard";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status" aria-label="Loading">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h1 className="head">User Profiles</h1>
      <div className="row col-xl-12 col-lg-12">
        {users.map((user) => (
          <div key={user.id} className="col-xl-10 col-md-6 col-lg-4 mb-4">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
