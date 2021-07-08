// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import statisticalData from './components/statistics/statistical-data.json';
import Statistics from './components/statistics/Statistics';
import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';

function App() {
  return (
    <>
      <Statistics title="Upload stats" stats={statisticalData} />
      <Profile {...user} />
    </>
  );
}

export default App;
