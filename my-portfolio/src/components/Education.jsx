import React from 'react'
import { useState } from 'react'
import { ButtonAnimate, ButtonStyle, Heading } from '../styles/educationStyle';

function Education() {
  const [display,setDisplay]=useState(false);
  const handleSubmit=()=>{
    setDisplay(!display);
  }
  
  return (
    <>
    <ButtonStyle>
    <Heading> Education</Heading>
    <p>I have completed my Bachelors degree in Computer Science and Engineering at 2013</p>
      <ButtonAnimate onClick={handleSubmit}>
       More
        </ButtonAnimate>
        {
          display && (
            <div>
              <p>Schooling</p>
            </div>
          )
      }
    
    </ButtonStyle>
     
    </>
     
  )
}

export default Education