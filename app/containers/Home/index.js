/**
 *
 * Home
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './style.scss';
import { Grid, Hidden } from '@material-ui/core';
import Slider from 'react-slick';
import {
  KeyboardArrowLeft as ArrowLeft,
  KeyboardArrowRight as ArrowRight,
} from '@material-ui/icons';
import Bulb from './icons/bulb.png';
import Ethics from './icons/ethics.png';
import Prudent from './icons/prudent.png';
import Quality from './icons/quality.png';
import Service from './icons/service.png';
import Marquee1 from './marquee/marquee1.png';
import Marquee2 from './marquee/marquee2.png';
import Marquee3 from './marquee/marquee3.png';
import Marquee4 from './marquee/marquee4.png';
import PregnancyCard from './latest/pregnancy.png';
import OxygenConcentrator from './latest/OC.png';
import BPM from './latest/bpm.png';
import TensTherapy from './latest/tensTherapy.png';
import { redirectToUrl } from '../../utils/common';
import { APP_ROUTES } from '../../utils/constants';
const Home = props => {
  const {
    KLifeInfo: kLife,
    margueeProducts,
    latest,
    carrousel,
    marqueeCat,
  } = props;
  console.log(latest);
  let min_horizontal_move = 30;
  let max_vertical_move = 30;
  let within_ms = 1000;

  let start_xPos;
  let start_yPos;
  let start_time;
  function touch_start(event) {
    start_xPos = event.touches[0].pageX;
    start_yPos = event.touches[0].pageY;
    start_time = new Date();
  }

  const CarouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    lazyLoad: true,
    prevArrow: <ArrowLeft className="arrow" fontSize="large" />,
    nextArrow: <ArrowRight className="arrow" fontSize="large" />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const setLatestProductCardsOpacity = opacity => {
    const latestProducts = document.querySelector('.latestProducts');
    if (latestProducts) {
      const cards = latestProducts.querySelectorAll('.product');
      [].forEach.call(cards, a => {
        if (opacity) {
          setTimeout(() => {
            a.style.opacity = 1;
          }, 200);
        } else {
          a.style.opacity = 0.1;
        }
      });
    }
  };

  return (
    <div className="homePage">
      <div className="heroSection">
        <div className="content">
          <p>Innovative.</p>
          <p>Modern.</p>
          <p>Personal.</p>
        </div>
      </div>
      <div className="whyKLife">
        <h2>Why K-Life?</h2>
        <p>Advanced Technology Made Personal</p>
        <div className="content">
          <Grid
            container
            alignItems="center"
            justify="center"
            className="reasons"
          >
            <Grid className="reason" item md={2} xs={4} alignItems="center">
              <img src={Bulb} alt="icon" />
              <p>INNOVATIVE</p>
              <div className="line" />
            </Grid>
            <Grid className="reason" item md={2} xs={4} alignItems="center">
              <img src={Quality} alt="icon" />
              <p>QUALITY</p>
              <div className="line" />
            </Grid>
            <Grid className="reason" item md={2} xs={4} alignItems="center">
              <img src={Service} alt="icon" />
              <p>SERVICE</p>
              <div className="line" />
            </Grid>
            <Grid className="reason" item md={2} xs={4} alignItems="center">
              <img src={Ethics} alt="icon" />
              <p>ETHICS</p>
              <div className="line" />
            </Grid>
            <Grid className="reason" item md={2} xs={4} alignItems="center">
              <img src={Prudent} alt="icon" />
              <p>PRUDENT</p>
              <div className="line" />
            </Grid>
          </Grid>
        </div>
        <p className="description">
          At K-Life, we are focused on ensuring quality healthcare being
          provided to everyone. Ever since the brand has existed, we have served
          people in every corner of the country offering the latest in
          healthcare even in remote parts of the country. We have worked hard,
          to put our knowledge and expertise to use and provide high quality,
          technologically advanced products to ensure people get to monitor,
          control and improve their well-being.
        </p>
      </div>
      <div className="marquee">
        <h2>Marquee Categories</h2>
        <p>Our Best Selling Categories</p>
        <div className="carrousel">
          <Slider {...CarouselSettings}>
            {
              marqueeCat && marqueeCat.length && marqueeCat.map(category=>(
                <div  className="card" >
                  <img src={category.image} alt="" />
                  <div className="content">
                    <h3>{category.title}</h3>
                    <p onClick={()=>redirectToUrl(APP_ROUTES.PRODUCT_CATEGORY_OPEN(category.category_slug))}>{`See Full Range   >`}</p>
                  </div>
                </div>
              ))
            }
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
              {latest &&
                latest.length &&
                latest.map(prod => (
                  <div className="card">
                    <div className="image">
                      <img src={prod.image} alt="" />
                    </div>
                    <h4>Pregnancy Cards</h4>
                    <div className="content">
                      <p>{prod.title}</p>
                      <ArrowRight
                        onClick={() =>
                          redirectToUrl(
                            `${APP_ROUTES.PRODUCT_CATEGORY_ALIAS}/${
                              prod.category_slug
                            }/${prod.model_id}`,
                          )
                        }
                        className="arrow"
                        fontSize="large"
                      />
                    </div>
                  </div>
                ))}
            </Slider>
          </Hidden>
          <Hidden smDown>
            <Grid
              container
              alignItems="center"
              justify="center"
              className="productsGrid"
              {
              {latest &&
                latest.length &&
                latest.map(prod => (
                  <Grid xs={2} item className="card">
                    <div className="image">
                      <img src={prod.image} alt="" />
                    </div>
                    <h4>Pregnancy Cards</h4>
                    <div className="content">
                      <p>{prod.title}</p>
                      <ArrowRight
                        onClick={() =>
                          redirectToUrl(
                            `${APP_ROUTES.PRODUCT_CATEGORY_ALIAS}/${
                              prod.category_slug
                            }/${prod.model_id}`,
                          )
                        }
                        className="arrow"
                        fontSize="large"
                      />
                    </div>
                  </Grid>
                ))}
            </Grid>
          </Hidden>
        </div>
      </div>
    </div>
  );
};

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
