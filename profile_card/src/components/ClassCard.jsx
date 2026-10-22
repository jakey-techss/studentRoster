import React from 'react'
import '/src/cardHolder.css'
const ClassCard = ({title, subtitle, children}) => {
  return (
    <>
    <h1>{title}</h1>
    <h6 className='sub'>{subtitle}</h6>
    <div className='cardList'>
        {children}
    </div>
    </>
  )
}

export default ClassCard