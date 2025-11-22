import React, { useState } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('login')
  const [user, setUser] = useState(null)

  const handleAuthSuccess = (userData) => {
    setUser(userData)
    setCurrentView('dashboard')
  }

  const handleLogout = () => {
    setUser(null)
    setCurrentView('login')
    localStorage.removeItem('token')
  }

  return (
    <div className="app">
      {currentView === 'signup' && (
        <Signup 
          onAuthSuccess={handleAuthSuccess}
          onSwitchToLogin={() => setCurrentView('login')}
        />
      )}
      
      {currentView === 'login' && (
        <Login 
          onAuthSuccess={handleAuthSuccess}
          onSwitchToSignup={() => setCurrentView('signup')}
        />
      )}
      
      {currentView === 'dashboard' && user && (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  )
}

export default App