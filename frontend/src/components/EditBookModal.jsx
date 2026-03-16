import React from 'react';

const EditBookModal = ({ isOpen, onClose, onSave, formData, handleInputChange, formError }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">Edit Book</h2>
        {formError && <div className="error-text">{formError}</div>}
        <form onSubmit={onSave}>
          <div className="form-group">
            <label className="label">Image URL</label>
            <input className="input" type="text" name="image" value={formData.image} onChange={handleInputChange} placeholder="https://example.com/image.png" />
          </div>
          <div className="form-group">
            <label className="label">Title *</label>
            <input className="input" type="text" name="title" value={formData.title} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label className="label">Author *</label>
            <input className="input" type="text" name="author" value={formData.author} onChange={handleInputChange} required />
          </div>
          <div className="flex-row">
            <div className="form-group flex-1">
              <label className="label">Publish Year *</label>
              <input className="input" type="number" name="publishYear" value={formData.publishYear} onChange={handleInputChange} required />
            </div>
            <div className="form-group flex-1">
              <label className="label">Price *</label>
              <input className="input" type="number" name="price" value={formData.price} onChange={handleInputChange} required />
            </div>
          </div>
          <div className="form-group">
            <label className="label">Description</label>
            <textarea className="input" name="description" value={formData.description} onChange={handleInputChange} />
          </div>
          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="save-btn">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookModal;
