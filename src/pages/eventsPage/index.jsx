import React from 'react'
import { Outlet, Card} from '../../components'
import { CardDetails } from './components/cardDetails'
import { ToastContainer } from 'react-toastify'

const Events = () => {
  return (
    <Outlet>
      <Card>
        <CardDetails />
      </Card>
      <ToastContainer />
    </Outlet>
  )
}

export {Events}