import React from 'react';
import Header from '../../../components/header/Header';
import useDocumentTitle from '../../../components/useDocumentTitle';

function Transfer() {
  useDocumentTitle('Transfer | Connecus');
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="mt-30">Transfer Token</h2>
        <select
          className="form-select custom-select input_white"
          aria-label="Default select example">
          <option>Please Select</option>
          <option>Purchase</option>
          <option>Support</option>
          <option>Technique</option>
          <option>Service Request</option>
        </select>
      </div>
    </div>
  );
}

export default Transfer;
