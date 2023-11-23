import React from 'react'
import '../styles/home.css'
import logo from '../assets/avatar.svg'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Home=()=> {
  const navigate = useNavigate();

  const handleButton =()=>{
    navigate('/about');
  }
  return (
    <Container className="h-50 d-flex align-items-center justify-content-center">
      <Row>
        <Col>
          <p className='homeTitle'>Hi, I'm Rabia Nuzha</p>
          <div className='homeContainer'>
            <p className='subTitle'>Front End Developer</p>
          </div>
          <div>
            <Button
            className='btn'
            onClick={handleButton}
            >
            Find out more about me
            </Button>
          </div>
        </Col>
        <Col>
          <div>
            <img  
            src={logo} 
            alt=""  
            className='avatar'
            />
          </div>
        </Col>
      </Row>
     
    </Container> 
  )
}

export default Home