'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from 'app/content/Home';
import Features from 'app/content/Services';
import About from 'app/content/About';
import ContactUs from 'app/content/ContactUs';
import PageNotFound from 'app/content/PageNotFound';


const routes = (
    <Route path='/'>
        <IndexRoute component={ Home } />
        <Route path='services' component={ Services } />
        <Route path='about' component={ About } />
        <Route path='contact-us' component={ ContactUs } />
        <Route path='suomeksi' component={ Suomeksi } />
        <Route path='*' component={ PageNotFound } />
    </Route>n
);

export default routes;
