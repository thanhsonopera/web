import React, { useEffect } from "react";
import "./Popup.css";
const Popup = ({ onClose, children }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".popup-content")) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="close-button-wrapper">
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="popup-text">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
