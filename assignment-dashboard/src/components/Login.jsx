import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { getUsers } from "../services";
import Dashboard from "./Dashboard";
import { RegisterWrapper, RegisterWrapperInner, InputField, InputLabel, SubmitBtn, ErrorField } from "./RegisterStyled";




const Login = () => {

  console.log('Login page rendered');

  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const [validateLoginCreds, setValidateLoginCreds] = useState(false);
  const usernameInputEl = useRef("");
  const passwordInputEl = useRef("");

  const navigate = useNavigate();
  const { usersData, setUsersData } = useContext(UserContext);

  useEffect(() => {
    getUsers().then(users => users && setUsersData(users));
  }, [])

  // useEffect(() => {
  //   validateLoginCreds && getUsers().then(users => users && setUsersData(users));
  // }, [validateLoginCreds, setUsersData]);

  const handleChange = () => {
    const username = usernameInputEl.current.value;
    const password = passwordInputEl.current.value;
    setFormValues({username: username, password: password});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setValidateLoginCreds(true);
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // const isLoginSuccess = usersData.some((userData) => userData?.username === username && userData?.password === password);
    // isLoginSuccess && navigate("dashboard");
  };

  const validate = (values) => {
    const errors = {};
    const isUsernameSuccess = usersData.some((userData) => userData?.username === values.username);
    const isPasswordSuccess = usersData.some((userData) => userData?.password === values.password);

    
    if(!values.username) {
      errors.username = "Username is Required!";
    }else if(!isUsernameSuccess) {
        errors.username = "Username is Invalid";
    }

    if(!values.password) {
      errors.password = "Password is Required!";
    }else if(!isPasswordSuccess) {
      errors.password = "Password is Invalid";
    } else {
      navigate("dashboard")
    }


    // const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // if (!values.username) {
    //   errors.username = "Username is required!";
    // }
    // if (!values.email) {
    //   errors.email = "Email is required!";
    // } else if (!regex.test(values.email)) {
    //   errors.email = "This is not a valid email format!";
    // }
    // if (!values.password) {
    //   errors.password = "Password is required";
    // } else if (values.password.length < 4) {
    //   errors.password = "Password must be more than 4 characters";
    // } else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }
    return errors;
  };

  return (
    <RegisterWrapper>
      <RegisterWrapperInner>
      <h1 className="text-uppercase mb-4">Login</h1>
      <InputLabel>Username</InputLabel>
      <InputField type="text" placeholder="Enter username" ref={usernameInputEl} onChange={handleChange} />
      <ErrorField>{formErrors.username}</ErrorField>
      <InputLabel>Password</InputLabel>
      <InputField type="password" placeholder="Enter password" ref={passwordInputEl} onChange={handleChange} />
      <ErrorField>{formErrors.password}</ErrorField>
      <div>
        <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
      </div>
      <p className="text-secondary">Create new account, <Link to='signup'>Signup here!</Link></p>
      </RegisterWrapperInner>
    </RegisterWrapper>
  );
};

export default Login;
