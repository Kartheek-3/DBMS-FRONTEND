import React from 'react';
import './orderSuccessModal.css';

function OrderSuccessModal({ message, onClose }) {
    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h3>{message}</h3>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default OrderSuccessModal;
