import React from 'react';
import statisticalData from './components/statistics/statistical-data.json';
import Statistics from './components/statistics/Statistics';
import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';
import friends from './components/friend-list/friends.json';
import FriendList from './components/friend-list/FriendList';
import transactions from './components/transaction-history/transactions.json';
import TransactionHistory from './components/transaction-history/TransactionHistory';
function App() {
  return (
    <>
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
