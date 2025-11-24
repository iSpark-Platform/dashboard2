import React , { useState } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
    return (
        <p className="success-message" style={{color: '#1ab69d', marginTop: '20px', marginBottom: '0'}}>Thanks for your query. We will contact with you soon.</p>
    )
}

const ContactUsForm = () => {
    const [result, setResult] = useState( false );
    const [name, setName] = useState( '' );
    const [email, setEmail] = useState( '' );
    const [phone, setPhone] = useState( '' );
    const [message, setMessage] = useState( '' );

    const sendEmail = ( e ) => {
        const templateParams = {
            name: name,
            email: email,
            phone: phone,
            message: message,
        };
        e.preventDefault();
        emailjs
        .send(
            'service_bxh6md3', 
            'template_1g7v07n', 
            templateParams, 
            'user_8Lx0gfI1ktOoeEN8DTV10'
        )
        .then( ( result ) => {
            console.log( result.text );
            }, 
            ( error ) => {
                console.log( error.text );
            }
        );
        e.target.reset();
        setResult( true );
    };

    setTimeout(() => {
        setResult( false );
    }, 9000);
    
    return (
        <form className="rnt-contact-form rwt-dynamic-form" action="" onSubmit={ sendEmail }>
            <div className="row row--10">
                <div className="form-group col-12">
                    <input type="text" name="fullname" onChange={e => setName(e.target.value)} placeholder="Your name*" required />
                </div>
                <div className="form-group col-12">
                    <input type="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="Enter your email*" required />
                </div>
                <div className="form-group col-12">
                    <input type="tel" onChange={e => setPhone(e.target.value)} name="phone" placeholder="Phone number" />
                </div>
                <div className="form-group col-12">
                    <textarea name="message" onChange={e => setMessage(e.target.value)} cols="30" rows="4" placeholder="Your message"></textarea>
                </div>
                <div className="form-group col-12">
                    <button className="rn-btn edu-btn btn-medium submit-btn" name="submit" type="submit">Submit Message <i className="icon-4"></i></button>
                </div>
                { result ? <div className="form-group"><Result /></div>  : null }
            </div>
        </form>
  )
}

export default ContactUsForm;