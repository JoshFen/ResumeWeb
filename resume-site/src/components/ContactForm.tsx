import { Button, Form } from "react-bootstrap";

export default function ContactForm() {
    return (
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
    )
}