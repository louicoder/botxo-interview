import React from 'react';
import './styles.scss';
import UserComponent from './UserComponent';

export default function GenericForm () {
  return (
    <div className="generic-form-container">
      <h3>Generic Data</h3>
      <div>
        <UserComponent onChange={() => null} changeAge={() => null} />
        {/* <UserComponent onChange={() => null} changeAge={() => null} /> */}
      </div>
      <button className="send-button">Add user in generic and specific data</button>
    </div>
  );
}
