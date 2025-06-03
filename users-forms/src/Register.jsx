import React, { useState } from "react";
import img1 from "./images/Wallpaper.jpeg";
import { spotifyAPI } from "./api/spotifyAPI.js";


const Register = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    console.log(value);
    console.log(name);

    const newForm = {
      ...form,
      [name]: value,
    };

    console.log(newForm);
    setForm(newForm);
  };

  const handleRegistro = async() => {
    const url = "http://localhost:3000/api/users";
    console.log(form);
    const data = JSON.stringify(form); 
    const res = await spotifyAPI(url, 'POST', data, null);
    console.log(res);
  }

  return (
    <>
      <div className="registerContainer">
        <div className="leftContainer">
          <img src={img1} alt="img1" className="image" />
        </div>
        <div className="rightContainer">
          <h1 className="tittle">Get Started Now</h1>
          <label className="labelInput">
            First Name
            <input
              className="inputFirstName"
              type="text"
              name="firstname"
              onChange={handleChange}
              value={form.name}
            />
          </label>
          <label className="labelInput">
            Last Name
            <input
              className="inputLastName"
              type="text"
              name="lastname"
              onChange={handleChange}
              value={form.name}
            />
          </label>
          <label className="labelInput">
            Email
            <input
              className="inputEmail"
              type="text"
              name="email"
              onChange={handleChange}
              value={form.name}
            />
          </label>
          <label className="labelInput">
            Password
            <input
              className="inputPassword"
              type="password"
              name="password"
              onChange={handleChange}
              value={form.name}
            />
          </label>
          <label className="labelCheckbox">
            <input
              className="inputCheckbox"
              type="checkbox"
              name="checkbox"
              onChange={handleChange}
              value={form.name}
            />
            I agree to the{" "}
            <b>
              <u>terms and policy</u>
            </b>
          </label>
          <button onClick={handleRegistro} className="registerButton">Sign Up</button>
          <hr></hr>
        </div>
      </div>
    </>
  );
};

export default Register;
