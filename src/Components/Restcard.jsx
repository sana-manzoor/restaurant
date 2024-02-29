import React from 'react'
import { Card } from 'react-bootstrap'

function Restcard({restaurant}) {
  return (
    <div>
        < Card style={{ width: '18rem',height:'380px' }} className='mb-4 text-center'>
      <Card.Img variant="top" style={{height:'300px'}} className='img-fluid' src={restaurant.photograph} />
      <Card.Body>
        <Card.Title className='fw-bolder text-center'><h4>{restaurant.name}</h4></Card.Title>
        <Card.Text>
          <p><span className='fw-bolder'>Neighbourhood:{restaurant.neighborhood}</span></p>
          <p><span className='fw-bolder'>Cuisine Type:{restaurant.cuisine_type}</span></p>

        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Restcard