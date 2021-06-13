import React from 'react'
import { Route } from "react-router-dom";

function ClientAuth({Component, redirect_url}) {
    return (
        <Route
            render={props=> <Component/>}
        />
    )
}

export default ClientAuth
