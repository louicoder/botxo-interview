import React, { Component, useState, useEffect } from 'react';
import GetAndEdit from './GetAndEdit';
import ShowAndSend from './ShowAndSend';
import './styles.scss';
import MainButtons from './MainButtons';
import SecondaryButtons from './SecondaryButtons';
import * as ACTION_CREATORS from '../Store/ActionCreators';
import { connect, useSelector, useDispatch } from 'react-redux';

export default () => {
  const [ mode, setMode ] = useState('ge');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTION_CREATORS.getAllUsersAction());
  }, []);

  const switchViewHandler = (mode) => setMode(mode);

  return (
    <div className="main-container">
      <div className="inner-container">
        <div className="top-container">
          <div className="first">
            <MainButtons switchView={(mode) => switchViewHandler(mode)} checked={mode} />
          </div>
          <div className="last">{mode === 'ge' ? <GetAndEdit /> : <ShowAndSend />}</div>
        </div>
        <div className="bottom-container">
          <SecondaryButtons switchView={(mode) => switchViewHandler(mode)} checked={mode} />
        </div>
      </div>
    </div>
  );
};

//
