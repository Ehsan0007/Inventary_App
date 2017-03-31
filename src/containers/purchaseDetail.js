import { connect } from 'react-redux';
import AddPurchaseDetail  from '../components/createStore/AddPurchase';
import { loadInitialState } from '../store/actions/loadInitialState';
import { loadStoreRequest } from '../store/actions/getStoredata';
import { loadProductRequest } from '../store/actions/getProductdata';
import { addPurchaseRequest } from '../store/actions/addpurchasedetail';



function mapStateToProps(state) {
  return {
    application: state.application
  };
}


function mapDispatchToProps(dispatch) {
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    loadStoreState          : () => dispatch(loadStoreRequest()),
    loadProductData          : () => dispatch(loadProductRequest()),
    addPurchase          : (data) => dispatch(addPurchaseRequest(data))
  };
}

const AddPurchaseDetailContainer = connect(mapStateToProps, mapDispatchToProps)(AddPurchaseDetail);

export default AddPurchaseDetailContainer;