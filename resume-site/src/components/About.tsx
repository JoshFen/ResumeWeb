import { Container, Row, Col } from "react-bootstrap";

export default function About() {
    
    return (
        <div className="d-flex flex-row justify-content-xxl-evenly about-me-cont cont">
                <div className="image-cont">     
                    <img className="about-headshot" src="src/assets/Photo_1.png" alt="professional-headshot"/>
                </div>
            <div className="d-flex flex-column">
            <h2 className="p-5 about-me-header head-text">about me</h2>
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
            </div>             
        </div>

    )
}