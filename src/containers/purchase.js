import { connect } from 'react-redux';
import Purchase  from '../components/createStore/purchase';
import { loadInitialState } from '../store/actions/loadInitialState';
import { loadStockRequest } from '../store/actions/purchase';

function mapStateToProps(state) {
 
  return {
    application: state.application
  };
}


function mapDispatchToProps(dispatch) {
 
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    loadStockDetail          : () => dispatch(loadStockRequest())
  };
}

const ViewPurchaseContainer = connect(mapStateToProps, mapDispatchToProps)(Purchase);

export default ViewPurchaseContainer;