import React, { Component } from "react";
import "./Contact.scss";

class Contact extends Component {
    state = { 
        name: null,
        email: null,
        ph: null,
        desc: null
     }

     handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }    

    mail = (e)=> {
        e.preventDefault();
        
        const url = 'http://jeevansubramaniphotography.com/api/mail.php';
        const data = this.state;
        const options = {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
            };

        fetch(url, options)
        .then(res => res.json())
        .then(response => {
            if(response === 1) alert('success')
            else alert('failed')
        })
        .catch(error => alert('error'));

    }

    render() { 
        return ( 
            <section className="Contact">
            <form onSubmit={(e)=>this.mail(e)} type="POST">
            <h1>CONTACT</h1>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name.." onChange={(e)=>this.handleInputChange(e)} />
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Your email.." onChange={(e)=>this.handleInputChange(e)} />
            <label for="ph">Phone Number</label>
            <input type="text" id="ph" name="ph" placeholder="Your phone number.." onChange={(e)=>this.handleInputChange(e)} />
            <label for="desc">Message</label>
            <textarea id="desc" name="desc" placeholder="Your message.." onChange={(e)=>this.handleInputChange(e)}></textarea>
            <button>Submit</button>
            </form>
        </section>
         );
    }
}
 
export default Contact;

