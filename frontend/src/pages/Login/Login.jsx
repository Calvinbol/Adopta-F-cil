import { useState } from "react";
import LoginForm from "../../components/LoginForm";
import { useNavigate } from "react-router-dom";
import './Login.css'

function Login() {
 
  return (
    <>
      <LoginForm />
    </>
  );
}

export default Login;
