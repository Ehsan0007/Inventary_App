import { connect } from 'react-redux';
import SalesDetail  from '../components/createStore/saleDetail';
import { loadInitialState } from '../store/actions/loadInitialState';
import { loadSaleRequest } from '../store/actions/ViewSale';

function mapStateToProps(state) {
 
  return {
    application: state.application
  };
}


function mapDispatchToProps(dispatch) {
 
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    loadSaleDetail          : () => dispatch(loadSaleRequest())
  };
}

const AddViewSaleContainer = connect(mapStateToProps, mapDispatchToProps)(SalesDetail);

export default AddViewSaleContainer;