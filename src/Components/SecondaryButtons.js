import React from 'react';
import './styles.scss';

export default function SecondaryButtons ({ switchView, checked }) {
  return (
    <div className="secondary-buttons-container">
      <div className="option-buttons-container">
        <input
          className="radio-buttons"
          type="radio"
          name="ge"
          value={checked}
          onChange={() => switchView('ge')}
          checked={checked === 'ge' ? true : false}
        />
        <input
          className="radio-buttons"
          type="radio"
          name="ss"
          value={checked}
          onChange={() => switchView('ss')}
          checked={checked === 'ss' ? true : false}
        />
      </div>
      <div className="next-container">
        <p onClick={() => switchView(checked === 'ss' ? 'ge' : 'ss')}>NEXT</p>
      </div>
    </div>
  );
}
