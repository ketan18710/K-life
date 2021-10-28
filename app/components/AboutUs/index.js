import React from 'react';
import './style.scss';
import OHC from './OHC.png';
function AboutUS(props) {
  return (
    <div className="AboutUs">
      <div className="banner">
        <div className="content">
          <h2>Who</h2>
          <h2>Are We</h2>
          {/* <h4>Stay up-to-date with the latest software upgrades and marketing materials.</h4> */}
        </div>
      </div>
      <div className="header">
        <h2>Advanced Healthcare Made Personal</h2>
        {/* <p>Click the item below if you want to know more</p> */}
      </div>
      <div className="text">
        <p>
          We are proud to introduce, K- Life, the medical arm of Kannu Impex
          (India) Pvt. Ltd. K- Life holds a wide selection of diagnostic as well
          as home healthcare products. Our products are innovative and accurate.
          The product helps an individual to easily detect, monitor and manage
          their medical condition. Our strong pledge allows people to improve
          and manage their health and personal well-being. We provide you the
          products of topmost quality. Today we give the products & services
          that are cost effective and of utmost quality for better tomorrow. K-
          Life is a brand of healthcare products, which aims to offer its
          customers superior health services with the wide range of innovative
          and accurate health monitoring solutions.
          <br />
          <br />
          <strong>Our Vision&nbsp;</strong>
          <br />
          To be India's most trusted brand with ethical and exceptional service
          in the health sector.
          <br />
          <br />
          <strong>Our Mission&nbsp;</strong>
          <br />
          To offer the simple and useful health and well-being products to
          clients.
        </p>
      </div>
      <div className="header headerGrey">
        <h2>Our Partner</h2>
        <p>South Korea’s Leading Heathcare Brand</p>
      </div>
      <div className="partners">
        <img src={OHC} alt="" />
        <div className="info">
          <p>About Osang Healthcare (OHC)</p>
          <p>
            OSANG Healthcare, having developed biosensors for blood diagnostics
            since its establishment in 1996, is now exporting state-of-the-art
            biosensors for monitoring blood glucose, and measuring HbA1c and
            cholesterol, to about 100 countries around the world.
          </p>
          <p>
            Our goal is not only to be a leader in bio diagnostic distribution,
            through developing sensors for diagnosis of heart disease and
            cancers, and for remote diagnostics systems, but also to excel in
            maintaining human health more directly through healthcare services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
