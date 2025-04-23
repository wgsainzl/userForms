import React, { useState } from 'react'

const Login = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { value, name } = e.target;

        console.log(value);
        console.log(name);

        const newForm = {
            ...form,
            [name]: value
        }

        console.log(newForm)
        setForm(newForm)
    }

  return (
    <>
    <div>Login</div>
    <label>
        Email
        <input 
        type="text"
        name="email"
        onChange={handleChange}
        value={form.name}
        />
    </label>
    <label>
        Password 
        <input 
        type="text"
        name="password"
        onChange={handleChange}
        value={form.name}
        />
    </label>
    </>
  )
}

export default Login