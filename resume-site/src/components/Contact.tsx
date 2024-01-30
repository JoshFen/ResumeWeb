import { faFacebookMessenger, faGoogle, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form } from "react-bootstrap";
import ContactInfoBox from "./ContactInfoBox";
import ContactForm from "./ContactForm";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css"

export default function Contact() {

    type contactFormData = {
        name: string;
        email: string;
        message: string;
    }

    useEffect(() => {
        AOS.init({duration: 3000})
    }, []);
    

    const emailAddress: String = 'joshua.c.fentress@gmail.com';

    return (
        <section style={{ backgroundColor: 'var(--background2)'}}>
            <div id="contact-me" className="d-flex flex-column justify-content-center contact-cont cont" data-aos="fade-up">
                <h1 className="header-text">Contact Me</h1>
                <div className="mb-5 d-flex justify-content-center">
                    <ContactInfoBox icon={faGoogle} title="Gmail" text="joshua.c.fentress" link={`mailto:${emailAddress}`} linkText="Send An Email"/>
                    <ContactInfoBox icon={faWhatsapp} title="WhatsApp" text="+1 (267) 980-9281" link="https://wa.me/12679809281" linkText="Send A Message"/>
                    <ContactInfoBox icon={faFacebookMessenger} title="Messenger" text="JoshFen97" link="https://m.me/JoshFen97" linkText="Send A Message"/>
                </div>

                <div className="mt-5">
                    <h2 className="mb-0 fs-4">Get in touch</h2>
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}
