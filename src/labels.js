import React from 'react';

export const Labels = ({newTransaction, handleChange}) => {
  return (
    <>
      <label>
        ID:
        <input type="number" name="id" value={newTransaction.id} onChange={handleChange} />
      </label>
      <label>
        Date:
        <input type="date" name="date" value={newTransaction.date} onChange={handleChange} />
      </label>
      <br />
      <label>
        Description:
        <input type="text" name="description" value={newTransaction.description} onChange={handleChange} />
      </label>
      <br />
      <label>
        Category:
        <input type="text" name="category" value={newTransaction.category} onChange={handleChange} />
      </label>
      <br />
      <label>
        Amount:
        <input type="number" name="amount" value={newTransaction.amount} onChange={handleChange} />
      </label>
    </>
  );
}