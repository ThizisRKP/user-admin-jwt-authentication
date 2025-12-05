import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const [form, setForm] = useState({
    name: "",
    imageUrl: "",
  });

  const getUser = async () => {
    try {
      const res = await api.get(`/api/${id}`);
      setForm(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/${id}`, form);
      nav("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  const change = (e) => {
    console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Edit User</h1>
      <form onSubmit={submit}>
        <input
          placeholder="name"
          name="name"
          value={form.name}
          onChange={change}
        />

        <input
          placeholder="imageUrl"
          name="imageUrl"
          value={form.imageUrl}
          onChange={change}
        />
        <button type="submit">edit</button>
      </form>
    </>
  );
};

export default EditUser;
