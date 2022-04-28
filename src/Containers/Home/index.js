import React, { useState, useRef } from 'react';

import axios from 'axios';

import Arrow from '../../assets/arrow.svg'


import {
  Container,
 
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
} from './styles';


function App  ()  {

  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post('http://localhost:4000/users',
      { name: inputName.current.value, age: inputAge.current.value });

    setUsers([...users, newUser])

    const { data: allUsers } = await axios.get('http://localhost:4000/users')
    setUsers(allUsers)
  }

  return (
    <Container>
    
      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewUser}>
          Cadastrar<img alt='Seta' src={Arrow} />
          
        </Button>
      </ContainerItems>
    </Container>
  );
}

export default App;










