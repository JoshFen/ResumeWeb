import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Contact() {

    type contactFormData = {
        name: string;
        email: string;
        message: string;
    }

    return (
        <div className="d-flex justify-content-center align-items-center contact-cont">
            <h2>Let's Connect!</h2>
            <Form className="contact-form">
                <Form.Group controlId="name">
                    <Form.Control className="m-3 form-text" type="text" placeholder="Enter your name"/>
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Control className="m-3 form-text" type="email" placeholder="Enter your email address"/>
                </Form.Group>

                <Form.Group controlId="message">
                    <Form.Control className="m-3 form-text" as="textarea" rows={6} placeholder="Enter your message"/>
                </Form.Group>
            
                <Button variant="primary" type="submit">Send Message</Button>
            </Form>
        </div>
    )

}
