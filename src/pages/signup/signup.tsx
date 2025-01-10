import React from 'react';
import { SignupHeader } from "../../components/signup/header/header";
import { SignupForm } from "../../components/signup/form/form";
import './signup.css';

export function SignupPage() {
  return (
    <div className="signup-page">
      <SignupHeader />
      <SignupForm />
    </div>
  );
}

