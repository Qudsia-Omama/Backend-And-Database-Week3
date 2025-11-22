import React from 'react'

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="container">
      <div className="dashboard">
        <h2>Welcome to Your Dashboard! {user.name}</h2>
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Dashboard