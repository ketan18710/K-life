import React,{useState} from 'react'
import { Dropdown, Image } from 'semantic-ui-react'
import './style.scss'
import Logo from '../../images/logo.png'   
const obj = {
  'Diagnostics' : [
    {
      name : 'Lorem Ipsum',
      description : ''
    },
    {
      name : 'Lorem Ipsum',
      description : ''
    },
  ],
  'Medical Equipment' : [
    {
      name : 'Lorem Ipsum',
      description : ''
    },
    {
      name : 'Lorem Ipsum',
      description : ''
    },
    {
      name : 'Lorem Ipsum',
      description : ''
    },
    {
      name : 'Lorem Ipsum',
      description : ''
    },
  ],
  'HOME  HEALTH CARE' : [
    {
      name : 'Lorem Ipsum',
      description : ''
    },
    {
      name : 'Lorem Ipsum',
      description : ''
    },
    {
      name : 'Lorem Ipsum',
      description : ''
    },
    {
      name : 'Lorem Ipsum',
      description : ''
    },
  ],
}
// var lastScrollTop = 0;
// window.addEventListener('mousedown',(e)=>{
//   debugger  
//   var st = window.pageYOffset || document.documentElement.scrollTop;
//   if (st > lastScrollTop){
//       // downscroll code
//    } else {
//       // upscroll code
//    }
// })
function Header() {
  return (
    <div id="headerBig" className="KL__header">
      <Image wrapped src={Logo}/>
      <div className="KL__header_menu">
        <p className="menuItem">HOME</p>
        <p className="menuItem">ABOUT US</p>
        <Dropdown text="PRODUCTS" className="menuItem" simple>
            <Dropdown.Menu>
              <Dropdown.Item className="products">
                  {/* <div className="productCategory">
                    <h3 className="header">PREVENTION</h3>
                    <p className="productItem">ACTIVITY MONITOR</p>
                    <p className="productItem">ACTIVITY MONITOR</p>
                    <p className="productItem">ACTIVITY MONITOR</p>
                  </div> */}
                  {
                    Object.keys(obj).map(key=>(
                      <div className="productCategory">
                        <h3 className="header">{(key.toUpperCase())}</h3>
                        {
                          obj[key].map(item=>(
                            <p className="productItem">{item.name}</p>
                          ))
                        }
                      </div>
                    ))
                  }
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
