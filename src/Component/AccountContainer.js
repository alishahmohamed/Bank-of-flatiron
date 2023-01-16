import React, { useEffect, useState} from "react";
import TransactionsList from "./Transactionslist";
import Search from "./Search";
import AddTransactionForm from "./TransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);

  const [ search, setSearch] = useState(""); 
  
   //Featch all transaction from server
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((r) => r.json())
      .then((data) => setTransactions(data)) //Setter activity for transaction after server response, this is the data in state when the app first loads
  }, [])

  //Re-renders page with updated state after creating a new transaction, use this when trying to re render with updated data
  function updatedTransactions(newTransactions) {
   const updatedTransactionsArray = [...transactions, newTransactions]
   setTransactions(updatedTransactionsArray)
  }

  //render all components
  return (
    <div>
      <Search search={search} setSearch={setSearch}/>
      <AddTransactionForm newData={updatedTransactions} />
      <TransactionsList transactions={transactions} setTransactions={setTransactions} search={search} />
    </div>
  );
}


export default AccountContainer;