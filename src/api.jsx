// const api = "";

import axios from "axios";

const api = axios.create({
  baseURL: "https://express-jwt-authentication-crud.onrender.com/",
});
// console.log(api);


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log(config);
  return config;
});

api.interceptors.response.use((res) =>{
  console.log(res.data);
  return res;
} );


export default api;

// src/
// ├─ api.jsx                 <-- Axios instance + interceptors
// ├─ main.jsx                <-- Entry point
// ├─ routes.jsx              <-- All routes + route protection
// ├─ AppLayout.jsx           <-- Layout with navbar + outlet
// ├─ components/
// │   └─ Navbar.jsx          <-- Navbar with logout
// └─ pages/
//     ├─ Login.jsx
//     ├─ Register.jsx
//     ├─ Dashboard.jsx       <-- Normal user dashboard
//     ├─ Admin.jsx           <-- Admin panel
//     ├─ EditUser.jsx        <-- Admin edit user
//     └─ NotFound.jsx
