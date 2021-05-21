import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNav from "../common/main-nav";



import Footer from "../common/footer/";

import Home from "./home";
import Profile from "./profile";
import WorkExperiance from "./work-experiance";
import Contact from "./contact";
import Preview from './preview'
import HtmlPage from "./html-work";
import CssPage from "./css-work";
import JsPage from "./js-work";
import ReactPage from "./react-work";
import SketchPage from "./sketch-work";
import ErrorPage from "./error-page";


export default function Index() {
  return (
    <>
      <Router>
      
        <MainNav />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/profile" component={Profile} />

          <Route path="/work-experiance" component={WorkExperiance} />

          <Route path="/contact" component={Contact} />

          <Route path="/preview/:id" component={Preview} />

          {/* <Route path="/html-page" component={HtmlPage} />

          <Route path="/css-page" component={CssPage} />

          <Route path="/js-page" component={JsPage} />

          <Route path="/react-page" component={ReactPage} />

          <Route path="/sketch-page" component={SketchPage} /> */}

          <Route path="*" component={ErrorPage} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}
