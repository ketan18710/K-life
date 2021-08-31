/**
 *
 * Home
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './style.scss'
import {Grid,Hidden} from '@material-ui/core'
import Slider from "react-slick";
import {KeyboardArrowLeft as ArrowLeft, KeyboardArrowRight as ArrowRight} from '@material-ui/icons'
import Bulb from './icons/bulb.png'
import Ethics from './icons/ethics.png'
import Prudent from './icons/prudent.png'
import Quality from './icons/quality.png'
import Service from './icons/service.png'
import Marquee1 from './marquee/marquee1.png'
import Marquee2 from './marquee/marquee2.png'
import Marquee3 from './marquee/marquee3.png'
import Marquee4 from './marquee/marquee4.png'
import PregnancyCard from './latest/pregnancy.png'
import OxygenConcentrator from './latest/OC.png'
import BPM from './latest/bpm.png'
import TensTherapy from './latest/tensTherapy.png'
const Home=(props)=>{
  const {KLifeInfo : kLife,margueeProducts,latest :products,carrousel } = props
  console.table(props)
  console.log(props)
  const [firstProdIndex, setFirstProdIndex] = useState(0)
  const index1 = firstProdIndex
  const index2 = products && products.length && ((firstProdIndex + 1 )% products.length)
  const index3 = products && products.length && ((firstProdIndex + 2 )% products.length)
  const changeFirstProdIndex = (index) => {
    setFirstProdIndex(index)
  }
  const goToNext = () => {
    setLatestProductCardsOpacity(false)
    setFirstProdIndex((firstProdIndex + 1 )% products.length)
  }
  const goToPrevious = () => {
    setLatestProductCardsOpacity(false)
    const newIndex = firstProdIndex -1
    setFirstProdIndex(newIndex <0 ? (newIndex + products.length ): newIndex)
  }
  var min_horizontal_move = 30;
  var max_vertical_move = 30;
  var within_ms = 1000;

  var start_xPos;
  var start_yPos;
  var start_time;
  function touch_start(event) {
      start_xPos = event.touches[0].pageX;
      start_yPos = event.touches[0].pageY;
      start_time = new Date();
  }


  function touch_end(event) {
      var end_xPos = event.changedTouches[0].pageX;
      var end_yPos = event.changedTouches[0].pageY;
      var end_time = new Date();
      let move_x = end_xPos - start_xPos;
      let move_y = end_yPos - start_yPos;
      let elapsed_time = end_time - start_time;
      if (Math.abs(move_x) > min_horizontal_move && Math.abs(move_y) < max_vertical_move && elapsed_time < within_ms) {
          if (move_x < 0) {
              // alert("left");
              goToNext()
          } else {
              // alert("right");
              goToPrevious()
          }
      }
  }
  useEffect(() => {
    let x = document.getElementById("latestProductsFirst")
    if(x){
      let innerHTML = x.innerHTML 
      var content = document.getElementById("latestProductsFirst");
      content.addEventListener('touchstart', touch_start);
      content.addEventListener('touchend', touch_end);
    }
  }, [document.getElementById("latestProductsFirst") && document.getElementById("latestProductsFirst").innerHTML])
  const CarouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    lazyLoad: true,
    prevArrow :  <ArrowLeft className="arrow" fontSize="large"/>,
    nextArrow : <ArrowRight className="arrow" fontSize="large"/>,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  const setLatestProductCardsOpacity = (opacity) => {
    const latestProducts = document.querySelector('.latestProducts')
    if(latestProducts){
      const cards = latestProducts.querySelectorAll('.product');
      [].forEach.call(cards, a => {
        if(opacity){
          setTimeout(() => {
            a.style.opacity = 1;
          }, 200);
        }else{
          a.style.opacity = 0.1;
        }
      });
    }
  }
  useEffect(() => {
    setLatestProductCardsOpacity(true)
  }, [firstProdIndex])

  return (
    <div className="homePage">
      <div className="heroSection">
        <div className="content">
          <p>Innovative.</p>
          <p>Modern</p>
          <p>Personal.</p>
        </div>
      </div>
      <div className="whyKLife">
        <h2>Why K-Life?</h2>
        <p>Advanced Technology Made Personal</p>
        <div className="content">
          <Grid container alignItems="center" justify="center" className="reasons"  >
            <Grid className="reason" item md={2} xs={4} alignItems="center">
              <img src={Bulb} alt="icon" />
              <p>INNOVATIVE</p>
              <div className="line"></div>
            </Grid>
            <Grid className="reason" item md={2} xs={4} alignItems="center">
              <img src={Quality} alt="icon" />
              <p>QUALITY</p>
              <div className="line"></div>
            </Grid>
            <Grid className="reason" item md={2} xs={4} alignItems="center">
              <img src={Service} alt="icon" />
              <p>SERVICE</p>
              <div className="line"></div>
            </Grid>
            <Grid className="reason" item md={2} xs={4} alignItems="center">
              <img src={Ethics} alt="icon" />
              <p>ETHICS</p>
              <div className="line"></div>
            </Grid>
            <Grid className="reason" item md={2} xs={4} alignItems="center">
              <img src={Prudent} alt="icon" />
              <p>PRUDENT</p>
              <div className="line"></div>
            </Grid>
          </Grid>
        </div>
        <p className="description">
          At K-Life, we are focused on ensuring quality healthcare being provided to everyone. 
          Ever since the brand has existed, we have served people in every corner of the country 
          offering the latest in healthcare even in remote parts of the country. We have worked hard,
          to put our knowledge and expertise to use and provide high quality, technologically advanced 
          products to ensure people get to monitor, control and improve their well-being.
        </p>
      </div>
      <div className="marquee">
        <h2>Marquee Products</h2>
        <p>Our Best Selling Categories</p>
        <div className="carrousel">
            <Slider {...CarouselSettings}>
              <div  className="card" >
                <img src={Marquee1} alt="" />
                <div className="content">
                  <h3>Digital Blood Glucose Meters</h3>
                  <p>{`See Full Range   >`}</p>
                </div>
              </div>
              <div  className="card" style={{backgroundImage : `url(${Marquee2})`}}>
                <img src={Marquee2} alt="" />
                <div className="content">
                  <h3>Oxygen Concentrators</h3>
                  <p>{`See Full Range   >`}</p>
                </div>
              </div>
              <div  className="card" style={{backgroundImage : `url(${Marquee3})`}}>
                <img src={Marquee3} alt="" />
                <div className="content">
                  <h3>HbA1c   Analyser</h3>
                  <p>{`See Full Range   >`}</p>
                </div>
              </div>
              <div  className="card" style={{backgroundImage : `url(${Marquee4})`}}>
                <img src={Marquee4} alt="" />
                <div className="content">
                  <h3>Multi-Parameter Patient Monitors</h3>
                  <p>{`See Full Range   >`}</p>
                </div>
              </div>
              <div  className="card" style={{backgroundImage : `url(${Marquee4})`}}>
                <img src={Marquee4} alt="" />
                <div className="content">
                  <h3>Multi-Parameter Patient Monitors</h3>
                  <p>{`See Full Range   >`}</p>
                </div>
              </div>
            </Slider>
        </div>
      </div>
      <div className="latestProducts">
        <div className="header">
          <h2>What's New</h2>
          <p>Our Most Latest Offerings</p>
        </div>
        <div className="products">
          <Hidden mdUp>
            <Slider {...CarouselSettings}>
              <div className="card">
                <div className="image">
                    <img src={PregnancyCard} alt="" />
                </div>
                <h4>Pregnancy Cards</h4>
                <div className="content">
                  <p>Pregacheck</p>
                  <ArrowRight className="arrow" fontSize="large"/>
                </div>
              </div>
              <div className="card">
                <div className="image">
                    <img src={PregnancyCard} alt="" />
                </div>
                <h4>Pregnancy Cards</h4>
                <div className="content">
                  <p>Pregacheck</p>
                  <ArrowRight className="arrow" fontSize="large"/>
                </div>
              </div>
              <div className="card">
                <div className="image">
                    <img src={PregnancyCard} alt="" />
                </div>
                <h4>Pregnancy Cards</h4>
                <div className="content">
                  <p>Pregacheck</p>
                  <ArrowRight className="arrow" fontSize="large"/>
                </div>
              </div>
              <div className="card">
                <div className="image">
                    <img src={PregnancyCard} alt="" />
                </div>
                <h4>Pregnancy Cards</h4>
                <div className="content">
                  <p>Pregacheck</p>
                  <ArrowRight className="arrow" fontSize="large"/>
                </div>
              </div>
              <div className="card">
                <div className="image">
                    <img src={PregnancyCard} alt="" />
                </div>
                <h4>Pregnancy Cards</h4>
                <div className="content">
                  <p>Pregacheck</p>
                  <ArrowRight className="arrow" fontSize="large"/>
                </div>
              </div>
            </Slider>
          </Hidden>
          <Hidden smDown>
            <Grid container alignItems="center" justify="center" className="productsGrid">
              <Grid xs={2} item className="card">
                <div className="image">
                  <img src={PregnancyCard} alt="" />
                </div>
                <h4>Pregnancy Cards</h4>
                <div className="content">
                  <p>Pregacheck</p>
                  <ArrowRight className="arrow" fontSize="large"/>
                </div>
              </Grid>
              <Grid xs={2} item className="card">
                <div className="image">
                  <img src={TensTherapy} alt="" />
                </div>
                <h4>Tens Therapy</h4>
                <div className="content">
                  <p>Tens Device</p>
                  <ArrowRight className="arrow" fontSize="large"/>
                </div>
              </Grid>
              <Grid xs={2} item className="card">
                <div className="image">
                  <img src={BPM} alt="" />
                </div>
                <h4>Digital Blood Pressure Monitors</h4>
                <div className="content">
                  <p>BPM 107</p>
                  <ArrowRight className="arrow" fontSize="large"/>
                </div>
              </Grid>
              <Grid xs={2} item className="card">
                <div className="image">
                  <img src={OxygenConcentrator} alt="" />
                </div>
                <h4>Oxygen Concentrators</h4>
                <div className="content">
                  <p>OC 502</p>
                  <ArrowRight className="arrow" fontSize="large"/>
                </div>
              </Grid>
            </Grid>
          </Hidden>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
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

export default compose(
  withConnect,
  memo,
)(Home);
