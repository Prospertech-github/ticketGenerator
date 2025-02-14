import React from 'react'
import { Outlet, Card} from '../../components'
import { CardDetails } from './components/cardDetails'

const Events = () => {
  return (
    <Outlet>
      <Card>
        <CardDetails />
      </Card>
    </Outlet>
  )
}

export {Events}