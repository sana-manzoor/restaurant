import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
         <Navbar style={{backgroundColor:'#7DA871',paddingTop:'18px'}}>
        <Container>
        <Link to={'./'} style={{textDecoration:'none'}}> 
          <Navbar.Brand >
          {/* <i className="fa-solid fa-arrow-up-from-bracket fa-flip fa-xl me-3" style={{color: '#223659;'}}></i> */}
          <i className="fa-solid fa-mug-saucer" style={{color: 'black'}}></i>            {' '}
             <span style={{fontSize:'28px'}} >Food-Bay</span>
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header