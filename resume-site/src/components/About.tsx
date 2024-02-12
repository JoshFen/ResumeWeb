import { Row, Col } from "react-bootstrap";
import {useEffect} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMountain, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css"

export default function About() {
    useEffect(() => {
        AOS.init({duration: 1500})
    }, []);

    return (
        <section id="about" style={{ backgroundColor: 'var(--background2)'}}>
            <Row className="d-flex flex-row justify-content-evenly align-items-center cont" data-aos="fade-right">
                <Col lg={5} md={10} sm={12} className="pt-5 image-cont">
                    <div className="headshot-cont"> 
                        <img className="img-fluid about-headshot" src="./photos/Photo_1.png" alt="professional-headshot"/>
                    </div>     
                </Col>
                <Col lg={5} md={10} sm={12} className="d-flex flex-column justify-content-center" data-aos="fade-up">
                    <h2 className="p-5 header-text">about me</h2>

                    <div className="d-flex flex-row justify-content-evenly">
                        <div className="d-flex flex-column justify-content-center align-items-center highlights-content hover-animations">
                            <FontAwesomeIcon className="fs-4 p-3" icon={faCode} /> <p className="mb-0 fs-6"><b>Programming</b></p> <p>6+ Years</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center highlights-content hover-animations">
                                <FontAwesomeIcon className="fs-4 p-3" icon={faMountain} /> <p className="mb-0 fs-6"><b>Based in</b></p> <p>Denver, CO</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center highlights-content hover-animations">
                            <FontAwesomeIcon className="fs-4 p-3" icon={faBuildingColumns} /> <p className="mb-0 fs-6"><b>Graduated</b></p> <p>Penn State</p>
                        </div>
                    </div>

                    <div className="about-text-cont">
                        <p className="p-3 about-body">I am Joshua Fentress, a recent graduate from <b>Penn State University</b> with 
                                    both a Associate's and Bachelor's degree in Computer Science, achieving <b>Magna Cum Laude</b> honors. 
                                    My journey through academia has equipped me with 
                                    a comprehensive skill set in software engineering, encompassing various 
                                    programming languages, frameworks, and technologies. I've gained invaluable 
                                    experience in data management, full-stack development, and the dynamic 
                                    realm of AI/ML. I am passionate about harnessing technology to solve complex 
                                    problems and eager to embark on new ventures that leverage my expertise to 
                                    drive innovation and create meaningful impact. Feel free to reach out and
                                    I would love to connect!
                        </p>
                    </div>   
                </Col>      
            </Row>
        </section>

    )
}