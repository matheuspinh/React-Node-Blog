import React from 'react'

import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='auth'>
      <h1>Registre-se</h1>
      <form>
        <input required type='text' placeholder='Usuário' />
        <input required type='email' placeholder='E-mail' />
        <input required type='password' placeholder='Senha' />
        <button>Registre-se</button>
        <p>Placeholder For Error Messages</p>
        <span>Já possui uma conta? <Link to="/login">Entre aqui</Link>!</span>
      </form>
    </div>
  )
}

export default Register