import { Container, Row, Col } from "react-bootstrap";

export default function About() {
    return (
        <Container id="about-me">
            <Row>
                <Col>
                </Col>
                <Col md={7}>
                    <h2 className="mb-5 about-me-header">About Me</h2>
                    <h6 className="mb-4 about-greeting">Hey there!</h6>
                    <p className="about-body">I am Joshua Fentress, a recent graduate from <b>Penn State University</b> with 
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
                </Col>                
            </Row>
        </Container>

    )
}