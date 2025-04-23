import React, { useState } from "react";

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

  return (
    <>
      <div className="registerContainer">
        <div className="leftContainer">
          <h2>Register</h2>
        </div>
        <div className="rightContainer">
          <label className="labelInput">
            First Name
            <input
              type="text"
              name="firstname"
              onChange={handleChange}
              value={form.name}
            />
          </label>
          <label className="labelInput">
            Last Name
            <input
              type="text"
              name="lastname"
              onChange={handleChange}
              value={form.name}
            />
          </label>
          <label className="labelInput">
            Email
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={form.name}
            />
          </label>
          <label className="labelInput">
            Password
            <input
              type="text"
              name="password"
              onChange={handleChange}
              value={form.name}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default Register;
