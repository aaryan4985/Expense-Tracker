import React from 'react';

const Summary = ({ transactions }) => {
  // Calculate the total income, expenses, and balance
  const income = transactions.filter(transaction => transaction.amount > 0).reduce((acc, transaction) => acc + transaction.amount, 0);
  const expenses = transactions.filter(transaction => transaction.amount < 0).reduce((acc, transaction) => acc + transaction.amount, 0);
  const balance = income + expenses; // Income - Expenses

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-2xl font-semibold mb-4">Summary</h2>
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg">Total Income:</span>
        <span className="text-lg text-green-600">+${income}</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg">Total Expenses:</span>
        <span className="text-lg text-red-600">-${Math.abs(expenses)}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">Balance:</span>
        <span className={`text-lg font-semibold ${balance < 0 ? 'text-red-600' : 'text-green-600'}`}>
          ${balance}
        </span>
      </div>
    </div>
  );
};

export default Summary;
