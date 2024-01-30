import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

export default function Footer() {

    return (
        <div className='footer pt-5' style={{ backgroundColor: 'var(--background2)'}}>
            <ul className='list-unstyled mb-auto'>
                <li>
                    <div> 
                    <a href="https://github.com/JoshFen" target='_blank' className="footer-links"> 
                    <FontAwesomeIcon className='footer-icon' icon={faGithub}/> 
                    <span>/JoshFen</span > </a> 
                    </div>
                </li>
                <li> 
                    <div>
                        <a href="https://www.linkedin.com/in/joshuafentress/" target='_blank' className="footer-links">
                        <FontAwesomeIcon className='footer-icon' icon={faLinkedin}/> 
                        <span>/JoshuaFentress</span > </a> 
                    </div>
                </li>
                <li>
                    <div> 
                    <a href="https://www.instagram.com/joshfen_/" target='_blank' className="footer-links"> 
                    <FontAwesomeIcon className='footer-icon' icon={faInstagram}/> 
                    <span>/joshfen_</span > </a>
                    </div>
                </li>
                <li>
                    <div> 
                    <a href="mailto:joshua.c.fentress@gmail.com" className="footer-links"> 
                    <FontAwesomeIcon className='footer-icon' icon={faEnvelope}/> 
                    <span>joshua.c.fentress@gmail.com</span > </a> 
                    </div>
                </li>
                <li>
                    <div> 
                    <a href="" className="footer-links"> 
                    <FontAwesomeIcon className='footer-icon' icon={faPhone}/> 
                    <span>+1 267-980-9281</span > </a>
                    </div>
                </li>
            </ul>
            <p className="mt-4 copyright">Copyright &#169; 2023 JOSHUA FENTRESS. All Rights Reserved.</p>
        </div>
    )
}