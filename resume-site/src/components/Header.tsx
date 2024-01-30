import { Container } from "react-bootstrap"
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css"

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        AOS.init({duration: 2000})
    }, []);

    
    return (
    <div className="d-flex justify-content-center container">
        {/* <div className="image-cont" data-aos="fade-up">
            <img className="header-image" src="src/assets/Photo_1.png" alt="professional-headshot"/>
        </div> */}
        <div className={`d-flex flex-column justify-content-center header-name ${scrollPosition >  200 ? 'fade-out' : ''}`}>
            <h1 className="rounded-2 title-name">Joshua</h1>
            <h1 className="rounded-2 title-name">Fentress</h1>
            <h5 id="header-desc">Fullstack Engineer</h5>
        </div>
    </div>
    )
}

export default Header