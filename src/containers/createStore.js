import { connect } from 'react-redux';
import CreateStore  from '../components/createStore/createStore';
import { loadInitialState } from '../store/actions/loadInitialState';
import { createStoreRequest } from '../store/actions/createStore';

function mapStateToProps(state) {
  return {
    application: state.application
  };
}


function mapDispatchToProps(dispatch) {
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    addStoreRequest          : (reportData) => dispatch(createStoreRequest(reportData))
  };
}

const AddStoreContainer = connect(mapStateToProps, mapDispatchToProps)(CreateStore);

export default AddStoreContainer;