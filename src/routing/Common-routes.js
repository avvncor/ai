import React from 'react'
import { Switch } from "react-router-dom";
import ClientAuth from '../pages/components/auth-check/client-auth'
import Main from '../pages/components/Main'

function CommonRoutes() {
    return (
        <div>
            <Switch>
                <ClientAuth exact path="/" Component={Main} redirect_url="/" />
            </Switch>
        </div>
    )
}

export default CommonRoutes
