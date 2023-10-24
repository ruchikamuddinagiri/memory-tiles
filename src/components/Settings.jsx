import React, { useState } from 'react';
import Modal from './Modal';

const SettingsPopup = ({onQuit}) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [mode, setMode] = useState('Normal');

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const quitApp = () => {
    closePopup(); // Close the popup
    onQuit()
  };

  const changeMode = () => {
    closePopup(); // Close the popup
    onQuit()
  };

  const buttonStyles = {
    position: 'fixed',
    top: '10px',
    // bottom: '10px',
    right: '10px',
    zIndex: 1,
    background: 'transparent', // Set the background to transparent
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
  };

  const popupStyles = {
    position: 'fixed',
    top: '10px',
    // bottom: '10px',
    right: '10px',
    border: 0,
    background: 'rgba(0, 0, 0, 0.2)',
    padding: '10px',
    // border: '1px solid #ccc',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    zIndex: 2,
    marginTop: '60px',
  };

  const buttonContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const buttonStylesNoBorder = {
    border: 'none', // No border
    background: 'transparent', // Transparent background
  };

  return (
    <div>
      <button onClick={togglePopup} style={buttonStyles}>
      {/* <i className="fa fa-cog" style={{fontSize: '50px', color: "white"}}></i> FontAwesome "cog" icon */}
      <img src="/settings.png" width="60" height="60" alt="Settings" />
      </button>

      {isPopupOpen && (
        <Modal>
        <div style={popupStyles}>
          <button
            onClick={closePopup}
            style={{
              ...buttonStylesNoBorder,
              position: 'absolute',
              top: '5px',
              right: '5px',
              cursor: 'pointer',
            }}
          >
            X
          </button>
          <div style={buttonContainerStyles}>
            <button onClick={quitApp} style={{ ...buttonStylesNoBorder, marginTop: '10px', marginRight: '10px' }}>
              Quit
            </button>
            <button onClick={changeMode} style={{...buttonStylesNoBorder, marginRight: '10px'}}>Change Mode</button>
          </div>
        </div>
        </Modal>
      )}
    </div>
  );
};

export default SettingsPopup;
