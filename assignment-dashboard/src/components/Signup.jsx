import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { addUser, getUsers } from "../services";

import { RegisterWrapper, RegisterWrapperInner, InputField, InputLabel, SubmitBtn, ErrorField } from "./RegisterStyled";


const Signup = () => {

  console.log('Sign up page rendered');

  const initialValues = { username: "", email: "", password: "" };
  const [formRegisterValues, setFormRegisterValues] = useState(initialValues);
  const [formRegisterErrors, setFormRegisterErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const usernameInputEl = useRef("");
  const emailInputEl = useRef("");
  const passwordInputEl = useRef("");

  const navigate = useNavigate();

  const { usersData, setUsersData } = useContext(UserContext);

  useEffect(() => {
    console.log('inside use effect')
    getUsers().then(users => users && setUsersData(users));
  }, [setUsersData]);

  const handleChange = () => {
    const username = usernameInputEl.current.value;
    const email = emailInputEl.current.value;
    const password = passwordInputEl.current.value;
    setFormRegisterValues({username: username, email: email, password: password});
  };

  const handleRegister = (event) => {
    event.preventDefault();

    setFormRegisterErrors(validate(formRegisterValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else {
      const payload = { 'id': values.username,'username': values.username, 'email': values.email, 'password': values.password };
      addUser(payload);
      alert("Registered Successfully");
      navigate("/");
    } 
    return errors;
  };

  return (
    <RegisterWrapper>
      <RegisterWrapperInner>
      <h1  className="text-uppercase mb-4">Create account</h1>
      <InputLabel>Username</InputLabel>
      <InputField type="text" ref={usernameInputEl} onChange={handleChange} placeholder="Enter username" />
      <ErrorField>{formRegisterErrors.username}</ErrorField>

      <InputLabel>Email</InputLabel>
      <InputField type="email" ref={emailInputEl} onChange={handleChange} placeholder="Enter email" />
      <ErrorField>{formRegisterErrors.email}</ErrorField>

      <InputLabel>Password</InputLabel>
      <InputField type="password" ref={passwordInputEl} onChange={handleChange} placeholder="Enter password" />
      <ErrorField>{formRegisterErrors.password}</ErrorField>

      <div>
        <SubmitBtn onClick={handleRegister}>Register</SubmitBtn>
      </div>
      <p>Already have an account? <Link to='/'>Login here!</Link></p>
      </RegisterWrapperInner>
    </RegisterWrapper>
  );
};

export default Signup;
