import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'




import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'


const FAQ = () => {

    useEffect(() => {
        document.title = 'FAQ'
    }, [])

    return (
        <>
            <Container fluid className="p-0">
                <Cabecalho />
                <br />
                <Jumbotron>
                    <h1 className="text-center font-weight-bold"> Perguntas e respostas!</h1>
                    <h2 className="text-center"> Aqui, dúvidas sobre o projeto são esclarecidas!</h2>
                </Jumbotron>
                <h3 className="text-center font-weight-bold"> Dificuldades com o projeto?</h3>
                <h4 className="text-center" > Adaptar o código de maneira que funcione corretamente com o intuito desejado</h4>
                <br />
                <br />
                <h3 className="text-center font-weight-bold"> Limitação do projeto?</h3>
                <h4 className="text-center" > Por conta da função do projeto, infelizmente não conseguimos aprender sobre
            como fazer para colocar nomes e valores repetidos no mesmo banco de dados</h4>
                <br />
                <br />
                <h3 className="text-center font-weight-bold"> Qual o intuito do projeto??</h3>
                <h4 className="text-center" > O planejamento de compras de móveis para cada cômodo
                se torna comúm o uso para quando queremos ou mudar o estilo
                de nossa residência
                ou até mesmo quando for ocorrer uma mudança e queremos redefinir o design interior,
                logo, mostra-se necessário um meio de armazenar este tipo de conteúdo!</h4>

                <br/>
                <br/>
                <br/>
                <br/>
                <Rodape></Rodape>
                
    

            </Container>
        </>
    )
}

export default FAQ