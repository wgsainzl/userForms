import React, { useState } from "react";
import img1 from "./images/Wallpaper.jpeg";

const Login = () => {
  const [form, setForm] = useState({
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

  return (
    <>
      <div className="registerContainer">
        <div className="leftContainer">
          <img src={img1} alt="img1" className="image" />
        </div>
        <div className="rightContainer">
          <h1 className="tittleLog">Log In</h1>
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
            I am not a robot
          </label>
          <button className="registerButton">Log In</button>
          <hr></hr>
        </div>
      </div>
    </>
  );
};

export default Login;
