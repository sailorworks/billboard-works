// components/SignUpLoginPage.js
import React, { useState } from 'react';

export default function SignUpLoginPage() {
  const [formType, setFormType] = useState('signUp');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    // Add more form fields as needed
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div>
      <section className="auth-forms">
        <h2>{formType === 'signUp' ? 'Sign Up' : 'Log In'}</h2>
        <form onSubmit={handleSubmit}>
          {formType === 'signUp' && (
            <div>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="advertiser"
                  checked={formData.userType === 'advertiser'}
                  onChange={handleInputChange}
                />
                Advertise on Billboards
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="agency"
                  checked={formData.userType === 'agency'}
                  onChange={handleInputChange}
                />
                List Your Billboards
              </label>
            </div>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button type="submit">{formType === 'signUp' ? 'Sign Up' : 'Log In'}</button>
        </form>
        <div className="auth-options">
          <button onClick={() => setFormType(formType === 'signUp' ? 'logIn' : 'signUp')}>
            {formType === 'signUp' ? 'Log In Instead' : 'Sign Up Instead'}
          </button>
          <p>Or sign up/log in with:</p>
          <div className="social-auth">
            <button>Google</button>
            <button>Facebook</button>
          </div>
        </div>
      </section>
    </div>
  );
}

