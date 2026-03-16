import React from 'react';
import '../styles/ActionsModal.css';

const ActionsModal = ({ isOpen, onClose, book, onEdit, onDelete }) => {
  if (!isOpen || !book) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Click propagation disabled on the modal content to prevent closing when clicking inside */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Actions for "{book.title}"</h2>
        <div className="actions-modal-container">
          <button 
            className="edit-btn actions-modal-btn" 
            onClick={() => { onClose(); onEdit(book); }}
          >
            Edit Book
          </button>
          <button 
            className="delete-btn actions-modal-btn" 
            onClick={() => { onClose(); onDelete(book); }}
          >
            Delete Book
          </button>
          <button 
            className="cancel-btn actions-modal-cancel" 
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionsModal;
