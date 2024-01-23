import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FC } from "react";


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
        <div className="contact-link-cont">
                    <FontAwesomeIcon icon={icon}/>
                    <h5>{title}</h5>
                    <p>{text}</p>
                    <a href={link} className="cont-link" target="_blank" rel="noopener noreferrer">{linkText}</a>
        </div>
    )
}
 export default ContactInfoBox;