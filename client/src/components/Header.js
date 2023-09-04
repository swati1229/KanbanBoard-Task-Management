import React from 'react'
import { AuthState } from '../context/AuthProvider'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Header = () => {

    const [user] = AuthState()
    console.log(user);

    const logoutHandler = () => {

    }

  return (
    <>
        Task Management
    </>
  )
}

export default Header