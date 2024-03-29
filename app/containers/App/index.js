/**
 *
 * App
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { redirectToUrl } from 'utils/common';
import { Switch, Route } from 'react-router-dom';
import './style.scss';
import HomePage from 'containers/Home/Loadable';
import AboutUs from 'components/AboutUs';
import Downloads from 'components/Downloads';
import ContactUs from 'components/ContactUs';
import Products from 'containers/Products/Loadable';
import {
  DEFAULT_IMAGE_1 as IMG1,
  DEFAULT_IMAGE_2 as IMG2,
  API_CONSTANTS,
  APP_ROUTES,
  redirectFor,
} from 'utils/constants';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Gallery from 'components/Gallery';
import Loader from 'components/Loader';
import Error404 from 'components/Error404';
import saga from './saga';
import reducer from './reducer';
import {
  getData,
  getInquiry,
  saveData,
  saveImage,
  setInquiry,
} from './actions';
import makeSelectApp, {
  makeSelectConfig,
  makeSelectImageUpload,
  makeSelectInquiry,
  makeSelectSave,
} from './selectors';

export function App(props) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  const [config, setConfig] = useState(null);
  const {
    userConfig,
    fetchData,
    save,
    saveData,
    uploadImage,
    uploadImageData,
    setInquiry,
    inquiryRes,
  } = props;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
    setLoading(true);
  }, []);
  useEffect(() => {
    const { status, data } = userConfig;
    if (status === 1) {
      setLoading(false);
      const parsed = JSON.parse(data);
      setConfig(parsed);
    } else if (status === -1) {
      setLoading(false);
      toast.error(data);
      redirectToUrl('/error');
    }
  }, [userConfig.status]);
  const mainBodyObserverCallback = () => {
    const mainBodyInnerWrapper = document.getElementById(
      'mainBodyInnerWrapper',
    );
    const innerHtml = mainBodyInnerWrapper.innerHTML;
    const loader = document.getElementById('K_LIFE_loader');
    if (!innerHtml) {
      loader.style.display = 'flex';
    } else {
      loader.style.display = 'none';
    }
  };
  console.log(loading, 'configratio');
  useEffect(() => {
    const targetNode = document.getElementById('mainBodyInnerWrapper');
    if (targetNode) {
      const observerConfig = {
        attributes: false,
        childList: true,
        subtree: true,
      };
      const observer = new MutationObserver(mainBodyObserverCallback);
      observer.observe(targetNode, observerConfig);
    }
  }, [document.getElementById('mainBodyInnerWrapper')]);
  console.log(props, 'AppProps');
  return (
    <>
      <Helmet titleTemplate="%s - K-Life" defaultTitle="K-Life">
        <meta name="description" content="K-Life" />
      </Helmet>
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <ToastContainer
              position="top-right"
              hideProgressBar
              autoClose={1000}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <div className="topGreenBar" />
            <Header {...config} />
            <div id="mainBody">
              <div id="K_LIFE_loader">
                <div className="loader" />
              </div>
              <div id="mainBodyInnerWrapper">
                <Switch>
                  <Route
                    exact
                    path={APP_ROUTES.HOME}
                    component={() => <HomePage {...config} />}
                  />
                  <Route
                    exact
                    path={APP_ROUTES.PRODUCTS}
                    component={() => (
                      <Products {...config} productDetail={false} />
                    )}
                  />
                  <Route
                    exact
                    path={APP_ROUTES.ABOUT_US}
                    component={() => <AboutUs {...config} />}
                  />
                  <Route
                    exact
                    path={APP_ROUTES.DOWNLOADS}
                    component={() => <Downloads {...config} />}
                  />
                  <Route
                    exact
                    path={APP_ROUTES.CONTACT_US}
                    component={() => (
                      <ContactUs
                        inquiryRes={inquiryRes}
                        setInquiry={setInquiry}
                        {...config}
                      />
                    )}
                  />
                  <Route
                    exact
                    path={APP_ROUTES.PRODUCT_CATEGORY}
                    component={() => <Products {...config} productDetail />}
                  />
                  <Route
                    exact
                    path={APP_ROUTES.GALLERY}
                    component={() => <Gallery {...config} />}
                  />
                  <Route component={Error404} />
                </Switch>
              </div>
              <Footer />
            </div>
            <ToastContainer />
          </>
        )}
      </>
    </>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
  userConfig: makeSelectConfig(),
  save: makeSelectSave(),
  uploadImageData: makeSelectImageUpload(),
  inquiryRes: makeSelectInquiry(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchData: () => dispatch(getData()),
    saveData: data => dispatch(saveData(data)),
    uploadImage: data => dispatch(saveImage(data)),
    setInquiry: data => dispatch(getInquiry(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);
