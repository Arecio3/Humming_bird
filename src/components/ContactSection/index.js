import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm({ lightBg, id, imgStart, primary, lightText, darkText, buttonLabel, img, alt, topLine, headLine, description, dark, dark2 }) {
  const [state, handleSubmit] = useForm("xleavqba");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
    <div lightBg={lightBg} id={id}>
      Hello
      <div imgStart={imgStart}>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
      </div>
    </div>
    </>
  );
}

export default ContactForm