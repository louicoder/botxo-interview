import React from 'react';
import './styles.scss';
// import Trash from '../Assets/Trash.svg';

export default function UserComponent ({ onChange, changeAge }) {
  return (
    <div className="users-container">
      <div className="name-and-age">
        <div>
          <p>Name</p>
          <input type="text" onChange={(e) => onChange(e)} />
        </div>
        <div>
          <p>Age</p>
          <input type="number" onChange={(e) => changeAge(e)} />
        </div>
      </div>
      <div>
        {/* <img src={Trash} alt="delete_icon" onClick={() => alert()} /> */}
        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" onClick={() => alert()}>
          <path
            fill="currentColor"
            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
          />
        </svg>
      </div>
    </div>
  );
}
