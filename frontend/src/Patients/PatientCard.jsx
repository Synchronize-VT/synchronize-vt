import React from 'react'
import './PatientCard.css'

export default function PatientCard({patient, onClick}) {
  return (
    <div className='patient-card' onClick={() => onClick(patient.id)} >
        <div className='profile-picture'>
            <img src="https://picsum.photos/id/64/200/300" alt="patient" />
        </div>
        <div className='patient-name'>
            <p>{patient.firstname} {patient.lastname}</p>
        </div>
        <div className='notification-controls'>
          <i className="fa-regular fa-bell"></i>
        </div>
    </div>
  )
}
