# **Expense Tracker App**

A React-based web application for managing personal finances. This app allows users to add, edit, delete, filter, sort, and search transactions, such as income and expenses, with an intuitive user interface.

---

## **Table of Contents**

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**

1. **Add Transactions**
   - Add income or expense transactions with a description and amount.
   
2. **Edit Transactions**
   - Modify existing transactions easily.

3. **Delete Transactions**
   - Remove any transaction you no longer need.

4. **Filter Transactions**
   - View transactions based on:
     - All
     - Income
     - Expenses

5. **Sort Transactions**
   - Sort transactions by:
     - Amount (Low to High)
     - Amount (High to Low)
     - Description (A-Z)

6. **Search Transactions**
   - Search transactions by description.

7. **Reset Functionality**
   - Quickly reset all filters, sorting, and search inputs.

8. **Real-Time Summary**
   - View the total balance, income, and expenses at a glance.

---

## **Technologies Used**

- **React**: Front-end library
- **JavaScript (ES6+)**: Programming language
- **Tailwind CSS**: For styling the UI
- **Node.js & npm**: For managing packages

---

## **Setup Instructions**

Follow these steps to run the project locally:

### **Prerequisites**
Ensure you have the following installed:
- Node.js (v14+)
- npm (v6+)

### **Steps**

1. **Clone the repository**
   ```bash
   git clone https://github.com/aaryan4985/Expense-Tracker.git
   cd Expense-Tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

---

## **Project Structure**

```
src/
│-- components/
│   ├── Header.jsx            # App Header
│   ├── Summary.jsx           # Summary of transactions
│   ├── TransactionList.jsx   # List of transactions
│   ├── AddTransactionForm.jsx # Form to add/edit transactions
│
│-- App.jsx                   # Main React Component
│-- index.js                  # Entry point
│-- index.css                 # Base styling
│-- README.md                 # Project documentation
```

---

## **Usage**

1. **Add Transaction**:
   - Enter a description and amount.
   - Positive amount = **Income** | Negative amount = **Expense**.

2. **Edit Transaction**:
   - Use the "Edit" button on any transaction.

3. **Delete Transaction**:
   - Use the "Delete" button to remove a transaction.

4. **Filter, Sort, and Search**:
   - Use the filter dropdown to view income or expenses.
   - Sort transactions by amount or description.
   - Use the search box to find transactions.

5. **Reset**:
   - Click "Reset" to clear filters, sorting, and search.

---



## **Future Enhancements**

- Add user authentication for personal dashboards.
- Implement persistent storage using a backend (e.g., Firebase, MongoDB).
- Include monthly and yearly transaction summaries.
- Integrate charts for visualizing income and expense trends.

---

## **Contributing**

Contributions are welcome! 🎉  
Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

---

## **License**

This project is licensed under the MIT License.

---

### **Contact**

For any queries or suggestions, reach out to:  
**Your Name**: pradhanaaryan@gmail.com

---
