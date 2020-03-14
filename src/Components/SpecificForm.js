import React, { useState } from 'react';
import './styles.scss';
import UserComponent from './UserComponent';
import { useDispatch } from 'react-redux';
import { addSpecificUser } from '../Store/ActionCreators';

export default function GenericForm () {
  const [ name, setName ] = useState('');
  const [ age, setAge ] = useState(0);
  const dispatch = useDispatch();

  const addToSpecificList = () => {
    if (!name || !age) return alert(`${!name ? 'name' : 'age'} is missing`);
    // console.log('name and age', name, age);
    dispatch(addSpecificUser(name, age));
  };
  return (
    <div className="generic-form-container">
      <h3>Specific Data</h3>
      <div>
        <UserComponent
          changeName={(e) => setName(e.target.value)}
          changeAge={(e) => setAge(e.target.value)}
          name={name}
          age={age}
        />
        {/* <UserComponent onChange={() => null} changeAge={() => null} /> */}
      </div>
      <button className="send-button" onClick={addToSpecificList}>
        Add user only in specific data
      </button>
    </div>
  );
}
