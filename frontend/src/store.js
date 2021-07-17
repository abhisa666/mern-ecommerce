import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {productsReducer,newProductReducer,productDetailsReducer,newReviewReducer,productReducer,productReviewsReducer, reviewReducer} from './reducers/productReducers'
import {authReducer,userReducer,forgotPasswordReducer,allUsersReducer, userDetailsReducer} from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'
import {newOrderReducer,myOrdersReducer,orderDetailsReducer,allOrdersReducer,orderReducer} from './reducers/orderReducers'

const reducer = combineReducers({
    products: productsReducer,
    newProduct: newProductReducer,
    productDetails: productDetailsReducer,
    productReviews: productReviewsReducer,
    review: reviewReducer,
    newReview: newReviewReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    allOrders: allOrdersReducer,
    order: orderReducer,
    product: productReducer,
})

let initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems') 
        ? JSON.parse(localStorage.getItem('cartItems') ) 
        : [],
        shippingInfo: localStorage.getItem('shippingInfo')
        ? JSON.parse(localStorage.getItem('shippingInfo'))
        : {}
    }
}

const middleware = [thunk]

const store = createStore( reducer , initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store