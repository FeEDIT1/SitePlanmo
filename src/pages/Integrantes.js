import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'


import Cabecalho from '../components/Cabecalho'


const Integrantes = () => {

    useEffect(() => {
        document.title = 'Integrantes'
    }, [])

    return (
        <>
            <Container fluid className="p-0 my-3 bg-dark text-white" >
                <Cabecalho />
                <br/>
                <br/>
                <img src="https://upload.hicoria.com/files/ZYq4H7Ts.jpg"
                 alt="Felipe" 
                 class="rounded-circle mx-auto d-block border border-light"
                 width={210}
                 height={200}></img>
                <h1 class="text-center font-weight-bold">Felipe Eduardo de Souza Honorato</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <img src="https://upload.hicoria.com/files/KNhA4EWB.jpg"
                 alt="Felipe" 
                 class="rounded-circle mx-auto d-block border border-light"
                 width={210}
                 height={200}></img>
                <h1 class="text-center font-weight-bold">Kauane do Carmo Almeida</h1>
                <br/>
                <br/>
                <br/>
                <br/>

               
            </Container>
        </>
    )
}

export default Integrantes