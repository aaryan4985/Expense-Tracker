import React, { useState } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Salary', amount: 500 },
    { id: 2, description: 'Groceries', amount: -50 },
    { id: 3, description: 'Freelance', amount: 200 },
    { id: 4, description: 'Transport', amount: -20 },
  ]);

  // Add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  // Delete a transaction by its id
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
  <Summary transactions={transactions} />
  <AddTransactionForm onAddTransaction={addTransaction} />
  <TransactionList transactions={transactions} onDeleteTransaction={deleteTransaction} />
</div>

    </div>
  );
}

export default App;
