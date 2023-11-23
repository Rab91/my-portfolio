import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import '../styles/experience.css'
import Line from './Line'

function Experience() {
  return (
    <div className='expContainer'>
      <h5>My Experience</h5>
      <Line 
      colour="blue"
      height="20"
      />
      <div className='cardGroup'>
        <Card className='cardStyle'>
          <ListGroup variant='flush'>
            <ListGroup.Item className='list'>Legal Utopia</ListGroup.Item>
            <p>Front End Developer</p>
            <span>March 2022 - May 2022</span>
          </ListGroup>
        </Card>
        <Card className='cardStyle'>
          <ListGroup variant='flush'>
            <ListGroup.Item className='list'>Staffordshire University</ListGroup.Item>
            <p>Mobile Developer</p>
            <span>October 2020 - April 2021</span>
          </ListGroup>
        </Card>
        <Card className='cardStyle'>
          <ListGroup variant='flush'>
            <ListGroup.Item  className='list'>University of Leicester</ListGroup.Item>
            <p>Mobile Developer</p>
            <span>2019 - 2020</span>
          </ListGroup>
        </Card>
      </div>
    </div>
  )
}

export default Experience;