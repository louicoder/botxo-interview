import React from 'react';
import AllUsers from './AllUsers';
import { useSelector, useDispatch } from 'react-redux';
import { sendGenericUsers, sendSpecificUsers } from '../Store/ActionCreators';

export default function ShowAndSend () {
  const specificUsers = useSelector((state) => state.specificUsers);
  const genericUsers = useSelector((state) => state.genericUsers);

  const dispatch = useDispatch();

  const sendDataOrderedByAge = () => dispatch(sendSpecificUsers(specificUsers));

  const sendDataOrderedByName = () => dispatch(sendGenericUsers(genericUsers));
  return (
    <div>
      <AllUsers header="All users ordered by name" users={genericUsers} />
      <AllUsers header="All users ordered by age" users={specificUsers} />
      <div className="send-buttons">
        <button onClick={sendDataOrderedByAge}>send data order by age</button>
        <button onClick={sendDataOrderedByName}>send data order by name</button>
      </div>
    </div>
  );
}
