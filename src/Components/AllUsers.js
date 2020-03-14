import React from 'react';
import { useDispatch } from 'react-redux';
import { removeGenericUserAction, removeSpecificUserAction } from '../Store/ActionCreators';
// import USERS from '../Fixture';

export default function AllUsers ({ users, header, genericOrSpecific }) {
  const dispatch = useDispatch();

  const removeUserHandler = (name) => {
    switch (genericOrSpecific) {
      case 'generic':
        return dispatch(removeGenericUserAction(name));
      case 'specific':
        return dispatch(removeSpecificUserAction(name));
      default:
        return;
    }
  };
  return (
    <div>
      <h3>{header}</h3>
      <div className="all-users-list-container">
        {users && (
          <ul>
            {users.map(({ name, age }, index) => (
              <div className="single-name" key={index}>
                <li>
                  {name} ({age})
                  <span onClick={() => removeUserHandler(name)}>
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
    </div>
  );
}
