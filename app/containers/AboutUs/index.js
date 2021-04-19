/**
 *
 * AboutUs
 *
 */

import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Logo from '../../images/logo.png'
import './style.scss'
function AboutUs(props) {
  console.log(props,'aboutUs')
  const {aboutUS} = props
  const {description} = aboutUS && aboutUS
  useEffect(() => { 
    // const AboutUS = document.getElementsByClassName('AboutUS');
    // [].forEach.call(AboutUS, a => {
    //   a.style.opacity = 0;
    // });
    // setTimeout(() => {
    //   [].forEach.call(AboutUS, a => {
    //     a.style.opacity = 1;
    //   });
    // }, 550);
   }, [])
  return (
      <div className="AboutUS">
        <h1 className="header">About Us</h1>
        <div className="description">
          <div className="logo">
            <img src={Logo} alt="K-life logo"/>
          </div>
          <h3 className="tagline">Innovative. Modern. Personal.</h3>
          <div className="content"  dangerouslySetInnerHTML={{ __html: description}}></div>
        </div>
      </div>
  )
}

AboutUs.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(AboutUs);
