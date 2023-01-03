import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo"><img src={Logo} alt="logo" /></div>
        <div className="links">
          <Link className='link' to="/?cat=art"><h6>ARTE</h6></Link>
          <Link className='link' to="/?cat=science"><h6>CIÊNCIA</h6></Link>
          <Link className='link' to="/?cat=technology"><h6>TECNOLOGIA</h6></Link>
          <Link className='link' to="/?cat=cinema"><h6>CINEMA</h6></Link>
          <Link className='link' to="/?cat=design"><h6>DESIGN</h6></Link>
          <Link className='link' to="/?cat=food"><h6>COMIDA</h6></Link>
          <span>João</span>
          <span>Sair</span>
          <span className="write"><Link className='link' to="/write">Escreva</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar