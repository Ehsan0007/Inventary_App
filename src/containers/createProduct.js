import { connect } from 'react-redux';
import CreateProduct  from '../components/createStore/createProduct';
import { loadInitialState } from '../store/actions/loadInitialState';
import { addProductRequest } from '../store/actions/addProduct';
// import { childAddedHandler } from '../store/actions/childAddedHandler';

function mapStateToProps(state) {
  //here we are mapping the redux state to props so we can use it in our components
  return {
    application: state.application
  };
}


function mapDispatchToProps(dispatch) {
  // childAddedHandler(dispatch);
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    addProductRequest          : (reportData) => dispatch(addProductRequest(reportData))
  };
}

const AddProductContainer = connect(mapStateToProps, mapDispatchToProps)(CreateProduct);

export default AddProductContainer;