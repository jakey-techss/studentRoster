import React from 'react'
import '/src/studentCard.css'
const StudentCard = ({ name, studentId, grade, role }) => {
  return (
    <div className='card'>
      <p>#{studentId}</p>
      <h2>{name}</h2>
      <h4>Grade {grade}</h4>
      <h6>{role}</h6>
    </div>
  )
}

export default StudentCard