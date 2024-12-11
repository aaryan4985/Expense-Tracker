import React, { useState } from 'react';

const AddTransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    if (!description || !amount) {
      alert('Please fill in both fields.');
      return;
    }

    onAddTransaction({
      id: Date.now(), // Generates a unique ID
      description,
      amount: parseFloat(amount),
    });

    // Clear the form
    setDescription('');
    setAmount('');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 my-4">
      <h2 className="text-lg font-semibold mb-4">Add New Transaction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter description"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount (positive for income, negative for expense)"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransactionForm;
