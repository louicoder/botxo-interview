import React from 'react';

export default function MainButtons ({ switchView, checked }) {
  return (
    <div className="main-buttons-container">
      <button onClick={() => switchView('ge')} className={checked === 'ge' ? 'active-main-button' : ''}>
        Get and Edit
      </button>
      <button onClick={() => switchView('ss')} className={checked === 'ss' ? 'active-main-button' : ''}>
        Show and send
      </button>
    </div>
  );
}
