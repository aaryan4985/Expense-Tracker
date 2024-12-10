import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <Summary />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
