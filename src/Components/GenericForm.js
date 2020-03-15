import React, { useState } from 'react';
import './styles.scss';
import UserComponent from './UserComponent';
import { useDispatch } from 'react-redux';
import { addGenericUser } from '../Store/ActionCreators';

export default function GenericForm () {
  const [ name, setName ] = useState('');
  const [ age, setAge ] = useState(0);
  const dispatch = useDispatch();

  const addToGenericList = () => {
    if (!name || !age) return alert(`${!name ? 'name' : 'age'} is missing`);
    dispatch(addGenericUser(name, age));
    setName('');
    setAge(0);
  };
  return (
    <div className="generic-form-container">
      <h3>Generic Data</h3>
      <div>
        <UserComponent
          changeName={(e) => setName(e.target.value)}
          changeAge={(e) => setAge(e.target.value)}
          name={name}
          age={age}
        />
        {/* <UserComponent onChange={() => null} changeAge={() => null} /> */}
      </div>
      <button className="send-button" onClick={addToGenericList}>
        Add user in generic and specific data
      </button>
    </div>
  );
}
