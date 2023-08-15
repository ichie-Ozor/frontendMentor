import React from 'react'
import  qr  from './images/Qr.png';
import './Qr.css';

function Qr() {
  return (
    <div className='Qr'>
      <div className='Qr-container'>
        <img src={qr} alt='' className='Qr-img' />
        <p className='Qr-text'>
            Improve your front-end skills by building projects
        </p>
        <p id='Qr-text'>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  )
}

export default Qr
