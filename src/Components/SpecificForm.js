import React from 'react';
import './styles.scss';
import UserComponent from './UserComponent';

export default function GenericForm () {
  return (
    <div className="generic-form-container">
      <h3>Specific Data</h3>
      <div>
        <UserComponent onChange={() => null} changeAge={() => null} />
        <UserComponent onChange={() => null} changeAge={() => null} />
      </div>
      <button>Add user only in specific data</button>
    </div>
  );
}
