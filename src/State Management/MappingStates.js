import { fetchCartData,error } from "./Cart/FetchActions";
import { addItem,incrementItem,decrementItem,removeItem,clearCartServer } from "./Cart/CartReducer";
import { paymentAction,paymentClose,endSuccess,paymentCardSave,billingAddress,submitDataToServer,orderCompleted } from "./Payment/PaymentRedux";
import { getOrders } from "./Order/OrdersReducer";
import { getWishlist,removeWishlist, wishlistToCart } from "./WishList/WishListReducer";
import { removeError } from "./WishList/WishlistActions";

const mapStateToProps=(state)=>({
    cartFetch:state.CartOperations,
    userCart:state.CartOperations.cart,

    //payment
    paymentBegan:state.paymentBegan,

    //Cart-Server
    cartServer:state.CartServer,
 
    //Orders
    orders:state.AllOrders,

    //Wishlist
    wishlist:state.Wishlist
});

const mapDispatchToProps=(dispatch)=>{ 
    return {
        //Cart 
        fetch:()=> dispatch(fetchCartData()),
        cartErrorCheck:()=>dispatch(error()), 
        addItem:(data)=>dispatch(addItem(data)),
        incrementitem:(data)=>dispatch(incrementItem(data)),
        decrementitem:(data)=>dispatch(decrementItem(data)),
        removeItem:(id)=>dispatch(removeItem(id)),
        clearCart:(where)=>dispatch(clearCartServer(where)),
    
        //payment
        paymentStarted:(data,where)=>dispatch(paymentAction(data,where)),
        paymentOver:()=>dispatch(paymentClose()),
        paymentSuccessEnd:()=>dispatch(endSuccess()),
        paymentMode:(card,mode)=>dispatch(paymentCardSave(card,mode)),
        paymentAddress:(address)=>dispatch(billingAddress(address)),
        submitOrders:(orders)=>dispatch(submitDataToServer(orders)),
        orderCompleted:()=>dispatch(orderCompleted()),

        //orders
        fetchOrders:()=>dispatch(getOrders()),

        //Wishlist
        fetchWishlist:()=>dispatch(getWishlist()),
        removeFromWishlist:(id)=>dispatch(removeWishlist(id)),
        moveWishlistToCart:(item)=>dispatch(wishlistToCart(item)),
        removeTheError:()=>dispatch(removeError())
    }
}
 
export {
    mapStateToProps,mapDispatchToProps
}