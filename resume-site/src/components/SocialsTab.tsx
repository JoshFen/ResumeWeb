import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function SocialsTab() {

    return (
        <div className='rounded-2 right-hovering-div'>
            <ul className='list-unstyled mb-auto'>
                <li> <a href="https://www.linkedin.com/in/joshuafentress/" target='_blank'> <FontAwesomeIcon className='fs-3 m-2 custom-icons' icon={faLinkedin}/> </a> </li>
                <li> <a href="https://github.com/JoshFen" target='_blank'> <FontAwesomeIcon className='fs-3 m-2 custom-icons' icon={faGithub}/> </a> </li>
                <li> <a href="#email-me"> <FontAwesomeIcon className='fs-3 m-2 custom-icons' icon={faEnvelope}/> </a> </li>
            </ul>   
        </div>
    )
}