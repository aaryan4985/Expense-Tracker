import React from 'react';

const TransactionList = () => {
  const transactions = [
    { id: 1, description: 'Salary', amount: 500 },
    { id: 2, description: 'Groceries', amount: -50 },
    { id: 3, description: 'Freelance', amount: 200 },
    { id: 4, description: 'Transport', amount: -20 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 my-4">
      <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
      <ul className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={`flex justify-between py-2 ${
              transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
            }`}
          >
            <span>{transaction.description}</span>
            <span>${transaction.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
