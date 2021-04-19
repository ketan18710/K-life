/**
 *
 * App
 *
 */

import React, { memo , useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { redirectToUrl } from 'utils/common';
import makeSelectApp,{makeSelectConfig, makeSelectImageUpload, makeSelectSave} from './selectors';
import { getData,saveData, saveImage} from './actions'
import reducer from './reducer';
import saga from './saga';
import rough from './rough';
import { Switch, Route } from 'react-router-dom';
import './style.scss';
import HomePage from 'containers/Home/Loadable';
import AboutUs from 'containers/AboutUs/index';
import Products from 'containers/Products/Loadable'
import {DEFAULT_IMAGE_1 as IMG1,DEFAULT_IMAGE_2 as IMG2,API_CONSTANTS,APP_ROUTES,redirectFor} from 'utils/constants'
import Header from 'components/Header';
import Footer from 'components/Footer';
import Gallery from 'components/Gallery';
import Loader from 'components/Loader';
import Error404 from 'components/Error404';

export function App(props) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });
  
  const [config, setConfig] = useState(null)
  const {userConfig,fetchData,save,saveData,uploadImage,uploadImageData} = props
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchData()
    setLoading(true)
  }, [])
  useEffect(() => {
    const {status,data} = userConfig
    if(status === 1){
      let parsed = JSON.parse(data)
      setConfig(parsed)
      setLoading(false)
    }else if(status === -1){
      toast.error(data)
      redirectToUrl('/error')
      setLoading(false)
    }
  }, [userConfig.status])
  const mainBodyObserverCallback = () => {
    const mainBodyInnerWrapper = document.getElementById('mainBodyInnerWrapper')
    const innerHtml = mainBodyInnerWrapper.innerHTML
    const loader  = document.getElementById('K_LIFE_loader')
    if(!innerHtml){
      loader.style.display = "flex"
    }else{  
      loader.style.display = "none"
    }
  }
  console.log(loading,'configratio')
  useEffect(() => {
    const targetNode = document.getElementById('mainBodyInnerWrapper');
    if(targetNode){
      const observerConfig = { attributes:false, childList:true, subtree: true };
      const observer = new MutationObserver(mainBodyObserverCallback);
      observer.observe(targetNode, observerConfig);
    }
  }, [document.getElementById('mainBodyInnerWrapper')])
  console.log(props,'AppProps')
  return (
    <>
      <Helmet
        titleTemplate="%s - K-Life"
        defaultTitle="K-Life"
      >
        <meta name="description" content="K-Life" />
      </Helmet>
      <>
        {
          loading ?
          <Loader />:
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
            <div className="topGreenBar"></div>
            <Header {...config}/>
            <div id="mainBody">
              <div id="K_LIFE_loader">
                <div class="loader"></div>
              </div>
              <div id="mainBodyInnerWrapper">
                <Switch>
                  <Route exact path={APP_ROUTES.HOME} component={()=><HomePage {...config} />} />
                  <Route exact path={APP_ROUTES.ROUGH} component={rough} />
                  <Route exact path={APP_ROUTES.PRODUCT_CATEGORY} component={()=><Products {...config} productDetail={false}/>} />
                  <Route exact path={APP_ROUTES.PRODUCT} component={()=><Products {...config} productDetail={true}/>} />
                  <Route exact path={APP_ROUTES.ABOUT_US} component={()=><AboutUs  {...config} />} />
                  <Route exact path={APP_ROUTES.GALLERY} component={()=><Gallery {...config} />} />
                  <Route component={Error404} />
                  {/* <Route exact path={APP_ROUTES.DASHBOARD} component={()=><Dashboard uploadImage={(data)=>uploadImage(data)}  saveData={(data)=>saveData(data)} save={save}   uploadImageData={uploadImageData} redirectFor={redirectFor.DASHBOARD} config={config} />} />
                  <Route exact path={APP_ROUTES.DASHBOARD_ABOUTUS} component={()=><Dashboard uploadImage={(data)=>uploadImage(data)} saveData={(data)=>saveData(data)} save={save} setConfig={(data)=>setConfig(data)}  uploadImageData={uploadImageData} redirectFor={redirectFor.DASHBOARD_ABOUTUS} config={config} />} />
                  <Route exact path={APP_ROUTES.DASHBOARD_GALLERY} component={()=><Dashboard uploadImage={(data)=>uploadImage(data)} saveData={(data)=>saveData(data)} save={save} setConfig={(data)=>setConfig(data)}  uploadImageData={uploadImageData} redirectFor={redirectFor.DASHBOARD_GALLERY} config={config} />} /> */}
                </Switch>
              </div>
              <Footer />
            </div> 
          <ToastContainer />
          </>
        }
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
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchData: () => dispatch(getData()),
    saveData: (data) => dispatch(saveData(data)),
    uploadImage: (data) => dispatch(saveImage(data)),
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
