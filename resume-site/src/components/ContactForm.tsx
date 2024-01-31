import React, { useRef, useState, FormEvent } from 'react';
import { Button, Form } from "react-bootstrap";

import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    //const uName =useRef("");

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current) {
            try {
                const result = await emailjs.sendForm('service_n6httg4', 'template_ah0w35j', formRef.current, 'wnu19HBENL-sguSeN');
                console.log(result.text);
                console.log("Message Success");
                
                setName("");
                setEmail("");
                setMessage("");
            } catch (e) {
                console.log(e);
            }
        }
    };
    return (
        <div className="d-flex justify-content-center align-items-center">
                    <Form className="contact-form" ref={formRef as React.RefObject<HTMLFormElement>} onSubmit={sendEmail}>
                        <Form.Group controlId="name" className="mt-3 form-item">
                            <Form.Control className="form-text" type="text" name="user_name" value={name} placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="email" className="mt-3 form-item">
                            <Form.Control className="form-text" type="email" name="user_email" value={email} placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="message" className="mt-3 form-item">
                            <Form.Control className="no-resize form-text" as="textarea" rows={6} value={message} name="message" placeholder="Enter Message" onChange={(e) => setMessage(e.target.value)}/>
                        </Form.Group>
                    
                        <Button variant="primary" type="submit" className="mt-3 send-msg-butt">Send Message</Button>
                    </Form>
        </div>
    )
}