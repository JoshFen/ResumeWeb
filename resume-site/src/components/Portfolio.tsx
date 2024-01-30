import Project from "./Project";

import {useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';

import AOS from "aos";
import "aos/dist/aos.css"

export default function Portfolio() {

    const links: string[] = [
        /* Project 1 llinks*/
        "https://docs.google.com/presentation/d/196fzFa-xWLoCKtm55etmGilHpujSE9KDLN_abGI5F3Q/edit?usp=sharing",
        "",
        /* Project 2 links*/
        "",
        "https://github.com/JoshFen/ski-resort-mapping",
        /* Project 3 links*/
        "",
        "https://github.com/JesseFentress/ASLDetectionProject",
        /* Project 4 links*/
        "",
        "https://github.com/JoshFen/Room-Assignment"
    ];

    useEffect(() => {
        AOS.init({duration: 2500})
    }, []);

    return (
        <Container className="d-flex flex-column justify-content-evenly align-items-center portfolio-cont cont" data-aos="fade-up">
            <h2 className="header-text">Portfolio</h2>
            <Row className="projects-list">
                <Col xs={12} md={6} lg={6} data-aos="fade-up" className="p-4">
                    <Project photo="src/assets/Capstone.png" title="Project Grover" text="AI-Powered Search and Rescue Innovation in Collaboration with Lockheed Martin" primaryLink={links[0]} primaryLinkText="Presentation" secondaryLink={links[1]} secondaryLinkText=""/>
                </Col>
                <Col xs={12} md={6} lg={6} data-aos="fade-up" className="p-4">
                    <Project photo="src/assets/Off-piste.png" title="Off-piste" text="Dynamic Django Web App with OSM Integration for Ski Resort Navigation" primaryLink={links[2]} primaryLinkText="" secondaryLink={links[3]} secondaryLinkText="Git"/>
                </Col>
                <Col xs={12} md={6} lg={6} data-aos="fade-up" className="p-4">
                    <Project photo="src/assets/ASL.png" title="ASL Reader" text="Real-time ASL Hand Sign Recognition Web App with TensorFlow and MediaPipe" primaryLink={links[4]} primaryLinkText="" secondaryLink={links[5]} secondaryLinkText="Git"/>
                </Col>
                <Col xs={12} md={6} lg={6} data-aos="fade-up" className="p-4">
                    <Project photo="src/assets/LionsGate.png" title="Roar-mitory" text="Dorm Room Assignment Application for Penn State's LionsGate Faculty" primaryLink={links[6]} primaryLinkText="" secondaryLink={links[7]} secondaryLinkText="Git"/>
                </Col>
            </Row>

            
        </Container>
    )
}