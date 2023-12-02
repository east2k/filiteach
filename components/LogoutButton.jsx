"use client"

import { logoutUser } from '@/auth-actions/logoutUser';
import React from 'react'

const LogoutButton = () => {
  const handleLogoutUser = async () =>{
    await logoutUser()
  }
    return (
    <button
        onClick={handleLogoutUser}
        className="mt-auto text-white bg-red-400 text-xl w-full px-3 py-5"
    >
        Log Out
    </button>
  )
}

export default LogoutButton