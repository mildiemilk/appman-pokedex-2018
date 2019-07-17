import React from 'react'
import './style.css'

const Footer = ({ openModalfn }) => <div className="footer" onClick={openModalfn}>
  <div className="icon-add">+
  </div>
</div>

export default Footer