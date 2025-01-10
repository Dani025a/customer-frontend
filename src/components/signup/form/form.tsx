import React from 'react';
import { InputField } from '../../ui/input-field';
import { PasswordField } from '../../ui/password-field';
import { Button } from '../../ui/button';
import { Checkbox } from '../../ui/checkbox';
import { Select } from '../../ui/select';
import './form.css';

const countryCodeOptions = [
  { value: '+45', label: '+45' },
  { value: '+1', label: '+1' },
  { value: '+44', label: '+44' },
  { value: '+49', label: '+49' },
];

export function SignupForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">SIGN UP</h1>
      <p className="signup-subtitle">
        ALREADY HAVE AN ACCOUNT?{' '}
        <a href="/login" className="signup-link">SIGN IN</a>
      </p>

      <form onSubmit={handleSubmit} className="signup-form">
        <InputField
          label="NAME (FIRSTNAME AND LASTNAME)"
          required
        />

        <InputField
          label="ADDRESS"
          required
        />

        <div className="zipcode-city-container">
          <div className="zipcode-field">
            <InputField
              label="ZIPCODE"
              required
            />
          </div>
          <div className="city-field">
            <InputField
              label="CITY"
              required
            />
          </div>
        </div>

        <div className="phone-container">
          <Select
            options={countryCodeOptions}
            defaultValue="+45"
            className="country-code-select"
          />
          <InputField
            type="tel"
            required
            className="phone-input"
          />
        </div>

        <InputField
          label="ADDRESS"
          required
        />

        <PasswordField
          label="PASSWORD (AT LEAST 8 CHARACTERS)"
          required
          minLength={8}
        />

        <PasswordField
          label="REPEAT PASSWORD"
          required
          minLength={8}
        />

        <Checkbox
          label="I ACCEPT THE FOLLOWING SALES CONDITIONS"
          required
        />

        <Button type="submit" fullWidth>
          SIGN UP
        </Button>
      </form>
    </div>
  );
}

