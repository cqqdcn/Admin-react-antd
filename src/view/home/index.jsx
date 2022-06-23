import React from 'react'
import './index.scss'
import welcome from '../../images/welcome.png'

export default function index() {
  return (
    <div className="welcome">
      <img src={welcome} alt="" />
    </div>
  )
}
