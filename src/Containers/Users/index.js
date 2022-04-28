
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

import {
  Container,
  ContainerItems,
  H1,
  Button,
  User
} from './styles';


function Users  ()  {

  const [users, setUsers] = useState([]);


  useEffect(() => {
    async function fetchUsers() {
      const { data: allUsers } = await axios.get('http://localhost:4000/users');
      setUsers(allUsers);
    }

    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:4000/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  return (
    <Container>
      <ContainerItems>
        <H1>Usuários</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt='Delete'></img></button>
            </User>
          ))}
        </ul>
        <Button><img alt='Seta' src={Arrow}/>Voltar</Button>
      </ContainerItems>
    </Container>
  );
}

export default Users;










