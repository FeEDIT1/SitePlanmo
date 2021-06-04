import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'


import Cabecalho from '../components/Cabecalho'


const Inicio = () => {

    useEffect(() => {
        document.title = 'PlanMo'
    }, [])

    return (
        <>
            <Container fluid className="p-0">
                <Cabecalho />


                <Jumbotron>
                    <h1 class="text-center font-weight-bold">Bem vindo ao planejamento de móveis!</h1>
                    <p class="text-center font-weight-bold">
                        Aqui, você define os móveis desejados em cada cômodo!
                    </p>

                </Jumbotron>
                <Button className="font-weight-bold"
                    variant="danger"  
                    size= "lg"                
                    block href="#/categorias">
                    Vamos começar!
  </Button>
                <br />
                <br />
                <br />
                <br />
                <br />

                <img src="https://upload.hicoria.com/files/jkMqSjGK.png"
                    width={1100}
                    height={100}
                    class="rounded mx-auto d-block">

                </img>
            </Container>
        </>
    )
}

export default Inicio