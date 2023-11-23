import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import Styles from "../styles/skills.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub} from 'react-icons/fa';
import {RiJavascriptFill} from 'react-icons/Ri'
import {BiLogoTypescript} from 'react-icons/Bi'

function Skills() {
  return (
    <div class="h-50 d-flex align-items-center justify-content-center">
      <Container>
        <h4>Here, look at my skills</h4>
        <Row className={Styles.row}>
          <Col className={Styles.column}><FaHtml5 />HTML</Col>
          <Col className={Styles.column}><FaCss3Alt />CSS</Col>
        </Row>
        <Row className={Styles.row}>
          <Col className={Styles.column}><RiJavascriptFill />JS</Col>
          <Col className={Styles.column}><FaReact />React</Col>
        </Row>
        <Row className={Styles.row}>
          <Col className={Styles.column}><BiLogoTypescript />TS</Col>
          <Col className={Styles.column}><FaGithub />GITHUB</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Skills