import React, { useState, useMemo } from 'react';
import { 
  Wallet2, 
  TrendingUp, 
  TrendingDown, 
  Search, 
  Filter, 
  RefreshCcw, 
  PlusCircle, 
  Edit, 
  Trash2 
} from 'lucide-react';

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Monthly Salary', amount: 5000, category: 'Income', date: '2024-01-15' },
    { id: 2, description: 'Groceries', amount: -250, category: 'Food', date: '2024-01-20' },
    { id: 3, description: 'Freelance Project', amount: 1500, category: 'Income', date: '2024-01-25' },
    { id: 4, description: 'Monthly Rent', amount: -1200, category: 'Housing', date: '2024-01-01' },
  ]);

  const [filter, setFilter] = useState('all');
  const [sortCriterion, setSortCriterion] = useState('date');
  const [searchQuery, setSearchQuery] = useState('');
  const [editTransaction, setEditTransaction] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    'Income', 'Food', 'Housing', 'Transportation', 
    'Entertainment', 'Utilities', 'Healthcare', 'Miscellaneous'
  ];

  const processedTransactions = useMemo(() => {
    return transactions
      .filter(transaction => {
        const matchesFilter = 
          filter === 'all' || 
          (filter === 'income' && transaction.amount > 0) || 
          (filter === 'expense' && transaction.amount < 0);
        
        const matchesSearch = transaction.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        
        return matchesFilter && matchesSearch;
      })
      .sort((a, b) => {
        switch(sortCriterion) {
          case 'amountAsc': return a.amount - b.amount;
          case 'amountDesc': return b.amount - a.amount;
          case 'description': return a.description.localeCompare(b.description);
          default: return new Date(b.date) - new Date(a.date);
        }
      });
  }, [transactions, filter, sortCriterion, searchQuery]);

  const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalIncome = transactions
    .filter(t => t.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalExpenses = Math.abs(transactions
    .filter(t => t.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0));

  const addOrEditTransaction = (newTransaction) => {
    if (editTransaction) {
      setTransactions(transactions.map(t => 
        t.id === editTransaction.id ? newTransaction : t
      ));
    } else {
      setTransactions([
        {...newTransaction, id: Date.now(), date: new Date().toISOString().split('T')[0]}, 
        ...transactions
      ]);
    }
    setIsModalOpen(false);
    setEditTransaction(null);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const resetFilters = () => {
    setFilter('all');
    setSortCriterion('date');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Header with Balance */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Expense Tracker</h1>
              <p className="text-sm opacity-75">Track your financial journey</p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-75">Total Balance</p>
              <h2 className={`text-3xl font-bold ${totalBalance >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                ${totalBalance.toLocaleString()}
              </h2>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-3 rounded-lg flex items-center">
              <TrendingUp className="mr-2 text-green-300" />
              <div>
                <p className="text-xs opacity-75">Total Income</p>
                <p className="font-semibold text-green-300">${totalIncome.toLocaleString()}</p>
              </div>
            </div>
            <div className="bg-white/10 p-3 rounded-lg flex items-center">
              <TrendingDown className="mr-2 text-red-300" />
              <div>
                <p className="text-xs opacity-75">Total Expenses</p>
                <p className="font-semibold text-red-300">${totalExpenses.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="p-4 bg-gray-100 grid md:grid-cols-4 gap-3">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded-lg flex items-center"
          >
            <option value="all">All Transactions</option>
            <option value="income">Income</option>
            <option value="expense">Expenses</option>
          </select>

          <select 
            value={sortCriterion} 
            onChange={(e) => setSortCriterion(e.target.value)}
            className="p-2 border rounded-lg flex items-center"
          >
            <option value="date">Recent First</option>
            <option value="amountAsc">Amount: Low to High</option>
            <option value="amountDesc">Amount: High to Low</option>
            <option value="description">Description</option>
          </select>

          <div className="relative md:col-span-2">
            <input 
              type="text"
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 pl-10 border rounded-lg"
            />
            <Search className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        {/* Transactions List */}
        <div className="p-4">
          {processedTransactions.map(transaction => (
            <div 
              key={transaction.id} 
              className={`flex justify-between items-center p-3 mb-2 rounded-lg transition-all 
                ${transaction.amount > 0 ? 'bg-green-50 hover:bg-green-100' : 'bg-red-50 hover:bg-red-100'}`}
            >
              <div>
                <p className="font-semibold">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.category} | {transaction.date}</p>
              </div>
              <div className="flex items-center">
                <p className={`mr-4 font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                </p>
                <button 
                  onClick={() => {
                    setEditTransaction(transaction);
                    setIsModalOpen(true);
                  }}
                  className="mr-2 text-blue-500 hover:text-blue-700"
                >
                  <Edit size={20} />
                </button>
                <button 
                  onClick={() => deleteTransaction(transaction.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Transaction Button */}
        <div className="p-4 bg-gray-100">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 flex items-center justify-center"
          >
            <PlusCircle className="mr-2" /> Add New Transaction
          </button>
        </div>

        {/* Transaction Modal (simplified here, would be a separate component in real app) */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-xl font-bold mb-4">
                {editTransaction ? 'Edit Transaction' : 'Add Transaction'}
              </h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                addOrEditTransaction({
                  id: editTransaction?.id,
                  description: formData.get('description'),
                  amount: parseFloat(formData.get('amount')),
                  category: formData.get('category'),
                  date: new Date().toISOString().split('T')[0]
                });
              }}>
                <input 
                  type="text" 
                  name="description"
                  defaultValue={editTransaction?.description}
                  placeholder="Description" 
                  required 
                  className="w-full p-2 border rounded-lg mb-3"
                />
                <input 
                  type="number" 
                  name="amount"
                  defaultValue={editTransaction?.amount}
                  placeholder="Amount" 
                  required 
                  className="w-full p-2 border rounded-lg mb-3"
                />
                <select 
                  name="category"
                  defaultValue={editTransaction?.category}
                  required 
                  className="w-full p-2 border rounded-lg mb-3"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <div className="flex justify-between">
                  <button 
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                  >
                    {editTransaction ? 'Update' : 'Add'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;