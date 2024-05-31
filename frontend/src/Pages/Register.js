import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Hero from "../Components/Hero";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    gender: "",
    image: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setForm({ ...form, [name]: e.target.files[0] }); // Handle file input
    } else if (type === "radio") {
      setForm({ ...form, gender: value }); // Handle radio input
    } else {
      setForm({ ...form, [name]: value }); // Handel text input
    }
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
        navigate("/members");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert("you have registered successfully !");
      });
  };

  return (
    <>
      <Hero title="Register" />
      <div className="form-page">
        <div className="form-container">
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
            <div className="form-group-radio">
              <div className="radio-group">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={form.gender === "male"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="radio-group">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={form.gender === "female"}
                  onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </div>{" "}
    </>
  );
}

export default Register;
