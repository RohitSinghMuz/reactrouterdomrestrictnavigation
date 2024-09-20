import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to the Dashboard</h2>
        <p>This page is protected and can only be accessed by authenticated users.</p>
      </div>
    );
  }
}

export default Dashboard;
