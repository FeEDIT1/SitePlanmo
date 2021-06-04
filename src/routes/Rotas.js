import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Inicio from '../pages/Inicio'
import Categorias from '../pages/Categorias'
import Integrantes from '../pages/Integrantes'
import FAQ from '../pages/FAQ'


export default function Rotas(){
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/inicio" component={Inicio} />
                <Route exact path="/" component={Inicio} />
                <Route exact path="/categorias" component={Categorias} />
                <Route exact path="/integrantes" component={Integrantes} />
                <Route exact path="/FAQ" component={FAQ}/>
            </Switch>
        </HashRouter>   
    )
}