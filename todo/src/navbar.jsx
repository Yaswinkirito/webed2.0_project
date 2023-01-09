import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap';
import { Link} from "react-router-dom";


    function Navbar1()  {
        return (
            
                

                    <Navbar className="body1 navbar1" expand="lg">
                        <Container>
                        <Navbar.Brand as={Link} to="/" className='text-white'>Home</Navbar.Brand>
                        <Navbar.Toggle className='bg-white' aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                
                            >
                               
                                <Nav.Link as={Link} to="/Register" className='text-light'>Register</Nav.Link>
                                <Nav.Link as={Link} to="/todos" className='text-light'>Todos</Nav.Link>
                                <Nav.Link as={Link} to="/Login" className='text-light'>Login</Nav.Link>
                            
                            </Nav>

                        </Navbar.Collapse>
                        </Container>
                    </Navbar>
                
                
        )
    }
export default Navbar1