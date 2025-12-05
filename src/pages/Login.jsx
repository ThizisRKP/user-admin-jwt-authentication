import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { email, password });
      console.log(res.data);
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("id", res.data.id);
      setEmail("");
      setPassword("");
      nav("/");
      window.location.reload();
  
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input
          placeholder="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p style={{textAlign:"center"}}>Don't you have account ? <Link to = "/register">Register</Link></p>
      </form>
      
      
    </div>
  );
};

export default Login;
