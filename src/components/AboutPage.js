// components/AboutPage.js
import React from 'react';

function AboutPage() {
  return (
    <div>
      <section className="about-overview">
        <h2>About Billboard Works</h2>
        <p>Overview of Billboard Works</p>
      </section>

      <section className="mission-vision">
        <h2>Our Mission and Vision</h2>
        <p>Mission and vision statement</p>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="placeholder.jpg" alt="Team Member" />
            <h3>Name</h3>
            <p>Role</p>
            <p>Bio</p>
          </div>
          {/* Add more team members */}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;