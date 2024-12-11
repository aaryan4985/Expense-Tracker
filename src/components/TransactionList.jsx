import React from 'react';

const TransactionList = ({ transactions, onDeleteTransaction, onEditTransaction }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Transaction History</h2>
      <ul className="mt-2">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2"
          >
            <span>{transaction.description}</span>
            <span className="text-gray-500">{transaction.category}</span> {/* Display category */}
            <span>₹{transaction.amount}</span>
            <div className="flex gap-2">
              <button
                onClick={() => onEditTransaction(transaction)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteTransaction(transaction.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;