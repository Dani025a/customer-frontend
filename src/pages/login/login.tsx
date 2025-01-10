import React from 'react';
import { LoginHeader } from "../../components/login/header/header";
import { LoginForm } from "../../components/login/form/form";
import './login.css';

export function LoginPage() {
  return (
    <div className="login-page">
      <LoginHeader />
      <LoginForm />
    </div>
  );
}

