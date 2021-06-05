import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Inicio from '../pages/Inicio'
import Moveis from '../pages/Moveis'
import Integrantes from '../pages/Integrantes'
import FAQ from '../pages/FAQ'
import Manual from '../pages/Manual'


export default function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/inicio" component={Inicio} />
                <Route exact path="/" component={Inicio} />
                <Route exact path="/moveis" component={Moveis} />
                <Route exact path="/integrantes" component={Integrantes} />
                <Route exact path="/FAQ" component={FAQ}/>
                <Route exact path="/manual" component={Manual}/>
            </Switch>
        </HashRouter>   
    )
}