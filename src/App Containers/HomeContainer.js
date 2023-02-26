import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, NotFound, Product, Cart } from "../Refactor/AppContainerRefactor";
import Navbar from '../Components/Home/Navbar';
import ProtectedRoute from '../Components/Route/ProtectedRoute';
import Wishlist from '../Screens/Wishlist';
import OrderPlacedMsg from '../Components/Place Order/OrderPlacedMsg';
import Laptops from '../Screens/Category/Laptops';
import Monitors from '../Screens/Category/Monitors';
import Mobile from '../Screens/Category/Mobile';
import Smart from '../Screens/Category/Smart';
import Accesoires from '../Screens/Category/Accesoires';
import ProductSearch from '../Screens/ProductSearch';

class HomeContainer extends Component {

    render() {
        const { user } = this.props;
        return (
            <>
                <Navbar user={user} />
                <Switch>
                    <Route path="/products/:item" render={(props) => <Product {...props} />} />
                    <Route path="/laptops" component={Laptops} />
                    <Route path="/accesoires" component={Accesoires} />
                    <Route path="/smart" component={Smart} />
                    <Route path="/mobiles" component={Mobile} />
                    <Route path="/monitors" component={Monitors} />
                    <Route path="/search/:query" component={ProductSearch} />
                    <ProtectedRoute path="/cart" Component={Cart} />
                    <ProtectedRoute path="/wishlist" Component={Wishlist} />
                    <ProtectedRoute path="/order-placed" Component={OrderPlacedMsg} />
                    <Route path="/not-found" component={NotFound} />
                    <Route path="/" exact component={Home} />
                    <Redirect to="/not-found" />
                </Switch>
            </>
        );
    }
}

export default HomeContainer;