import { faFacebookMessenger, faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form } from "react-bootstrap";

export default function Contact() {

    type contactFormData = {
        name: string;
        email: string;
        message: string;
    }

    const emailAddress: String = 'joshua.c.fentress@gmail.com';

    return (
        <div id="contact-me" className="d-flex flex-column justify-content-center contact-cont cont">
            <h1 className="mb-5">Contact Information</h1>
            <div className="mb-5 d-flex justify-content-center">
                <div className="contact-link-cont">
                    <FontAwesomeIcon icon={faGoogle}/>
                    <h5>Gmail</h5>
                    <p>joshua.c.fentress</p>
                    <a href={`mailto:${emailAddress}`} className="cont-link">Send An Email</a>
                </div>

                <div className="contact-link-cont">
                    <FontAwesomeIcon icon={faWhatsapp}/>
                    <h5>WhatsApp</h5>
                    <p>+1 (267) 980-9281</p>
                    <a href="https://wa.me/12679809281" className="cont-link" target="_blank">Send A Messeage</a>
                </div>

                <div className="contact-link-cont">
                    <FontAwesomeIcon icon={faFacebookMessenger}/>
                    <h5>Messenger</h5>
                    <p>JoshFen97</p>
                    <a href={"https://m.me/JoshFen97"} className="cont-link" target="_blank">Send A Messeage</a>
                </div>
            </div>

            <div className="mt-4">
                <h2>Let's Connect!</h2>
                <div className="d-flex justify-content-center align-items-center">
                    <Form className="contact-form">
                        <Form.Group controlId="name" className="mt-3 form-item">
                            <Form.Control className="form-text" type="text" placeholder="Enter Your Name"/>
                        </Form.Group>

                        <Form.Group controlId="email" className="mt-3 form-item">
                            <Form.Control className="form-text" type="email" placeholder="Enter Your Email"/>
                        </Form.Group>

                        <Form.Group controlId="message" className="mt-3 form-item">
                            <Form.Control className="no-resize form-text" as="textarea" rows={6} placeholder="Enter Message"/>
                        </Form.Group>
                    
                        <Button variant="primary" type="submit" className="mt-3 send-msg-butt">Send Message</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
