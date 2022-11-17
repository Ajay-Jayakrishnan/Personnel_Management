import React from 'react'
import { Navbar, Container, Dropdown } from 'react-bootstrap'
import { PersonFill, PeopleFill } from 'react-bootstrap-icons'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function HomeHeader({ User }) {
  const navigate = useNavigate()
  const params = useParams()
  
  function delAc() {
    axios.delete('http://localhost:3010/delAc/'+ params.id).then(result =>{
      alert(result.data.message);
      localStorage.removeItem('token')
      localStorage.removeItem('User')
      navigate('/')
    })
  }
    
  function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('User')
    navigate('/')
  }

  return (


    <div>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href={`/home/${User}`} >
            <PeopleFill style={{ color: "white" }} size={22} />
            {' '}
            <b>MaPe</b>
          </Navbar.Brand>
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              <PersonFill size={22}></PersonFill> <b>{User}</b>{' '}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
              <Dropdown.Item onClick={delAc}>Delete Account</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  )
}

export default HomeHeader