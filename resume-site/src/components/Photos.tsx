import { Carousel } from "react-bootstrap";

export default function Photos() {
 
    return (
        <Carousel className="photos-carousel">
            <Carousel.Item interval={7000}>
                <img className="photos" src="src/assets/Yosemite1.jpeg" alt="Card image cap"/>
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img className="photos" src="src/assets/Climbing2.jpeg" alt="Card image cap"/>
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img className="photos" src="src/assets/Trio.jpeg" alt="Card image cap"/>
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img className="photos" src="src/assets/GrandCanyon.jpeg" alt="Card image cap"/>
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img className="photos" src="src/assets/Climbing1.jpeg" alt="Card image cap"/>
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img className="photos" src="src/assets/Grad.jpeg" alt="Card image cap"/>
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img className="photos" src="src/assets/Mellys.jpeg" alt="Card image cap"/>
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img className="photos" src="src/assets/Duo.jpeg" alt="Card image cap"/>
            </Carousel.Item>
            <Carousel.Item interval={7000}>
                <img className="photos" src="src/assets/Tree.jpeg" alt="Card image cap"/>
            </Carousel.Item>
        </Carousel>
    )
}
    
