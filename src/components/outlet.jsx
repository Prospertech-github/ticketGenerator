import React from 'react'
import { Header } from '../components'
import styles from "./outlet.module.css"

const Outlet = ({children}) => {
  return (
    <section>
        <Header />
        {children}
    </section>
  )
}

export {Outlet}