import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    gender: "",
    image: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("name", form.name);
    formdata.append("email", form.email);
    formdata.append("password", form.password);
    formdata.append("address", form.address);
    formdata.append("gender", form.gender);
    formdata.append("image", form.image);
    axios
      .post("/create", formdata)
      .then((res) => {
        navigate("/employee");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-group-radio">
            <div class="radio-group">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                required
              />
              <label htmlFor="male">Male</label>
            </div>
            <div class="radio-group">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                required
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              name="image"
              value={form.image}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
