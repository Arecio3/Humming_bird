import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.css';
import pic4 from '../../images/svg-4.svg'

function ContactForm() {
  const [state, handleSubmit] = useForm("xleavqba");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <section id='contact'>
          <div className="contact-container">
              <div className="contact-header">
                  <div className="contact-title">
                      <h1>Contact</h1>
                      <h3>Get In Touch</h3>
                  </div>
              </div>
              <div className="contact-box">
                  <div className="contact-item">
                      <div>
                          <i className="fa fa-envelope"></i>
                          <span>Gmail</span>
                          <p>hummingbirdlawnservices@yahoo.com</p>
                      </div>
                  </div>
                  <div className="contact-item">
                      <div>
                          <i className="fa fa-map-marker-alt"></i>
                          <span>Located</span>
                          <p>Tampa, Florida</p>
                      </div>
                  </div>
                  {/* End of Contact Item */}
              </div>
              <div className="psa"><h4>Make sure to leave your Email!</h4></div>
              <div className="contact-box">
                  <div className="contact-form">
                      <form onSubmit={handleSubmit}>
                          <div className="contact-box">
                              <div className="w50">
                                  <div>

                                      <input
                                          placeholder="Email"
                                          id="email"
                                          type="email"
                                          name="email"
                                          className="input-control"
                                      />
                                  </div>
                                  <div >

                                      <input
                                          placeholder="Name"
                                          id="name"
                                          type="name"
                                          name="name"
                                          className="input-control"
                                      />
                                  </div>
                                  <div>
                                      <input
                                          placeholder="Subject"
                                          id="subject"
                                          type="subject"
                                          name="subject"
                                          className="input-control"
                                      />
                                  </div>
                              </div>
                              <ValidationError
                                  prefix="Email"
                                  field="email"
                                  errors={state.errors}
                              />
                              <div className="w50">
                                  <div>
                                      <textarea
                                          placeholder="Message"
                                          id="message"
                                          name="message"
                                          className="input-control"
                                          color="gold"
                                      />
                                  </div>
                              </div>
                          </div>
                          <ValidationError
                              prefix="Message"
                              field="message"
                              errors={state.errors}
                          />
                          <div className="contact-box">
                              <div className="submit-btn">
                                 {state.succeeded ? <button type="submit">
                                      Message Sent!
                                  </button> : <button type="submit" disabled={state.submitting}>
                                      Send Message
                                  </button>}
                              </div>
                          </div>
                      </form>
                      <img className="contact-img"src={pic4} alt='Contract'/>
                  </div>
              </div>
          </div>
      </section>


  );
}

export default ContactForm