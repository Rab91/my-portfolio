import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../styles/footer.css'
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <div>
        <footer className="footer">
        
            <div className='media'>
                <p>Stay Connected</p>
                <Row>
                    <Col>
                    <a className='link'
                    href='https://www.linkedin.com/in/rabianuzha/'>
                    <FaLinkedin />
                    </a>
                    </Col>
                    <Col>
                    <a className='link'
                    href='https://www.facebook.com/'
                    >
                        <FaFacebook />
                    </a>
                    </Col>
                    <Col>
                    <a className='link'
                    href='https://www.instagram.com/'
                    >
                        <FaInstagram />
                    </a>   
                    </Col>
                    <Col>
                    <a className='link'
                    href='https://www.whatsapp.com/'
                    >
                        <FaWhatsapp />
                    </a>
                    </Col>
                </Row>   
                <p className='copyright'>Rabia Nuzha portfolio @ 2023 copyrights reserved</p> 
      
            </div>
        </footer>
    </div>
  )
}

export default Footer