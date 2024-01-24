import { FC } from "react";

interface ProjectProps {
    photo: string,
    title: string,
    text: string,
    link: string,
    linkText: string;
}

const Project: FC<ProjectProps> = (props) => {
    const {photo, title, text, link, linkText} = props;
    
    return (
        <div className="card" style={{width: '18rem;'}}>
            <img className="card-img-top" src={photo} alt="Card image cap"></img>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">{text}</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
            </div>
      </div>
    )
}
 export default Project;