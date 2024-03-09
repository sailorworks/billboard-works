// components/ContactPage.js
import React from 'react';

function ContactPage() {
  return (
    <div>
      <section className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>Company Address</p>
        <p>Phone Number</p>
        <p>Email Address</p>
      </section>
    </div>
  );
}

export default ContactPage;