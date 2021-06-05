import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

import Figure from 'react-bootstrap/Figure'


import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'


const Manual = () => {

    useEffect(() => {
        document.title = 'Manual de uso!'
    }, [])

    return (
        <>
            <Container fluid className="p-0">
                <Cabecalho />
                <br />
                <Jumbotron>
                    <h1 className="text-center font-weight-bold"> Manual do usuário!</h1>
                
                </Jumbotron>
                <h3 className="text-center font-weight-bold"> Para utilizar , favor no momento, como o projeto está limitado, colocar apenas palavras e valores diferentes
                até uma futura atualização, isto por agora é um teste e deve-se levar em conta a tal limitação até
                o momento de aprendizado de uso da função <h4>AGGREGATE</h4> para colocar objetos repetidos
                no mesmo banco de dados! </h3>
            
                <br />
                <br />
              
                <br/>
                <br/>
                <br/>
                <br/>
                <Rodape></Rodape>
                
    

            </Container>
        </>
    )
}

export default Manual