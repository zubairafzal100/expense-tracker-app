import React from 'react';
import Header from './components/header/header';
import Balance from './components/balance/balance';
import IncomeExpenses from './components/income-expenses/income-expenses';
import TransactionList from './components/transaction-list/transaction-list';
import AddTransaction from './components/add-transaction/add-transaction';
import { GlobalProvider } from './context-api/global-state'
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="main-container">
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
