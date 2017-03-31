import { connect } from 'react-redux';
import AddSale  from '../components/createStore/AddSale';
import { addSaleRequest } from '../store/actions/addSale';
import { loadStoreRequest } from '../store/actions/getStoredata';
import { loadProductRequest } from '../store/actions/getProductdata';


function mapStateToProps(state) {
 
  return {
    application: state.application
  };
}


function mapDispatchToProps(dispatch) {
  
  return {
    addSale          : (data) => dispatch(addSaleRequest(data)),
    loadStoreState          : () => dispatch(loadStoreRequest()),
    loadProductData          : () => dispatch(loadProductRequest()),

  };
}

const AddSaleContainer = connect(mapStateToProps, mapDispatchToProps)(AddSale);

export default AddSaleContainer;