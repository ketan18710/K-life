/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import rough from './rough';
import { Switch, Route } from 'react-router-dom';
import './style.scss';
import HomePage from 'containers/Home/Loadable';
import AboutUs from 'containers/AboutUs/index';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import {APP_ROUTES} from 'utils/constants';
// const AppWrapper = styled.div`
//   max-width: calc(768px + 16px * 2);
//   margin: 0 auto;
//   display: flex;
//   min-height: 100%;
//   padding: 0 16px;
//   flex-direction: column;
// `;

export default function App() {
  return (
    <>
      <Helmet
        titleTemplate="%s - K-Life"
        defaultTitle="K-Life"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <div className="topGreenBar"></div>
      <Header />
      <div id="mainBody">
        <Switch>
          <Route exact path={APP_ROUTES.HOME} component={HomePage} />
          <Route exact path={APP_ROUTES.ROUGH} component={rough} />
          <Route exact path={APP_ROUTES.ABOUT_US} component={AboutUs} />
        </Switch>
        <Footer />
      </div>
    </>     
  );
}
