import React,{useState} from 'react'
import { Dropdown, Image } from 'semantic-ui-react'
import './style.scss'
import Logo from '../../images/logo.png'   
function Header() {
  return (
    <div className="KL__header">
      <Image wrapped src={Logo}/>
      <div className="KL__header_menu">
        <p className="menuItem">HOME</p>
        <p className="menuItem">ABOUT US</p>
        <Dropdown text="PRODUCTS" className="menuItem" simple>
            <Dropdown.Menu>
              <Dropdown.Item className="products">
                  <div className="productCategory">
                    <h3 className="header">PREVENTION</h3>
                    <p className="productItem">ACTIVITY MONITOR</p>
                    <p className="productItem">ACTIVITY MONITOR</p>
                    <p className="productItem">ACTIVITY MONITOR</p>
                  </div>
                  <div className="productCategory">
                    <h3 className="header">PREVENTION</h3>
                    <p className="productItem">ACTIVITY MONITOR</p>
                    <p className="productItem">ACTIVITY MONITOR</p>
                    <p className="productItem">ACTIVITY MONITOR</p>
                  </div>
                  <div className="productCategory">
                    <h3 className="header">PREVENTION</h3>
                    <p className="productItem">ACTIVITY MONITOR</p>
                    <p className="productItem">ACTIVITY MONITOR</p>
                    <p className="productItem">ACTIVITY MONITOR</p>
                  </div>
                  <div className="productCategory">
                    <h3 className="header">PREVENTION</h3>
                    <p className="productItem">ACTIVITY MONITOR</p>
                    <p className="productItem">ACTIVITY MONITOR</p>
                    <p className="productItem">ACTIVITY MONITOR</p>
                  </div>
              </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <p className="menuItem">HEALTH INFORMATION</p>
        <p className="menuItem">STORE</p>
      </div>
    </div>
  )
}

export default Header
