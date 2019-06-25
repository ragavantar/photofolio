import React from "react";
import "./Contact.scss";

const Contact = () => {
    return (
        <section className="Contact">
            
            <form>
            <h1>CONTACT</h1>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name.." />
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Your email.." />
            <label for="ph">Phone Number</label>
            <input type="text" id="ph" name="ph" placeholder="Your phone number.." />
            <label for="msg">Message</label>
    <textarea id="msg" name="msg" placeholder="Your message.."></textarea>
            <button>Submit</button>
            </form>
        </section>
    );
}

export default Contact;
