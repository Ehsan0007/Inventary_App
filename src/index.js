import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import AppBar from './components/AppBar/Appbar'
import LoginContainer from './containers/login'
import Dashboard from "./components/Dashboard/dashboard"
import AddStoreContainer from './containers/createStore'
import AddProductContainer from './containers/createProduct'
import AddPurchaseDetailContainer from './containers/purchaseDetail'
import AddSaleContainer from './containers/Addsale'
// import Stock from './components/createStore/stock'
import ViewStockContainer from './containers/stock'
import AddViewSaleContainer from './containers/ViewsaleDetail'
import ViewPurchaseContainer from './containers/purchase'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {browserHistory,Router,Route,IndexRoute} from 'react-router';

class RootComponent extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Provider store={store}>
            <Router history={browserHistory}>

              <Route path="/" component={AppBar}>
                <IndexRoute component={LoginContainer}/>
              </Route>

              <Route path="dashboard" component={Dashboard}>
              <Route path="/createStore" component={AddStoreContainer}/>
              <Route path="/createProduct" component={AddProductContainer}/>
              <Route path="/AddPurchaseDetail" component={AddPurchaseDetailContainer}/>
              <Route path="/Addsale" component={AddSaleContainer}/>
              <Route path="/Purchase" component={ViewPurchaseContainer}/>
              <Route path="/saleDetail" component={AddViewSaleContainer}/>
              <Route path="/stock" component={ViewStockContainer}/>
              </Route>

            </Router>
          </Provider>
        </MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render((
  <RootComponent />
),
  document.getElementById('root')
);

