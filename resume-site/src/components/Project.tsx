import { FC } from "react";

interface ProjectProps {
    photo: string,
    title: string,
    text: string,
    primaryLink: string
    primaryLinkText: string,
    secondaryLink: string,
    secondaryLinkText: string;
}

const Project: FC<ProjectProps> = (props) => {
    const {photo, title, text, primaryLink, primaryLinkText, secondaryLink, secondaryLinkText} = props;
    
    return (
        <div className="card project-card" style={{width: '18rem'}}>
            <img className="card-img-top rounded-bottom" src={photo} alt="Card image cap"></img>
            <div className="card-body">
                <h2 className="card-title fs-2">{title}</h2>
                <p className="card-text fs-5">{text}</p>
                <div className="mt-4">
                {primaryLink !== "" && (
                    <a href={primaryLink} target="_blank" className="card-link project-links">{primaryLinkText}</a>
                )}
                {secondaryLink !== "" && (
                    <a href={secondaryLink} target="_blank" className="card-link project-links">{secondaryLinkText}</a>
                )}
                </div>
            </div>
      </div>
    )
}
 export default Project;