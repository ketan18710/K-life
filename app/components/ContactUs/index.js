import React, { useState, useEffect } from 'react';
import './style.scss';
import { Grid, Select, TextField, Button } from '@material-ui/core';
import { toast } from 'react-toastify';
import ValidationHelpers from '../../utils/Validation.Helper';
import { API_CONSTANTS } from '../../utils/constants';
import Loader from '../Loader';
function ContactUs(props) {
  const { inquiryRes, setInquiry } = props;
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
  });
  const [errorConfig, setErrorConfig] = useState({
    name: null,
    email: null,
    phone: null,
    inquiry: null,
  });
  const [contactLoader, setContactLoader] = useState(false);
  const submitForm = () => {
    const errors = ValidationHelpers.handleContactUsValidation(contactForm);
    setErrorConfig(errors);
    if (!errors.name && !errors.email && !errors.phone && !errors.inquiry) {
      setInquiry(contactForm);
    }
  };
  useEffect(() => {
    if (inquiryRes.status === API_CONSTANTS.loading) {
      setContactLoader(true);
    } else if (inquiryRes.status === API_CONSTANTS.success) {
      setContactLoader(false);
      toast.success(inquiryRes.data);
    } else if (inquiryRes.status === API_CONSTANTS.error) {
      setContactLoader(false);
      toast.error(inquiryRes.data);
    }
  }, [inquiryRes.status]);

  const PrintError = ({ text }) =>
    text ? <p className="errorText">{text}</p> : null;
  return (
    <div className="contactUs">
      <div className="banner">
        <div className="content">
          <h2>Reach Out</h2>
          <h2>To Us</h2>
        </div>
      </div>
      <div className="header">
        <h2>We are always there for you</h2>
        <p>
          Thanks for your interest in K-Life care, feel free to contact us for
          any inquiries.
        </p>
      </div>
      <Grid
        container
        className="innerWrapper"
        justify="center"
        alignItems="center"
      >
        <Grid
          container
          className="form"
          item
          md={5}
          sm={8}
          justify="space-between"
          alignItems="center"
        >
          <h4>Send us a message</h4>
          <>
            <TextField
              value={contactForm.name}
              onChange={e =>
                setContactForm({ ...contactForm, name: e.target.value })
              }
              className="input"
              variant="filled"
              placeholder="Name"
            />
            <PrintError text={errorConfig.name ? errorConfig.name : null} />
          </>
          <TextField
            value={contactForm.email}
            onChange={e =>
              setContactForm({ ...contactForm, email: e.target.value })
            }
            className="input"
            variant="filled"
            placeholder="Email"
          />
          <PrintError text={errorConfig.email ? errorConfig.email : null} />
          <TextField
            value={contactForm.phone}
            onChange={e =>
              setContactForm({ ...contactForm, phone: e.target.value })
            }
            className="input"
            variant="filled"
            placeholder="Contact"
          />
          <PrintError text={errorConfig.phone ? errorConfig.phone : null} />
          <TextField
            value={contactForm.inquiry}
            onChange={e =>
              setContactForm({ ...contactForm, inquiry: e.target.value })
            }
            multiline
            className="input"
            rows={4}
            placeholder="Write  your message.."
            variant="filled"
          />
          <PrintError text={errorConfig.inquiry ? errorConfig.inquiry : null} />
          <Button
            className="submitButton"
            variant="contained"
            onClick={() => submitForm()}
            disabled={contactLoader}
            color="primary"
          >
            {contactLoader ? <Loader btnLoader /> : 'Send Inquiry'}
          </Button>
        </Grid>
        <Grid
          container
          className="location"
          item
          md={5}
          sm={8}
          justify="space-between"
          alignItems="center"
        >
          <h4>Locate Us</h4>
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="300"
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0561707574916!2d77.06881401504828!3d28.50795769645901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19f0c206badf%3A0x4e83f580739d324!2sK-Life!5e0!3m2!1sen!2sin!4v1634808347090!5m2!1sen!2sin"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />

            <a href="https://embedgooglemap.net/maps/100" />
            <br />
            <a href="https://www.embedgooglemap.net" />
          </div>
          <div className="address">
            <h4>Corporate Offce</h4>
            <p>KANNU IMPEX (INDIA) PVT. LTD.</p>
            <p>Suite 412, Suncity Trade Tower</p>
            <p>Gurgaon, Haryana 122015</p>
            <p>India</p>
            <div className="contact">
              <p>Email:</p>
              <p>
                <a href="mailto:info@klifecare.com">info@klifecare.com</a>
              </p>
              <p>Call Us:</p>
              <p>
                <a href="tel:+91-9310-113-243">+91-9310-113-243</a>
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactUs;
