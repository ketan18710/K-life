import React,{useState,useEffect} from 'react'
import { Dropdown, Image } from 'semantic-ui-react'
import './style.scss'
import Logo from '../../images/logo.png'   
import {redirectToUrl} from 'utils/common'
import {APP_ROUTES} from 'utils/constants'

// var lastScrollTop = 0;
// document.addEventListener('scroll',(e)=>{
//   // debugger  
//   var st = window.pageYOffset || document.documentElement.scrollTop;
//   const header = document.getElementById('headerBig')
//   if (st > lastScrollTop){
//       header.classList.add('hidden_header')
//     } else {
//       // upscroll code
//       // header.display = 'block'
//       header.classList.remove('hidden_header')
//    }
// })
function Header() {
  
  var header = ''
  var mainBody = ''
  useEffect(() => { 
    window.addEventListener('scroll', checkScroll);
    header = document.getElementById('headerBig');
    mainBody = document.getElementById('mainBody');
  }, [])
  
var doc = document.documentElement;
var w = window;

var prevScroll = w.scrollY || doc.scrollTop;
var curScroll;
var direction = 0;
var prevDirection = 0;

var checkScroll = function() {

  /*
  ** Find the direction of scroll
  ** 0 - initial, 1 - up, 2 - down
  */

  curScroll = w.scrollY || doc.scrollTop;
  if (curScroll > prevScroll) { 
    //scrolled up
    direction = 2;
  }
  else if (curScroll < prevScroll) { 
    //scrolled down
    direction = 1;
  }

  if (direction !== prevDirection) {
    toggleHeader(direction, curScroll);
  }
  
  prevScroll = curScroll;
};

var toggleHeader = function(direction, curScroll) {
  if (direction === 2 && curScroll > 52) { 
    
    //replace 52 with the height of your header in px

    header.classList.add('hidden_header');
    mainBody.classList.add('noHeader');
    prevDirection = direction;
  }
  else if (direction === 1) {
    header.classList.remove('hidden_header');
    mainBody.classList.remove('noHeader');
    prevDirection = direction;
  }
};

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
  return (
    <div id="headerBig" className="KL__header">
      <Image wrapped src={Logo}/>
      <div className="KL__header_menu">
        <p className="menuItem" onClick={()=>redirectToUrl(APP_ROUTES.HOME)}>HOME</p>
        <p className="menuItem" onClick={()=>redirectToUrl(APP_ROUTES.ABOUT_US)}>ABOUT US</p>
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
        <p className="menuItem">MEDIA PRESENCE</p>
        <p className="menuItem">CONTACT US</p>
      </div>
    </div>
  )
}

export default Header
