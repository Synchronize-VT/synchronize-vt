import React, { useState, useContext } from 'react';
import './ProfileModal.css';
import { UserContext } from '../UserContext';

export default function ProfileModal({ isOpen, onClose, handleSubmitPatientInfo }) {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    place_of_birth: '',
    date_of_birth: '',
    sex: '',
    height: '',
    weight: '',
    occupation: '',
    address: '',
    phone: '',
    complaint: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={(e) => handleSubmitPatientInfo(e, formData)}>
          <p>Create Patient Profile</p>
          <input name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required />
          <input name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required />
          <input name="place_of_birth" placeholder="Place of Birth" value={formData.place_of_birth} onChange={handleChange} required />
          <input name="date_of_birth" placeholder="Date of Birth" type="date" value={formData.date_of_birth} onChange={handleChange} required />
          <input name="sex" placeholder="Sex" value={formData.sex} onChange={handleChange} required />
          <input name="height" placeholder="Height (in)" type="number" value={formData.height} onChange={handleChange} required />
          <input name="weight" placeholder="Weight (lbs)" type="number" value={formData.weight} onChange={handleChange} required />
          <input name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} required />
          <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <input name="phone" placeholder="Phone" type="tel" value={formData.phone} onChange={handleChange} required />
          <textarea name="complaint" placeholder="Complaint" value={formData.complaint} onChange={handleChange} />
          <div className='modal-controls'>
            <button className="close-button" onClick={onClose}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
