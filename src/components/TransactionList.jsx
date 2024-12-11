import React from 'react';

const TransactionList = ({ transactions, onDeleteTransaction }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-4 my-4">
      <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
      <ul className="space-y-2">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={`flex justify-between items-center p-2 rounded ${
              transaction.amount > 0 ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <div className="flex justify-between w-full">
              <span>{transaction.description}</span> {/* Correctly render the description */}
              <span>{transaction.amount > 0 ? `+$${transaction.amount}` : `-$${Math.abs(transaction.amount)}`}</span>
            </div>
            <button
              onClick={() => onDeleteTransaction(transaction.id)}
              className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
