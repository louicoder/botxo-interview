import React from 'react';
import USERS from '../Fixture';

export default function AllUsers ({ users = USERS, header }) {
  return (
    <div className="all-users-list-container">
      <h3>{header}</h3>
      {users && (
        <ul>
          {users.map(({ name, age }, index) => (
            <div className="single-name" index={index}>
              <li>
                {name} ({age})
                <span onClick={() => alert(name)}>
                  {' '}
                  <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                    />
                  </svg>
                </span>
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
