import { useState, useEffect } from 'react';

export const useFetchTransactions = (updatedTransactions) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (updatedTransactions.length) {
        setTransactions(updatedTransactions);
    } else {
        fetch('https://api.jsonbin.io/v3/b/63c594b515ab31599e382662')
        .then(response => response.json())
        .then(data => {
        setTransactions(data.record.transactions);
        });
    }
  }, [updatedTransactions]);

  return transactions;
}