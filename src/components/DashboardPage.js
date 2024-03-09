// components/DashboardPage.js
import React from 'react';

function DashboardPage() {
  const isAdvertiser = true; // Placeholder for user type

  return (
    <div>
      {isAdvertiser ? (
        <section className="business-dashboard">
          <h2>Business Dashboard</h2>
          <div className="account-overview">
            {/* Placeholder for account overview */}
            <p>Overview of the user's account with options for managing profile and campaigns</p>
          </div>
          <div className="campaigns">
            <h3>Your Campaigns</h3>
            <div className="campaign-list">
              {/* Placeholder for campaign list */}
              <p>View ongoing and past advertising campaigns</p>
            </div>
          </div>
        </section>
      ) : (
        <section className="agency-dashboard">
          <h2>Billboard Agency Dashboard</h2>
          <div className="account-overview">
            {/* Placeholder for account overview */}
            <p>Overview of the user's account with options for managing profile and listings</p>
          </div>
          <div className="billboard-listings">
            <h3>Your Billboard Listings</h3>
            <div className="listing-list">
              {/* Placeholder for listing list */}
              <p>View listed billboards and their performance</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default DashboardPage;