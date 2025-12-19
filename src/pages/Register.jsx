import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import api from "../api";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    adminCode: "",
    imageUrl: "",
  });

  // const nav = useNavigate();
  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const submit = async (e) => {
  e.preventDefault();

  const payload = { ...form };

  if (payload.role !== "admin") {
    delete payload.adminCode;
  }

  try {
    const res = await api.post("/register", payload);
    alert(res.data.message + "🎉, Login with correct mail and password");
    setForm({
      name : "",
      email : "",
      password : "",
      role : "",
      adminCode : "",
      imageUrl : ""
    })
  } catch (error) {
  console.log(error.response?.data);
  alert(error.response?.data?.message || "Registration failed");

}
};


  return (
    <div className="register-wrapper">
      <form onSubmit={submit}>
        <h2>Register</h2>
        <input
          type="text"
          required
          value={form.name}
          name="name"
          placeholder="name"
          onChange={change}
        />
        <input
          type="text"
          required
          value={form.email}
          name="email"
          placeholder="email"
          onChange={change}
        />
        <input
          type="password"
          required
          value={form.password}
          name="password"
          placeholder="password"
          onChange={change}
        />
        <select value={form.role} required name="role" onChange={change}>
        <option value="" disabled></option>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
        {form.role === "admin" && (
          <input
            type="text"
            value={form.adminCode}
            name="adminCode"
            placeholder="adminCode"
            onChange={change}
          />
        )}
        <input
          type="text"
          required
          value={form.imageUrl}
          name="imageUrl"
          placeholder="imageUrl"
          onChange={change}
        />

        <button type="submit">register</button>
      </form>
      <p style={{color : "black",textAlign :"center"}}>wanna go login page ? <Link to="/login" style={{marginLeft :"10px"}}>Login</Link></p>
    </div>
  );
};

export default Register;
