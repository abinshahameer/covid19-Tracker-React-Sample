import React, { Component } from 'react'
import {Button,Navbar,Form,Nav,FormControl} from 'react-bootstrap';
import {Link,BrowserRouter as Router,} from 'react-router-dom'
 class Header extends Component {
    render() {
        return (
            <div>
                 <Router>
              <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">COVID-19</Navbar.Brand>
    <Nav className="mr-auto">
      <Link className="nav-link" to="/India">India</Link>
      <Link className="nav-link" to="/World">World</Link>
      <Link className="nav-link" to="/India">State</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

  
  </Router>
            </div>
        )
    }
}

export default Header
