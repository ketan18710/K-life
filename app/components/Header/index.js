import React,{useState,useEffect} from 'react'
import './style.scss'
import Logo from '../../images/logo.png'   
import CloseIcon from '../../images/icons/close.svg'
import DropDownIcon from './dropdownIcon.svg'
import {redirectToUrl} from 'utils/common'
import {APP_ROUTES} from 'utils/constants'
import { useParams } from 'react-router-dom';
import Flag from './flag.png'
function Header(props) {
  const [contactModal, setContactModal] = useState(false)
  const {categories} = props
  const {category_slug,sub_category_slug,model_id} = useParams();
  const pathname = window.location.pathname
  let bigProductDropDown = ''
  var header = ''
  var mainBody = ''
  useEffect(() => { 
    window.addEventListener('scroll', checkScroll);
  }, [])
  useEffect(() => {
    const closeicon = document.getElementsByClassName('closeIcon');
    [].forEach.call(closeicon, a => {
      a.click()
    });
    if(document.querySelector('.bigHeader') ){
      var x =  document.querySelector('.bigHeader').style
      document.getElementById('homeMenuItem').focus()
    }
  }, [window.location.pathname,contactModal])
  // useEffect(() => {
  //   const body = document.body
  //   if(contactModal){
  //     body.style.overflowY = 'hidden'
  //   }else{
  //     body.style.overflowY = 'auto'
  //   }
  // }, [contactModal])
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

const toggleHeader = function(direction, curScroll) {
  header = document.getElementById('headerBig');
  mainBody = document.getElementById('mainBody');
  const dropdownContent =  header && header.querySelector('.dropdownContent')
  const dropdownContentNotVisible = dropdownContent && dropdownContent.style.display === 'none' ? true : false
  if(dropdownContentNotVisible){
    if (direction === 2 && curScroll > 52) { 
      
      //replace 52 with the height of your header in px
  
      // header.classList.add('hidden_header');
      // mainBody.classList.add('noHeader');
      // prevDirection = direction;
    }
    else if (direction === 1) {
      // header.classList.remove('hidden_header');
      // mainBody.classList.remove('noHeader');
      // prevDirection = direction;
    }
  }
};

  const showHideBigDropDown = (show) => {
    bigProductDropDown = document.getElementById('bigProductDropDown')
    if(show){
      bigProductDropDown.style.display = 'block'
    }else{
      bigProductDropDown.style.display = 'none'
    }
  }
  useEffect(() => {
    // showHideBigDropDown(false)
  }, [pathname])
  
  const openHeader = (open = true) => {
    // debugger
    const headerOuterVar = document.getElementById('headerBig')
    const dropdownContent = headerOuterVar && headerOuterVar.querySelector('.dropdownContent')
    if(dropdownContent){
      if(open){
        dropdownContent.style.display = 'flex';
      }else{
        dropdownContent.style.display = 'none';
      }
    }
  }
  const mainBodyObserverCallback = () => {
    const dropdownContent =  header && header.querySelector('.dropdownContent')
    const dropdownContentVisible = dropdownContent && dropdownContent.style.display !== 'none' ? true : false
    if(dropdownContentVisible){
      // document.body.style.overflowY = 'hidden'
    }else{
      // document.body.style.overflowY = 'auto'
    }
  }
  useEffect(() => {
    const targetNode = header && header.querySelector('.dropdownContent')
    if(targetNode){
      const observerConfig = { attributes:true, childList:true, subtree: true };
      const observer = new MutationObserver(mainBodyObserverCallback);
      observer.observe(targetNode, observerConfig);
    }
  }, [header && header.querySelector('.dropdownContent')])
  return (
    <>
    <div id="headerBig" className="KL__header">
      <div className="bigHeader">
        <div className="image">
        <img  onClick={()=>redirectToUrl(APP_ROUTES.HOME)} src={Logo} alt="K_life_logo"/>
        </div>
        <div className="KL__header_menu">
          <p className="menuItem" id="homeMenuItem" onClick={()=>redirectToUrl(APP_ROUTES.HOME)}>HOME</p>
          <p className="menuItem" onClick={()=>redirectToUrl(APP_ROUTES.PRODUCTS)}>PRODUCTS</p>
          <p className="menuItem" onClick={()=>redirectToUrl(APP_ROUTES.DOWNLOADS)}>DOWNLOADS</p>
          <p className="menuItem" onClick={()=>redirectToUrl(APP_ROUTES.ABOUT_US)}>ABOUT US</p>
          <p className="menuItem" onClick={()=>redirectToUrl(APP_ROUTES.CONTACT_US)}>CONTACT US</p>
          <p className="menuItem flag" ><img src={Flag} alt="indianFlag"/></p>
        </div>
      </div>
      <div className="smallHeader">
      `<div  onClick={()=>redirectToUrl(APP_ROUTES.HOME)} className="image">
          <img  onClick={()=>redirectToUrl(APP_ROUTES.HOME)}  src={Logo} alt="K_life_logo"/>
        </div>
        <div className="dropdown">
          <label htmlFor="header dropdown menu" onClick={()=>openHeader(true)}><img src={DropDownIcon} alt="dropdown icon"/></label>
          <div className="dropdownContent">
            <div className="dropdownContentInnerWrapper">
              <div className="closeIcon" onClick={()=>openHeader(false)}><img src={CloseIcon} alt="Close dropdown"/></div>
              <p className="menuItem" onClick={()=>redirectToUrl(APP_ROUTES.HOME)}>HOME</p>
              <p className="menuItem" onClick={()=>redirectToUrl(APP_ROUTES.ABOUT_US)}>ABOUT US</p>
              <p className="menuItem" onClick={()=>redirectToUrl(APP_ROUTES.PRODUCTS)}>PRODUCTS</p>
              <p className="menuItem"  onClick={()=>redirectToUrl(APP_ROUTES.CONTACT_US)}>CONTACT US</p>
              <p className="menuItem" onClick={()=>redirectToUrl(APP_ROUTES.DOWNLOADS)}>DOWNLOADS</p>
              <p className="menuItem" onClick={()=>redirectToUrl(APP_ROUTES.PRODUCTS)}>
                PRODUCTS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
