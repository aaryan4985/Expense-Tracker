import React from 'react';

const Summary = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 my-4 text-center">
      <h2 className="text-xl font-semibold">Your Balance</h2>
      <p className="text-2xl font-bold text-green-500">$0.00</p>
      <div className="flex justify-between mt-4">
        <div className="w-1/2 text-left">
          <h3 className="text-sm font-medium">Income</h3>
          <p className="text-lg font-bold text-green-500">$0.00</p>
        </div>
        <div className="w-1/2 text-right">
          <h3 className="text-sm font-medium">Expense</h3>
          <p className="text-lg font-bold text-red-500">$0.00</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
