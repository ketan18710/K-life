import React from 'react'
import './style.scss'
import {Grid, Select, TextField} from '@material-ui/core'
function ContactUs() {
  return (
    <div className="contactUs">
      <div className="banner">
        <div className="content">
          <h2>Let Us</h2>
          <h2>Help You</h2>
        </div>
      </div>
      <div className="header">
        <h2>We are always there for you</h2>
        <p>Thanks for your interest in K-Life care, feel free to contact us for any inquiries.</p>
      </div>
      <Grid container className="innerWrapper" justify="center" alignItems="center">
        <Grid container className="form" item md={5} sm={8} justify="space-between" alignItems="center">
          <h4>Send us a message</h4>
          <TextField className="input" variant="filled"  placeholder="Name"/>
          <TextField className="input" variant="filled"  placeholder="Email"/>
          <TextField className="input" variant="filled"  placeholder="Contact"/>
          <TextField
            multiline
            className="input"
            rows={4}
            placeholder="Write  your message.."
            variant="filled"
          />
        </Grid>
        <Grid container className="location" item md={5} sm={8} justify="space-between" alignItems="center">
          <h4>Locate Us</h4>
          <div className="gmap_canvas">
            <iframe 
              width="100%" 
              height="300" 
              id="gmap_canvas" 
              src="https://maps.google.com/maps?q=Suncity%20Trade%20Tower,%20412,%20Sector%2021,%20Gurugram,%20Haryana%20122016&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              frameborder="0" 
              scrolling="no" 
              marginheight="0" 
              marginwidth="0"
            ></iframe>
            <a href="https://embedgooglemap.net/maps/100"></a>
            <br />
            <a href="https://www.embedgooglemap.net"></a>
          </div>
          <div className="address">
            <h4>Corporate Offce</h4>
            <p>KANNU IMPEX (INDIA) PVT. LTD.</p>
            <p>Suit 412, Suncity Trade, Sector 21,</p>
            <p>Gurgaon, Haryana 122015</p>
            <p>India</p>
            <div className="contact">
              <p>Email:</p>
              <p><a href="mailto:info@klifecare.com">info@klifecare.com</a></p>
              <p>Call Us:</p>
              <p><a href="tel:+91-9310-113-243">+91-9310-113-243</a></p>
            </div>
          </div>
        </Grid>
      </Grid>

    </div>
  )
}

export default ContactUs
