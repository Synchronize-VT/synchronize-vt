import './Patients.css'
import Navbar from '../Navbar/Navbar'
import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../UserContext'
import PatientCard from './PatientCard'
import PatientProfileModal from './PatientProfileModal'
import api from '../api'

export default function Patients() {
  const {user} = useContext(UserContext)
  const [patients, setPatients] = useState([])
  const [isProfileModalOpen, setProfileModalOpen] = useState(false)
  const [selectedPatientId, setSelectedPatientId] = useState(null)

  //fetching all patients from the DB & necessary filtering
  useEffect(() => {
    const fetchPatients = async () => {
      try{
        const response = await api.get('api/user/patients', {withCredentials: true})
        setPatients(response.data)
      } catch (error){
        console.error('Error fetching patients:', error.response ? ErrorEvent.response.data : error.message)
      }
    }
    fetchPatients()
  }, [])

  const handlePatientEdit = (patient) => {
    setSelectedPatientId(patient.id);
    setProfileModalOpen(true);
  };

  const handlePatientClick = (id) => {
    setSelectedPatientId(id);
    setProfileModalOpen(true);
  };

  return (
    <>
        <Navbar />

        <main>
            <section className="myprofilehero">
                <video className="video-background" autoPlay loop muted>
                    <source src="https://res.cloudinary.com/dvbfkbehg/video/upload/v1721619091/hero_wrg6v9.mov" type="video/mp4" />
                </video>
                <div className="hero-content">
                    <h1>HEY DR. {user.username}!</h1>
                </div>
            </section>

            <section className='patientlist'>

              <div className='patientHeadline'>
                <h3>Your Patients</h3>
              </div>

              {patients.map((patient) => (
                <PatientCard
                  key ={patient.id}
                  patient={patient}
                  onClick={handlePatientClick}
                  onEdit={handlePatientEdit}/>
              ))}

              <PatientProfileModal
                    isOpen={isProfileModalOpen}
                    onClose={() => setProfileModalOpen(false)}
                    patientId={selectedPatientId}
              />
            </section>
      </main>
    </>
  )
}
