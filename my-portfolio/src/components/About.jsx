import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../styles/about.css'
import profile from '../assets/about_image.svg'
import { useEffect } from 'react'

const URL="http://localhost:5174/CV.pdf"

const About=()=> {

  const downloadFile=(url)=>{

    const fileName =url.split('/').pop();
    const urlTag=document.createElement('a');
    urlTag.href = url;
    urlTag.setAttribute('download','');
    document.body.appendChild(urlTag);
    urlTag.click();
    urlTag.remove();

  }
  return (
    <Container>
       <h1 className='aboutHeader'>Who am I?</h1>
      <Row>
        <Col>
          <div>
            <img 
            src={profile}
            className='profileImage'
            alt=""
            />
          </div>
        </Col>
        <Col>   
          <div>
            <span className='aboutTitle'>I'm a 
            <p className='role'>Front End Developer</p>
            I am passionate to create app designs and web development.
            I love to learn new technolgoies that is required for the particular project in their company</span>
            <Button 
              className='button'
              onClick={()=>{downloadFile(URL)}}
            >
            Download CV
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About