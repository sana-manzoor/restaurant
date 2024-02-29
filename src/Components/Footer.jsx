import React from 'react'
import { Link } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'

function Footer() {
  return (
    <div>
        <div style={{height:'400px',width:'100%',backgroundColor:'#7DA871', overflowY:'hidden'}}>
      <Row className='p-5'>
        <Col md='6'>
        <h4 className='text-center'  style={{overflowY:'hidden'}}>          <i className="fa-solid fa-mug-saucer" style={{color: 'black'}}></i>            {' '}
        FOOD-BAY</h4><br />
        <p style={{textAlign:'justify',color:'black'}}>Welcome to [Your Restaurant Name], where culinary excellence meets warm hospitality. Our story is one of passion, dedication, and a commitment to delivering an exceptional dining experience to our cherished guests.
Our Journey

At Food-Bay, our journey began with a simple yet profound vision – to create a haven for food enthusiasts, a place where flavors come alive, and memories are made. Established in [Year of Establishment], we embarked on this culinary adventure with the aim of offering a unique blend of delectable cuisine, inviting ambiance, and impeccable service.
</p>

        </Col>
        {/* <Col md='4' className='d-flex flex-column text-center'>
          <h3  style={{overflowY:'hidden'}}>Links</h3>
          <Link to={'./'} style={{textDecoration:'none',color:'#223659'}} className='pt-3 pb-2'>Landing Page</Link>
          <Link to={'./home'} style={{textDecoration:'none',color:'#223659'}}className='pt-3 pb-2'>Home Page</Link>
          <Link to={'./watch-history'} style={{textDecoration:'none',color:'#223659'}} className='pt-3 pb-2'>Watch History</Link>

        </Col> */}
        <Col md='6' className='d-flex flex-column text-center'>
          <h3  style={{overflowY:'hidden'}}>Guides</h3>
          <Link  target='_blank' to={'https://react.dev/'} style={{textDecoration:'none',color:'black'}} className='pt-3 pb-2'> React</Link>
          <Link target='_blank' to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'black'}}className='pt-3 pb-2'>React-Bootstrap</Link>
          <Link target='_blank' to={'https://fontawesome.com/'} style={{textDecoration:'none',color:'black'}} className='pt-3 pb-2'>Fontawesome</Link>

        </Col>
      <div>
        <br /><br />
       <p className='text-center' style={{color:'black'}}>Copyright © 2023 React Bootstrap. Built with Docusaurus.</p> 
    </div>
      </Row>
      </div>
    </div>
  )
}

export default Footer