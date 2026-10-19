import React from "react";
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../../public/animations/Done.json'
import emailAnimation from '../../../public/animations/News Letter.json'
const Contact = () => {
    const [state, handleSubmit] = useForm("mkoqkrpl");

    return (
        <section id="contact" className="contact-us">
            <h1 className="title">
                <span className="icon-envelope">
                    <i className="fa-solid fa-envelope"></i>
                    {" "}Contact Us
                </span>
            </h1>
            <p className="sub-title">
                Contact us for more information and get notified when I publish something new.
            </p>

            <div style={{justifyContent: "space-between"}} className="flex">
                <form onSubmit={handleSubmit} className="">
                    <div className="flex">
                        <label htmlFor="email">Email Address:</label>
                        <input autoComplete="off" required id="email" name="email" type="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>

                    <div className="flex" style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your message:</label>
                        <textarea required name="message" id="message"></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <button type="submit" disabled={state.submitting} className="submit">
                        {state.submitting ? "Sending..." : "Submit"}
                    </button>

                    {state.succeeded && (
                        <p className="success-msg" style={{ fontSize: "18px",display: "flex",alignItems: "center",justifyContent: "flex-start", marginTop: "2rem", color: "var(--title)" }}>
                            <Lottie loop={false} style={{ height: 60 }} animationData={doneAnimation} />
                            Your message has been sent successfully!
                        </p>
                    )}
                </form>

                <div className="animation">
                    <Lottie className="contact-animation" style={{ height: 300 }} animationData={emailAnimation} />
                </div>
            </div>
        </section>
    );
}

export default Contact;