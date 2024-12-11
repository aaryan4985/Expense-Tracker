import React, { useState } from 'react';

const AddTransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!description || !amount) {
      setError('Please enter both description and amount.');
      return;
    }

    if (isNaN(amount)) {
      setError('Amount must be a number.');
      return;
    }

    // Clear error message if validation passes
    setError('');

    // Create the new transaction
    const newTransaction = {
      id: Date.now(), // Unique ID using current timestamp
      description,
      amount: parseFloat(amount),
    };

    // Pass the new transaction to the parent component
    onAddTransaction(newTransaction);

    // Clear the form fields after submission
    setDescription('');
    setAmount('');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-2xl font-semibold mb-4">Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold">Description</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            placeholder="e.g. Salary, Rent, Groceries"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-semibold">Amount</label>
          <input
            id="amount"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            placeholder="e.g. 500, -50"
          />
        </div>

        {error && <div className="text-red-600 mb-4">{error}</div>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransactionForm;
