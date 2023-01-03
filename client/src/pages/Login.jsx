import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type='text' placeholder='Usuário' />
        <input type='password' placeholder='Senha' />
        <button>Login</button>
        <p>Placeholder For Error Messages</p>
        <span>Não possui uma conta? <Link to="/register">Registre-se</Link>!</span>
      </form>
    </div>
  )
}

export default Login