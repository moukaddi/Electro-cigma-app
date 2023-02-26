import { combineReducers } from 'redux';
import {CartHandle} from './Cart/CartReducer'
import ServerSubmitReducer from './Cart/ServerSubmitReducer';
import { paymentReducer } from "./Payment/PaymentRedux";
import {orderReducer} from './Order/OrdersReducer';
import { WishlistReducer } from "./WishList/WishListReducer";

const allReducer=combineReducers({
    CartOperations: CartHandle,
    CartServer:ServerSubmitReducer,
    paymentBegan:paymentReducer,
    AllOrders:orderReducer,
    Wishlist:WishlistReducer
});

export default allReducer; 