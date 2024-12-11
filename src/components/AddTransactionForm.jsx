// AddTransactionForm.jsx
import React, { useState } from 'react';

function AddTransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(''); // Added category state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !category) return alert('Please fill all fields');
    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category, // Include category in the new transaction
    };
    onAddTransaction(newTransaction);
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <label className="block mb-2 font-medium">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter description"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Amount (₹)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter amount"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Salary">Salary</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default AddTransactionForm;
