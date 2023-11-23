import React from 'react'
import { Card } from 'react-bootstrap'
import Styles from'../styles/contact.module.css'
import {SocialData} from '../data/socialData';
import { FaPhone} from 'react-icons/fa';
import { AiOutlineMail} from 'react-icons/ai';
import { FaAddressBook} from 'react-icons/fa';

function Contact() {
  return (
    <div>
      <h4 className={Styles.title}>Keep in touch with me</h4>
    <div>
    {
        SocialData.map((item, index)=>{
          return( 
            <div key={index}>
              <a href={item.link} target="_blank">
               <img src={item.image} className={Styles.imageStyle} />  
              </a>
          </div>
          )  
        })
      }  
   </div>
   <div className={Styles.cardContainer}>
   <Card className={Styles.card}>
        <Card.Body>
          <Card.Title>
            <FaPhone  className={Styles.title}/>
            Phone
          </Card.Title>
          <Card.Text>07586127044</Card.Text>
        </Card.Body>
      </Card> 
      <Card className={Styles.card}>
        <Card.Body>
          <Card.Title>
            <AiOutlineMail className={Styles.title}/>
            Email
          </Card.Title>
          <Card.Text>rabianuzha@gmail.com</Card.Text>
        </Card.Body>
      </Card> 
      <Card className={Styles.card}>
        <Card.Body>
          <Card.Title>
            <FaAddressBook className={Styles.title}/>
            Address
          </Card.Title>
          <Card.Text>38, Chaucer Drive,</Card.Text>
          <Card.Text> Nuneaton,</Card.Text>
          <Card.Text> CV10 9SD.</Card.Text>
        </Card.Body>
      </Card> 
    
   </div>
      
      </div>
    
  )
}

export default Contact