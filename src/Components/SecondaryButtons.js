import React from 'react';
import './styles.scss';

export default function SecondaryButtons ({ switchView, checked }) {
  return (
    <div className="secondary-buttons-container">
      <div className="option-buttons-container">
        <input type="radio" name="ge" onClick={() => switchView('ge')} checked={checked === 'ge' ? true : false} />
        <input type="radio" name="ss" onClick={() => switchView('ss')} checked={checked === 'ss' ? true : false} />
      </div>
      <div className="next-container">
        <p onClick={() => switchView(checked === 'ss' ? 'ge' : 'ss')}>NEXT</p>
      </div>
    </div>
  );
}
