import React from 'react'
import Icon from '../Icon/index'
import './style.scss'
import MailIcon from '../../images/icons/mail.svg'
import MakeInIndia from './MakeInIndia.png'
import Logo from '../../images/logo.png'
import {Facebook, WhatsApp, Twitter,  Language} from '@material-ui/icons';
import {Grid} from '@material-ui/core'
function Footer() {
  return (
      <Grid className="Footer" container alignItems="center" justify="center">
        <Grid item md={1} sm={12}  container alignItems="center" justify="center"><img className="logo" src={Logo} alt="" /></Grid>
        <Grid item md={1} sm={3} container alignItems="center" justify="flex-end">
          <span className="country"><Language fontSize="default"/>   India</span>
        </Grid>
        <Grid item md={3} sm={5} container alignItems="center" justify="flex-start">
          <span className="copyright">© 2021 Kannu Impex India Private Limited</span>
        </Grid>
        <Grid item md={1} sm={4} container alignItems="center" justify="flex-end">
          <span className="privacy">Privacy Policy</span>
        </Grid>
        <Grid item md={2} sm={5} container alignItems="center" justify="flex-start">
          <span className="tNc">Terms and Conditions</span>
        </Grid>
        <Grid item md={2} sm={12} container alignItems="center" justify="center">
          <span className="social"><Facebook fontSize="default"/> <WhatsApp fontSize="default"/> <Twitter fontSize="default"/>  </span>
        </Grid>
        <Grid item md={1} sm={12}  container alignItems="center" justify="center"><img className="logo" src={MakeInIndia} alt="" /></Grid>
      </Grid>
  )
}

export default Footer
