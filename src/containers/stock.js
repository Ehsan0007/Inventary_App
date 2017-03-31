import { connect } from 'react-redux';
import Stock  from '../components/createStore/stock';
import { loadInitialState } from '../store/actions/loadInitialState';
import { loadStockRequest } from '../store/actions/stock';
import { loadStoreRequest } from '../store/actions/getStoredata';

function mapStateToProps(state) {
 
  return {
    application: state.application
  };
}


function mapDispatchToProps(dispatch) {
 
  return {
   loadStoreDetail          : () => dispatch(loadStoreRequest()),
    loadStockDetail          : () => dispatch(loadStockRequest())
  };
}

const ViewStockContainer = connect(mapStateToProps, mapDispatchToProps)(Stock);

export default ViewStockContainer;