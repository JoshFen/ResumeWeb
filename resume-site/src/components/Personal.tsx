import { useEffect } from "react";
import { Row, Col} from "react-bootstrap";
import { Carousel} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faPersonSnowboarding, faGamepad } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css"


export default function Personal() {

    useEffect(() => {
        AOS.init({duration: 3000})
    }, []);
 
    return (
        <section className="d-flex flex-column justify-content-center personal-sect" style={{ backgroundColor: 'var(--background2)'}}>
            <h1 className="fs-1 p-5 more-about-header" data-aos="fade-up">more about me</h1>
            <Row className="d-flex flex-row justify-content-evenly cont" data-aos="fade-up">
                <Col sm={12} md={6} className="d-flex flex-column photos-div">
                    <h2 className="p-2">Life's Highlights</h2>
                    <Carousel className="photos-carousel">
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid photos" src="./photos/Yosemite1.jpeg" alt="Yosemite backpacking trip"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="./Resume-Site/photos/Trio.jpeg" alt="Two best friends"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="./resume-site/photos/GrandCanyon.jpeg" alt="Grandcanyon backpacking trip"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="./Resume-site/Climbing1.png" alt="Rock climbing"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="./resume-site/Snow.png" alt="Snowboarding"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="/resume-site/photos/Grad.jpeg" alt="College graduation"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="/Resume-Site/photos/Mellys.png" alt="Three friends"/>
                        </Carousel.Item>                            <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="/photos/Duo.png" alt="Me and girlfriend"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="/photos/Tree.png" alt="Friends in Sequoia"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="/photos/Climbing2.png" alt="Rock climbing"/>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            <Col sm={12} md={12} lg={6}>
                <div className="d-flex flex-column align-items-center">
                <h2 className="p-2">some hobbies of mine...</h2>
                    <div className="hobbies-cont hobbies-left d-flex justify-content-evenly align-items-center">
                        <h4 className="d-inline-block hobbies-text">backpacking</h4>
                        <FontAwesomeIcon icon={faCampground} className="hobbies-icon"/>
                    </div>
                    <div className="hobbies-cont hobbies-right d-flex justify-content-evenly align-items-center">
                        <FontAwesomeIcon icon={faPersonSnowboarding} className="hobbies-icon hoverable-icon"/>
                        <h4 className="d-inline-block hobbies-text">snowboarding</h4>
                    </div>
                    <div className="hobbies-cont hobbies-left d-flex justify-content-evenly align-items-center">
                        <h4 className="d-inline-block hobbies-text">rock climbing</h4>
                        <img src="/icons/climbing.png" className="hobbies-icon icon-png"/>
                    </div>
                    <div className="hobbies-cont hobbies-right d-flex justify-content-evenly align-items-center">
                        <FontAwesomeIcon icon={faGamepad} className="hobbies-icon"/>
                        <h4 className="d-inline-block hobbies-text">video games</h4>
                    </div>
                </div>
            </Col>
            </Row>
        </section>
    )
}
    
