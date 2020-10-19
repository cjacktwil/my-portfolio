import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            } 
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
}
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    console.log(formState);
    return (
        <section>
            <h1 data-testid="h1tag">CONTACT ME</h1>
            <div className={`form-group`}>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className={`form-info`}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} className={`form-control`} onBlur={handleChange} name="name" />
                </div>
                <div className={`form-info`}>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} className={`form-control`} name="email" onBlur={handleChange} />
                </div>
                <div className={`form-info`}>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} className={`form-control`} rows="5" onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className={`btn p-10`} data-testid="button">Submit</button>
            </form>
            </div>
            <p>Or contact me directly through <a className={`contact-method`} href="mailto:traceyjackson112@gmail.com">email</a> or <a className={`contact-method`} href="tel:6152942378">call 615-294-2378</a>.</p>
        </section>
    )
}

export default ContactForm;