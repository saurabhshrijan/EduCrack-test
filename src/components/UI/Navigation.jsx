import React from 'react';
import {Link} from "react-router-dom";
import { Nav, Navbar,Button } from 'react-bootstrap';

export default function Navigation(){
  const handleLogout=(e)=>{
    console.log(e);
    localStorage.removeItem('idToken');
  }
  return (
    <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/">Renting platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            {
                localStorage.getItem('idToken') ? 
                <Button variant="outline-success" onClick={handleLogout}>Logout</Button>:
                <Button variant="outline-success"><Nav.Link href="/login">Login</Nav.Link></Button>
            }
            </Nav>
            
        </Navbar.Collapse>
    </Navbar>
)
}