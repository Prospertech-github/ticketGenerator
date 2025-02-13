import React from 'react'
import { Header } from '../components'

const Outlet = ({children}) => {
  return (
    <section>
        <Header />
        {children}
    </section>
  )
}

export {Outlet}