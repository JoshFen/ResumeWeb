import Project from "./Project";

import {useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';

import AOS from "aos";
import "aos/dist/aos.css"

export default function Portfolio() {

    useEffect(() => {
        AOS.init({duration: 2500})
    }, []);

    return (
        <Container className="d-flex flex-column justify-content-evenly align-items-center portfolio-cont cont" data-aos="fade-up">
            <h2 className="header-text">Portfolio & Skills</h2>
            <Row className="projects-list">
                <Col xs={12} md={6} lg={6} data-aos="fade-up" className="p-2">
                    <Project photo="src/assets/Capstone.png" title="Project Grover" text="An innovative Search and Rescue initiative empowered by AI Swarm Intelligence, seamlessly integrating 
                    diverse technologies to craft an interactive and traceable mission experience, in collaboration with Lockheed Martin." link="" linkText=""/>
                </Col>
                <Col xs={12} md={6} lg={6} data-aos="fade-up" className="p-2">
                    <Project photo="" title="Ski Resort Navigation" text="A dynamic Django web application leveraging OpenStreetMap (OSM) data to compute and visualize the quickest route 
                    between specified points on a ski mountain." link="" linkText="Try it out!"/>
                </Col>
                <Col xs={12} md={6} lg={6} data-aos="fade-up" className="p-2">
                    <Project photo="" title="Roar-mitory" text="A streamlined desktop application, built with Node.js and React for Penn State Abington's LionsGate faculty, simplifies 
                    dormitory room assignments for incoming students. Currently in testing for deployment across all Penn State satellite campuses." link="" linkText=""/>
                </Col>
                <Col xs={12} md={6} lg={6} data-aos="fade-up" className="p-2">
                    <Project photo="" title="ASL Reader" text="web application incorporating a machine learning model developed on TensorFlow, leveraging Google's Media 
                    Pipe to recognize American Sign Language (ASL) hand signs in real-time" link="" linkText="Try it out!"/>
                </Col>
            </Row>

            
        </Container>
    )
}