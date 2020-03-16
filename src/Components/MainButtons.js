import React from 'react';

export default function MainButtons ({ switchView, checked }) {
  return (
    <div className="main-buttons-container">
      <button onClick={() => switchView('ge')} className={checked === 'ge' ? 'active-main-button' : ''} id="ge-button">
        Get and Edit data
      </button>
      <button onClick={() => switchView('ss')} className={checked === 'ss' ? 'active-main-button' : ''} id="ss-button">
        Show and send data
      </button>
    </div>
  );
}
