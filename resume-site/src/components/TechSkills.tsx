import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJs, faHtml5, faPython, faGithub, faWindows, faApple, faLinux, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function TechSkills() {


    return (
        <section style={{ backgroundColor: 'var(--background2)'}}>
            <div className="techskills-cont cont">
                <h2>technical experience</h2>
                <Row className="d-flex flex-row justify-content-evenly">
                    <Col md={6} sm={12} className="tech-sec">
                        <Row>
                            <h4>Languages</h4>
                            <Col md={6} sm={12} className="inner-col">
                                <FontAwesomeIcon className="fs-1" icon={faJava} />
                                <h4 className="tech-skill">Java</h4>
                                <FontAwesomeIcon className="fs-1" icon={faJs} />
                                <h4 className="tech-skill">JavaScript</h4>
                                <img src="src/assets/icons/CSharp.png" className="tech-icon"/>
                                <h4 className="tech-skill">C#</h4>
                                <FontAwesomeIcon className="fs-1" icon={faHtml5} />
                                <h4 className="tech-skill">HTML / CSS</h4>
                            </Col>   
                            <Col md={6} sm={12} className="inner-col">
                                <FontAwesomeIcon className="fs-1" icon={faPython} />  
                                <h4 className="tech-skill">Python</h4>
                                <img src="src/assets/icons/TypeScript.png" className="tech-icon"/>
                                <h4 className="tech-skill">TypeScript</h4>
                                <img src="src/assets/icons/C++.png" className="tech-icon"/>
                                <h4 className="tech-skill">C++</h4>
                                <FontAwesomeIcon className="fs-1" icon={faDatabase} />
                                <h4 className="tech-skill">SQL</h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} sm={12} className="tech-sec">
                        <Row>
                            <h4>Technologies & Frameworks</h4>
                            <Col md={6} sm={12} className="inner-col">
                                <FontAwesomeIcon className="fs-1" icon={faGithub} />  
                                <h4 className="tech-skill">Github</h4>
                                <FontAwesomeIcon className="fs-1" icon={faReact} />  
                                <h4 className="tech-skill">ReactJS</h4>
                                <img src="src/assets/icons/Django.png" className="tech-icon"/>
                                <h4 className="tech-skill">Django</h4>
                                <FontAwesomeIcon className="fs-1 p-1" icon={faWindows} />
                                <FontAwesomeIcon className="fs-1 p-1" icon={faApple} />  
                                <FontAwesomeIcon className="fs-1 p-1" icon={faLinux} />    
                                <h4 className="tech-skill">Windows/Linux/macOS</h4>
                            </Col>   
                            <Col md={6} sm={12} className="inner-col"> 
                                <FontAwesomeIcon className="fs-1" icon={faNodeJs} /> 
                                <h4 className="tech-skill">NodeJS</h4>
                                <img src="src/assets/icons/Express.png" className="tech-icon"/>
                                <h4 className="tech-skill">ExpressJS</h4>
                                <img src="src/assets/icons/Agile.png" className="tech-icon"/>
                                <h4 className="tech-skill">Agile/Scrum</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>
    )
}
