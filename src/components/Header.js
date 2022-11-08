import React from 'react'
import { Navbar, Container} from 'react-bootstrap'
import { PeopleFill } from 'react-bootstrap-icons'
function Header() {
 const User = localStorage.getItem('User')
  return (
    <div>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href={`/home/${User}`} >
            <PeopleFill style={{ color: "white" }} size={22} />
            {' '}
            <b>MaPe</b>
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    </div>
  )
}
export default Header