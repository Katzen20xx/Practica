import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import { HomePage } from './Home'
import { HomePage, DetailPage } from './Detail'
import { HomePage, BookingPage } from './Booking'

export const Routes = () => (
    <Switch>
        <Route path="/" exact component={ HomePage } />
        <Route path="/detail/:id" component={ DetailPage } />
        <Route path="/booking/:id" component={ BookingPage } />
    </Switch>
)

