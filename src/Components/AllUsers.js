import React from 'react';
import USERS from '../Fixture';

export default function AllUsers ({ users = USERS, header }) {
  return (
    <div className="all-users-list-container">
      <h3>{header}</h3>
      {users && (
        <ul>
          {users.map((user) => (
            <li>
              {user.name} ({user.age})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
