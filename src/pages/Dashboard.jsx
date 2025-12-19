import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState([]);

  const loadUsers = async () => {
    try {
      const res = await api.get("/");
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // USER CARD
  if (user.role === "user") {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <div
          style={{
            width: "280px",
            padding: "22px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #2ecc71, #3498db)",
            color: "#fff",
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
            transition: "all 0.35s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.06)";
            e.currentTarget.style.boxShadow = "0 18px 35px rgba(0,0,0,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
          }}
        >
          <img
            src={user.imageUrl}
            alt={user.imageUrl}
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #fff",
              marginBottom: "14px",
            }}
          />
          <h2 style={{ margin: "8px 0" }}>{user.name}</h2>
          <p style={{ fontWeight: "600", letterSpacing: "1px" }}>
            {user.role.toUpperCase()}
          </p>
        </div>
      </div>
    );
  }

  // ADMIN CARD
  const AdminArr = user?.filter(
    (u) => u._id === localStorage.getItem("id")
  );

  return (
    <div className="dashboard-container">
      <Link to="admin">go to admin page</Link>

      <div style={{ display: "flex", gap: "25px", marginTop: "30px" }}>
        {AdminArr.map((user) => (
          <div
            key={user._id}
            style={{
              width: "280px",
              padding: "22px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #2ecc71, #3498db)",
              color: "#fff",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              transition: "all 0.35s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.06)";
              e.currentTarget.style.boxShadow = "0 18px 35px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
            }}
          >
            <img
              src={user.imageUrl}
              alt={user.imageUrl}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #fff",
                marginBottom: "14px",
              }}
            />
            <h3>{user.name}</h3>
            <p style={{ fontWeight: "600", letterSpacing: "1px" }}>
              {user.role.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
