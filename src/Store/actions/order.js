import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

// Actions are responsible for calling the reducers and communicating with the server.
export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
        .then(response => {
            console.log(response)
            dispatch(purchaseBurgerSuccess( response.data.name, orderData ) );
        })
        .catch(error => {
            console.log(error)
            dispatch(purchaseBurgerFail(error));
        });
    };
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = () => {
    return dispatch => {
        console.log('MOUNTED');
        dispatch(fetchOrdersStart()) // Change state to loading until the end of the operation
        axios.get('/orders.json')
        .then(res => {
            const fetchedOrders = [];
            for (let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            console.log(res.data);
            dispatch(fetchOrdersSuccess(fetchedOrders));
            this.setState({loading:false, orders: fetchedOrders});
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchOrdersFail());
        });
    }
};

export const deleteOrders = (id) => {
    return dispatch => {
        dispatch(deleteOrderStart())
        axios.delete('/orders/' + id + '.json')
        .then(response => {
            console.log('DELETED')
            dispatch(deleteOrderSuccess())
            dispatch(fetchOrders())
        })
        .catch( err => {
            console.log('NOT DELETED', err)
            dispatch(deleteOrderFail(err))
        });
    }
};
export const deleteOrderSuccess = (orders) => {
    return {
        type: actionTypes.DELETE_ORDER_SUCCESS,
        orders: orders
    }
};

export const deleteOrderFail = (error) => {
    return {
        type: actionTypes.DELETE_ORDER_FAIL,
        error: error
    };
};

export const deleteOrderStart = () => {
    return {
        type: actionTypes.DELETE_ORDER_START
    };
};