import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';

const FormStytle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    padding: 1.2rem;
    font-size: 2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    border: none;
    outline: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 200px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;
export default function ContactForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_sse9ozr',
        'template_12o3pti',
        form.current,
        'cDMEdLp12C5xbAU0L'
      )
      .then(
        (result) => {
          toast.success('Message sent successfully!');
          setEmail('');
          setMessage('');
          setName('');
        },
        (error) => {
          toast.error('Message failed to send!');
        }
      );
  };

  return (
    <div>
      <FormStytle onSubmit={sendEmail} ref={form}>
        <div className="form-group">
          <label htmlFor="name">
            Your name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </FormStytle>
    </div>
  );
}
