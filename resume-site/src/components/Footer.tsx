import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

export default function Footer() {
    return (
        <Container fluid className='footer pt-5'>
            <ul className='list-unstyled mb-auto'>
                <li>
                    <div> 
                    <a href="https://github.com/JoshFen" target='_blank'> 
                    <FontAwesomeIcon className='footer-icon' icon={faGithub}/> 
                    <p className="d-inline-block">/JoshFen</p></a> 
                    </div>
                </li>
                <li> 
                    <div>
                        <a href="https://www.linkedin.com/in/joshuafentress/" target='_blank'>
                        <FontAwesomeIcon className='footer-icon' icon={faLinkedin}/> 
                        <p className="d-inline-block">/JoshuaFentress</p></a> 
                    </div>
                </li>
                <li>
                    <div> 
                    <a href="#email-me"> 
                    <FontAwesomeIcon className='footer-icon' icon={faEnvelope}/> 
                    <p className="d-inline-block">joshua.c.fentress@gmail.com</p> </a> 
                    </div>
                </li>
                <li>
                    <div> 
                    <a href=""> 
                    <FontAwesomeIcon className='footer-icon' icon={faPhone}/> 
                    <p className="d-inline-block ver">+1 267-980-9281</p> </a>
                    </div>
                </li>
            </ul>
            <p className="copyright">Copyright &#169; 2023 JOSHUA FENTRESS. All Rights Reserved.</p>
        </Container>
    )
}