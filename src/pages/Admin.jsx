import React from "react";
import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const nav = useNavigate();

  const loadUsers = async () => {
    try {
      const res = await api.get("/");
      // console.log(res.data);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    const res = await api.delete(`/${id}`);
    alert(res.data.message);
    loadUsers();
  };
  return (
    <div>
      <h1
  style={{
    position : "fixed",
    top : "0",
    
    textAlign: "center",
    margin: "20px 0",
    padding: "10px 20px",
    fontSize: "2.2rem",
    fontWeight: "800",
    color: "#fff",
    background: "linear-gradient(135deg, #4bef8aff, #475bf0ff)",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    letterSpacing: "1px",

    transition: "all 0.3s ease",
    cursor: "pointer"
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0 6px 18px rgba(0,0,0,0.35)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
  }}
>
  All Users
</h1>
      {users.map((user) => (
        <div key={user._id} className="dashboard-container">
          <h2></h2>
          <img width="100px" src={user.imageUrl} alt={user.imageUrl} />
          <h3>
            {user.name}-{user.role}
          </h3>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => nav(`/edit/${user._id}`)}>edit</button>
            <button onClick={() => deleteUser(user._id)}>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Admin;
