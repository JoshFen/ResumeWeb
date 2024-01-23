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
            <Row className="">
                <Col xs={12} md={6} lg={3} data-aos="fade-up">
                    <Project photo="" title="Project Grover" text="Lockheed Martin Capstone paired AI swarm intelligence with image classification for search and rescure operations.
                    " link="" linkText=""/>
                </Col>
                <Col xs={12} md={6} lg={3} data-aos="fade-up">
                    <Project photo="" title="Ski Resort Navigation" text="Web application that utilizes web scraped OpenStreetMap data and djikstra's algorithm for navigation across 
                    ski resorts" link="" linkText="Try it out!"/>
                </Col>
                <Col xs={12} md={6} lg={3} data-aos="fade-up">
                    <Project photo="" title="Roar-mitory" text="Ease of use desktop application for Penn State Abington's LionsGate faculty. Placed incoming students in
                    dormitory room assignments. Application in testing for all Penn State sattelite campuses." link="" linkText=""/>
                </Col>
                <Col xs={12} md={6} lg={3} data-aos="fade-up">
                    <Project photo="" title="ASL Reader" text="Web application using machine learning model built on Tensorflow to identify ASL hand signs in real-time
                    using Google's Media Pipe." link="" linkText="Try it out!"/>
                </Col>
            </Row>

            
        </Container>
    )
}