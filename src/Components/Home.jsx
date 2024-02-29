import React,{useEffect} from 'react'
import Restcard from './Restcard'
import { Row,Col } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/storeSlice'

function Home() {
  const dispatch=useDispatch()

const allRestaurant=useSelector((state)=>state.storeSlice.allRestaurants)
  useEffect(()=>{
    dispatch(fetchRestaurant())
  })
  return (
    <div className='my-5 mb-4 ms-2'>
        <h1>Available Rstaurants</h1>
            <Row className='p-3'>
                {
                  allRestaurant?
                  allRestaurant.map(item=>(
                    <Col sm={12} md={6} lg={3} className='mb-3'>
                    <Restcard  restaurant={item}/>
                </Col>
                  ))
                  :
                  null
                }
            </Row>
    </div>
  )
}

export default Home