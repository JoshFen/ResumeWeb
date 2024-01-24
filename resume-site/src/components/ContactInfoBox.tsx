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
        <Row className="contact-link-cont">
            <Col md={12}>
                <FontAwesomeIcon icon={icon}/>
            </Col>
            <Col md={12} className="d-none d-md-block">
                <h5>{title}</h5>
            </Col>
            <Col md={12} className="d-none d-md-block">
                <p>{text}</p>
            </Col>        
            <Col md={12} className="d-none d-md-block">
                <a href={link} className="cont-link" target="_blank" rel="noopener noreferrer">{linkText}</a>
            </Col>    
        </Row>
    )
}
 export default ContactInfoBox;