import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import pic4 from '../../images/svg-4.svg'
import { useTranslation } from 'react-i18next';

function ContactForm() {
  const [state, handleSubmit] = useForm("xleavqba");
  
  if (state.succeeded) {
    window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
          form.reset();
        }
      }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
      <section id='contact'>
          <div className="contact-container">
              <div className="contact-header">
                  <div className="contact-title">
                      <h1>{t('Contact')}</h1>
                      <h3>{t('GetTouch')}</h3>
                  </div>
              </div>
              <div className="contact-box">
                  <div className="contact-item">
                      <div>
                          <FaEnvelope style={{color: '#01bf71'}}/>
                          <span> Gmail</span>
                          <p className="contact-info">hummingbirdlawnservices@yahoo.com</p>
                      </div>
                  </div>
                  <div className="contact-item">
                      <div>
                          <FaMapMarkerAlt style={{color: '#01bf71'}}/>
                          <span> {t("Location")}</span>
                          <p className="contact-info">Tampa, Florida</p>
                      </div>
                  </div>
                  <div className="contact-item">
                      <div>
                          <FaPhone style={{color: '#01bf71'}}/>
                          <span> {t('Phone')}</span>
                          <p className="contact-info">(813) 562-5766</p>
                      </div>
                  </div>
                  {/* End of Contact Item */}
              </div>
              <div className="psa"><h4>{t('LeaveEmail')}</h4></div>
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
                                      {t('MessageSent')}
                                  </button> : <button type="submit">
                                      {t('SendMessage')}
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