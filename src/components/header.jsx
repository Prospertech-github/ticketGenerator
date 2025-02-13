import React from 'react'
import { TiczLogo } from '../assets'

const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={TiczLogo} alt="" />
        </div>
        
    </header>
  )
}

export {Header}