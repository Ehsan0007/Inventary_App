import ActionTypes from '../actions/actionTypes';

const initial_state = { };
export function applicationReducer(state = initial_state, action) {
  switch (action.type) {
    case ActionTypes.LoadInitialState: {
      return state;
    }
    case ActionTypes.LoginRequestSuccess: {
      var newState1 = Object.assign({}, state, { user: action.data });
      state = newState1;
      return state;
    }

    // case ActionTypes.logOutRequestSuccess: {
    //   var newState001 = Object.assign({}, state, { logout: action.data });
    //   state = newState001;
    //   return state;
    // }


    case ActionTypes.addStoreRequestSuccess: {
      var newState2 = Object.assign({}, state, { store: action.data });
      state = newState2;
      return state;
    }

    case ActionTypes.addProductRequestSuccess: {
      var newState3 = Object.assign({}, state, { product: action.data });
      state = newState3;
      return state;
    }

    case ActionTypes.viewAllStoreRequestSuccess: {
      var newState4 = Object.assign({}, state, { purchase: action.data });
      state = newState4;
      return state;
    }
  
    case ActionTypes.viewAllProductRequestSuccess: {
      var newState5 = Object.assign({}, state, { product: action.data });
      state = newState5;
      return state;
    }
  
    case ActionTypes.addPurchaseRequestSuccess: {
      var newState6 = Object.assign({}, state, { purchasedetail: action.data });
      state = newState6;
      return state;
    }
  
    case ActionTypes.addSaleRequestSuccess: {
      var newState7 = Object.assign({}, state, { sale: action.data });
      state = newState7;
      return state;
    }

    case ActionTypes.viewStockRequestSuccess: {
      var newState8 = Object.assign({}, state, { stock: action.data });
      state = newState8;
      return state;
    }

    case ActionTypes.viewSaleRequestSuccess: {
      var newState9 = Object.assign({}, state, { sale: action.data });
      state = newState9;
      return state;
    }

    case ActionTypes.StockRequestSuccess: {
      var newState10 = Object.assign({}, state, {stockdata: action.data });
      state = newState10;
      return state;
    }
    default:
      return state;
  }
}