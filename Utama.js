import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import User from './User';
import Form from './Form';
import FormProduct from './FormProduct';
import Product from './Product';

const Utama = () => (
    <switch>
        <Route path="/Home" component={Home} />
        <Route path="/User" component={User} />
        <Route path="/Product" component={Product} />
        <Route path="/Form" component={Form} />
        <Route path="/FormProduct" component={FormProduct} />
    </switch>
)

export default Utama;
