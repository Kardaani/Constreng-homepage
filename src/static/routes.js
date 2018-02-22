'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from 'app/content/Home';
import Features from 'app/content/Features';
import About from 'app/content/About';
import UsContact from 'app/content/UsContact';
import PageNotFound from 'app/content/PageNotFound';


const routes = (
    <Route path='/'>
        <IndexRoute component={ Home } />
        <Route path='features' component={ Features } />
        <Route path='about' component={ About } />
        <Route path='us-contact' component={ UsContact } />
        <Route path='*' component={ PageNotFound } />
    </Route>n
);

export default routes;
