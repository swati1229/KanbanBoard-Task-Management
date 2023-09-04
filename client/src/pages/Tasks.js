import React from 'react'
import { AuthState } from '../context/AuthProvider'
import Header from '../components/Header'

const Tasks = () => {

  const [user] = AuthState()

  console.log(user);

  return (
    <div style={{width: '100%'}}>
      {user && <Header />}
    </div>
  )
}

export default Tasks