import { FC } from "react";

interface ProjectProps {
    photo: string,
    title: string,
    text: string,
    link: string,
    linkText: string;
}

const ContactInfoBox: FC<ProjectProps> = (props) => {
    const {photo, title, text, link, linkText} = props;
    
    return (
        <div className="project-cont">
            <h3>{ title }</h3>
            <p>{ text }</p>
        </div>
    )
}
 export default ContactInfoBox;