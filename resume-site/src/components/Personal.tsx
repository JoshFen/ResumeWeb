import { Container, Row, Col} from "react-bootstrap";
import { Carousel} from "react-bootstrap";

export default function Personal() {
 
    return (
        <section className="d-flex flex-column justify-content-center personal-sect" style={{ backgroundColor: 'var(--background2)'}}>
            <h1 className="fs-1 p-5 more-about-header">more about me</h1>
            <Row className="d-flex flex-row justify-content-evenly cont">
                <Col sm={12} md={6} className="d-flex flex-column photos-div">
                    <h2 className="p-2">Life's Highlights</h2>
                    <Carousel className="photos-carousel">
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid photos" src="src/assets/Yosemite1.jpeg" alt="Card image cap"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="src/assets/Trio.jpeg" alt="Card image cap"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="src/assets/GrandCanyon.jpeg" alt="Card image cap"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="src/assets/Climbing1.png" alt="Card image cap"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="src/assets/Snow.png" alt="Card image cap"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="src/assets/Grad.jpeg" alt="Card image cap"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="src/assets/Mellys.png" alt="Card image cap"/>
                        </Carousel.Item>                            <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="src/assets/Duo.png" alt="Card image cap"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="src/assets/Tree.png" alt="Card image cap"/>
                        </Carousel.Item>
                        <Carousel.Item interval={7000}>
                            <img className="img-fluid  photos" src="src/assets/Climbing2.png" alt="Card image cap"/>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            <Col sm={12} md={6}>
                <h2 className="p-2">What I enjoy</h2>
                <div className="d-flex flex-column">
                    <div>
                        <h4>backpacking</h4>
                    </div>
                    <div>
                        <h4>snowboarding</h4>
                    </div>
                    <div>
                        <h4> Rock Climbing</h4>
                    </div>
                    <div>
                        <h4>Games</h4>
                    </div>
                </div>
            </Col>
            </Row>
        </section>
    )
}
    
