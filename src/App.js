import React, { useState } from 'react';
import './index.css';
import { useFetchTransactions } from './fetch';
import { useSearch } from './Component/search';
import { Labels } from './labels';

function App() {
const [updatedTransactions, setUpdatedTransactions] = useState([]);
const transactions = useFetchTransactions(updatedTransactions);
const { searchTerm, handleSearch, filteredTransactions } = useSearch(transactions);
const [newTransaction, setNewTransaction] = useState({
id: '',
date: '',
description: '',
category: '',
amount: ''
});

const handleSubmit = (event) => {
event.preventDefault();
const newTransactions = [...transactions, newTransaction];
setUpdatedTransactions(newTransactions);
}

const handleChange = (event) => {
setNewTransaction({
...newTransaction,
[event.target.name]: event.target.value
});
}

return (
<div>
<h1 className='logo'> BANK-OF-FLATIRON </h1>
<form onSubmit={handleSubmit}>
<Labels newTransaction={newTransaction} handleChange={handleChange} />
<br />
<input type="submit" value="Submit" />
</form>
<form>
<label >
Search:
<input type="text" placeholder='Search' className='search' value={searchTerm} onChange={handleSearch} />
</label>
</form>
<table>
<thead>
<tr>
<th>ID</th>
<th>Date</th>
<th>Description</th>
<th>Category</th>
<th>Amount</th>
</tr>
</thead>
<tbody>
{filteredTransactions.map((item, index) => (
<tr key={item.id}>
<td className="my-td">{item.id}</td>
<td className="my-td">{item.date}</td>
<td className="my-td">{item.description}</td>
<td className="my-td">{item.category}</td>
<td className="my-td">{item.amount}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}
export default App;

