import { FC } from "react";
import { Row, Col } from "react-bootstrap";


import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";


interface ContactInfoProps {
    icon: IconDefinition;
    title: string;
    text: string;
    link: string;
    linkText: string;
}

const ContactInfoBox: FC<ContactInfoProps> = (props) => {
    const {icon, title, text, link, linkText} = props;
    
    return (
        <Row className="contact-link-cont hover-animations">
            <Col md={12} className="d-none d-md-block">
                <FontAwesomeIcon  className="fs-2" icon={icon}/>
            </Col>
            <Col className="d-block d-sm-none">
                <a href={link} target="_blank" className="footer-links">   <FontAwesomeIcon  className="fs-2" icon={icon}/> </a>
            </Col>
            <Col md={12} className="d-none d-md-block">
                <h5>{title}</h5>
            </Col>
            <Col md={12} className="d-none d-md-block">
                <p>{text}</p>
            </Col>        
            <Col md={12} className="d-none d-md-block">
                <a href={link} className="hover-text cont-link" target="_blank" rel="noopener noreferrer">{linkText}</a>
            </Col>    
        </Row>
    )
}
 export default ContactInfoBox;