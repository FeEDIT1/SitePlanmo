import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Toast from 'react-bootstrap/Toast'

import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { BACKEND } from '../constants'
import {GiSofa} from "react-icons/gi"
import { MdRestaurantMenu, MdWeb, MdSave, MdModeEdit, MdDelete, MdCancel } from 'react-icons/md'
import { unmountComponentAtNode } from 'react-dom'

const Moveis = () => {
    const valorInicial = { nomeMovel: '', lugar:'', cor:'', tamanho:'', valor:''}

    const [movel, setMovel] = useState(valorInicial)
    const [moveis, setMoveis] = useState([])
    const [carregandoMoveis, setCarregandoMoveis] = useState(false)
    const [salvandoMoveis, setSalvandoMoveis] = useState(false)
    const [confirmaExclusao, setConfirmaExclusao] = useState(false)

    const [aviso, setAviso] = useState('')
    const [erros, setErros] = useState({})

    const { nomeMovel, lugar, cor, tamanho, valor } = movel

    async function obterMoveis() {
        setCarregandoMoveis(true)
        let url = `${BACKEND}/moveis`
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setMoveis(data)
                console.log(data)
            })
            .catch(function (error) {
                console.error(`Erro ao obter as categorias: ${error.message}`)
            })
        setCarregandoMoveis(false)

    }

    useEffect(() => {
        document.title = 'Seus Móveis!'
        obterMoveis()
    }, [])

    const validaErrosMóveis = () => {
        const novosErros = {}
        //Validação de Nome
        if (! nomeMovel || nomeMovel === '') novosErros.nomeMovel = 'O nome não pode ser vazio'
        else if (nomeMovel.length > 30) novosErros.nomeMovel = 'O nome informado é muito longo'
        else if (nomeMovel.length < 3) novosErros.nomeMovel = 'O nome informado é muito curto'
        return novosErros
    }

    const alteraDadosMoveis = e => {
        setMovel({ ...movel, [e.target.name]: e.target.value })
        setErros({})
    }

    async function salvarMovel(e) {
        e.preventDefault() // evita que a página seja recarregada  
        const novosErros = validaErrosMóveis()
        //Existe algum erro no array?
        if (Object.keys(novosErros).length > 0) {
            //Sim, temos erros!
            setErros(novosErros)
        } else {
            const metodo = movel.hasOwnProperty('_id') ? 'PUT' : 'POST'
            setSalvandoMoveis(true)
            let url = `${BACKEND}/moveis`
            await fetch(url, {
                method: metodo,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(movel)
            }).then(response => response.json())
                .then(data => {
                    (data._id || data.message) ? setAviso('Registro salvo com sucesso') : setAviso('')
                    setMovel(valorInicial)
                    obterMoveis()
                }).catch(function (error) {
                    console.error(`Erro ao salvar a categoria: ${error.message}`)
                })
            setSalvandoMoveis(false)
        }
    }

    async function excluirMovel() {
        let url = `${BACKEND}/moveis/${movel._id}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                data.message ? setAviso(data.message) : setAviso('')
                setMovel(valorInicial)
                obterMoveis()
            })
            .catch(function (error) {
                console.error(`Erro ao excluir a categoria: ${error.message}`)
            })
    }

    return (
        <>
            <Container fluid className="p-0 ">
                <Cabecalho />
                <Row className="bg-danger text-light">
                    <Col>
                        <h3 className="text-center"><GiSofa /> Lista de Móveis!</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={6}>
                        {/* Formulário das Categorias */}
                        <h4><MdWeb /> Registro do móvel</h4>
                        <Form method="post">
                            <Form.Group controlId="nomeMovel">
                                <Form.Label>Nome da Categoria</Form.Label>
                                <Form.Control
                                    name="nomeMovel"
                                    placeholder="Ex: Sofa"
                                    onChange={alteraDadosMoveis}
                                    value={nomeMovel}
                                    isInvalid={!!erros.nomeMovel}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {erros.nomeMovel}
                                </Form.Control.Feedback>
                            </Form.Group>
                          
                         {/*  Registro comodo */}
                         <Form method="post">
                            <Form.Group controlId="lugar">
                                <Form.Label>Qual cômodo o móvel ficará?</Form.Label>
                                <Form.Control
                                    name="lugar"
                                    placeholder="Ex: Quarto"
                                    onChange={alteraDadosMoveis}
                                    value={lugar}
                                    isInvalid={!!erros.lugar}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {erros.lugar}
                                </Form.Control.Feedback>
                            </Form.Group>
                          </Form>

                            {/*  Registro Cor */}
                         <Form method="post">
                            <Form.Group controlId="cor">
                                <Form.Label>Qual a cor do móvel?</Form.Label>
                                <Form.Control
                                    name="cor"
                                    placeholder="Ex: Preto"
                                    onChange={alteraDadosMoveis}
                                    value={cor}
                                    isInvalid={!!erros.cor}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {erros.cor}
                                </Form.Control.Feedback>
                            </Form.Group>
                          </Form> 

                                  {/*  Registro tamanho */}
                         <Form method="post">
                            <Form.Group controlId="tamanho">
                                <Form.Label>Qual o tamanho do móvel?</Form.Label>
                                <Form.Control
                                    name="tamanho"
                                    placeholder="Ex: Grande"
                                    onChange={alteraDadosMoveis}
                                    value={tamanho}
                                    isInvalid={!!erros.tamanho}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {erros.tamanho}
                                </Form.Control.Feedback>
                            </Form.Group>
                          </Form> 

                          {/*  Registro valor */}
                          <Form method="post">
                            <Form.Group controlId="valor">
                                <Form.Label>Qual o valor médio do móvel?</Form.Label>
                                <Form.Control
                                    name="valor"
                                    placeholder="Ex: 215"
                                    onChange={alteraDadosMoveis}
                                    value={valor}
                                    isInvalid={!!erros.valor}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {erros.valor}
                                </Form.Control.Feedback>
                            </Form.Group>
                          </Form> 




                            <Button variant="primary " type="submit" title="Salvar o registro"
                                onClick={(e) => salvarMovel(e)}>
                                {salvandoMoveis
                                    ? <Spinner animation="border" size="sm" />
                                    : <MdSave />
                                }
                                Salvar
                            </Button>
                            &nbsp;
                            
                        </Form>
                    </Col>
                    <Col xs={12} lg={6}>
                        {/* Listagem das Categorias */}
                        {carregandoMoveis &&
                            <>
                                <Spinner animation="border" size="sm" />
                                <Spinner animation="grow" variant="info" />
                                <p>Aguarde, enquanto as categorias são carregadas...</p>
                            </>
                        }
                        <Table striped bordered hover>
                            <thead>
                                <tr className="bg-dark text-light">
                                    <th>Móvel</th>
                                    <th>Comodo</th>
                                    <th>Cor</th>
                                    <th>Tamanho</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {moveis.map(item => (
                                    <tr key={item._id}>
                                        <td>{item.nomeMovel}</td>
                                        <td>{item.lugar}</td>
                                        <td>{item.cor}</td>
                                        <td>{item.tamanho}</td>
                                        <td>{item.valor}</td>
                                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <Button variant="outline-primary" title="Editar o registro"
                                                onClick={() => setMovel(item)}>
                                                <MdModeEdit />
                                            </Button>
                                            &nbsp;
                                            <Button variant="outline-danger" title="Apagar o registro"
                                                onClick={() => {
                                                    setMovel(item)
                                                    setConfirmaExclusao(true)
                                                }} >
                                                <MdDelete />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                                <tr className="bg-dark text-light">
                                    <td colspan="3">Total de Registros:</td>
                                    <td>{moveis.length}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Modal animation={false} show={confirmaExclusao} onHide={() => setConfirmaExclusao(false)}>
                    <Modal.Header>
                        <Modal.Title>Confirmação da Exclusão</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Confirma a exclusão da categoria selecionada?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => setConfirmaExclusao(!confirmaExclusao)}>
                            ❌Cancelar
                            </Button>
                        <Button variant="success"
                            onClick={() => {
                                setConfirmaExclusao(!confirmaExclusao)
                                excluirMovel()
                            }}>
                            ✔️Confirmar
                            </Button>
                    </Modal.Footer>
                </Modal>

                <Toast
                    onClose={() => setAviso('')}
                    show={aviso.length > 0}
                    animation={false}
                    delay={4000}
                    autohide
                    className="bg-success"
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10
                    }}>
                    <Toast.Header>Aviso</Toast.Header>
                    <Toast.Body classname="text-light">{aviso}</Toast.Body>
                </Toast>

               
            </Container>
        </>
    )
}

export default Moveis