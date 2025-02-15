import React from 'react'
import {NavLink } from 'react-router-dom'
import { TiczLogo } from '../../assets'
import { NavButton } from '../../components'
import styles from './header.module.css'


const Header = () => {
  return (
    <header>
        <div className={styles.logo}>
            <img src={TiczLogo} alt="" />
        </div>

        <nav>
            <ul className={styles.navItems}>
                <li>
                    <NavLink to='/' className={styles.active}>Events</NavLink>
                </li>
                <li>
                    <NavLink to='/tickets'>My Tickets</NavLink>
                </li>
                <li>
                    <NavLink to='/projects'>About Project</NavLink>
                </li>
            </ul>
        </nav>
        
        <NavButton />
    </header>
  )
}

export {Header}