import { useState, useEffect } from 'react';

export const useSearch = (transactions) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    setFilteredTransactions(
      transactions.filter(transaction => 
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, transactions]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  return { searchTerm, handleSearch, filteredTransactions }
}