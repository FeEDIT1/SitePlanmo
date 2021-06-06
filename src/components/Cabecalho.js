import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {GiSofa} from "react-icons/gi"

import { MdDescription, MdStore, MdHome,
MdMailOutline, MdAccountCircle } from 'react-icons/md'

const Cabecalho = () => {

    return (
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#inicio" ><GiSofa/> PlanMo</Navbar.Brand>
    <Nav className="mr-auto">
    
      <Nav.Link href="#contato"><MdMailOutline/> Contato</Nav.Link>
      <DropdownButton 
        as={ButtonGroup}
        menuAlign={{ lg: 'right'}}
        title="Opções"
        id="cadastros"
        bg="dark" variant="dark">
            <Dropdown.Item eventKey="1" href="#/moveis"><GiSofa/> Meus Móveis</Dropdown.Item>
            <Dropdown.Item eventKey="2" href="#/integrantes"><MdAccountCircle /> Integrantes</Dropdown.Item>
            <Dropdown.Item eventKey="3" href="#/FAQ"><MdDescription/>FAQ</Dropdown.Item>
          
        </DropdownButton>
    </Nav>
  </Navbar>
    ) //
}

export default Cabecalho