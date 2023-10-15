import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function SocialsTab() {
    return (
        <ul>
            <li> <a href="https://www.linkedin.com/in/joshua-fentress-68307a1ba/"> <FontAwesomeIcon icon={faLinkedin}/> </a> </li>
            <li> <a href="https://github.com/JoshFen"> <FontAwesomeIcon icon={faGithub}/> </a> </li>
            <li> <a href="#email-me"> <FontAwesomeIcon icon={faEnvelope}/> </a> </li>
        </ul>
    )
}