import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { useEffect, useState } from "react";

export default function SocialsTab() {

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

    return (
            <div className={`rounded-2 right-hovering-div ${scrollPosition < 150 ? 'fade-out' : ''} d-none d-md-block`}>
                <ul className='list-unstyled mb-auto'>
                    <li> <a href="https://www.linkedin.com/in/joshuafentress/" target='_blank'> <FontAwesomeIcon className='fs-3 m-2 custom-icons' icon={faLinkedin}/> </a> </li>
                    <li> <a href="https://github.com/JoshFen" target='_blank'> <FontAwesomeIcon className='fs-3 m-2 custom-icons' icon={faGithub}/> </a> </li>
                    <li> <a href="#contact-me"> <FontAwesomeIcon className='fs-3 m-2 custom-icons' icon={faEnvelope}/> </a> </li>
                </ul>   
            </div>

    )
}