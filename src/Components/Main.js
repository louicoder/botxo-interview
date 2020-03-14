import React, { Component } from 'react';
import GetAndEdit from './GetAndEdit';
import ShowAndSend from './ShowAndSend';
import './styles.scss';
import MainButtons from './MainButtons';
import SecondaryButtons from './SecondaryButtons';

export default class Main extends Component {
  state = {
    mode: 'ge'
  };

  switchViewHandler = (mode) => this.setState({ mode });

  render () {
    const { mode } = this.state;
    return (
      <div className="main-container">
        <div className="inner-container">
          <div className="top-container">
            <div className="first">
              <MainButtons switchView={(mode) => this.switchViewHandler(mode)} checked={mode} />
            </div>
            <div className="last">{mode === 'ge' ? <GetAndEdit /> : <ShowAndSend />}</div>
          </div>
          <div className="bottom-container">
            <SecondaryButtons switchView={(mode) => this.switchViewHandler(mode)} checked={mode} />
          </div>
        </div>
      </div>
    );
  }
}

//
