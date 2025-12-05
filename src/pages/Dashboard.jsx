import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const loadUsers = async () => {
    try {
      const res = await api.get("/");
      console.log(res.data);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (user.role === "user") {
    return (
     <div>
       <h1>
        {user.name}-{user.role}
      </h1>
      <img width="100px" src={user.imageUrl} alt={user.imageUrl}/>
     </div>
    );
  } else {
    const AdminArr = user?.filter((u) => u._id === localStorage.getItem("id"));
    console.log(AdminArr);
    return (
      <div className="dashboard-container">
        <Link to="admin">go to admin page</Link>
        {AdminArr.map((user) => (
          <div key={user._id}>
            <img width="100px" src={user.imageUrl} alt={user.imageUrl} />
            <p>
              {user.name} - {user.role}
            </p>
          </div>
        ))}
      </div>
    );
  }
};

export default Dashboard;
