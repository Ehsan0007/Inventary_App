const actionTypes = {
  LoadInitialState: 'LoadInitialState',

  LoginRequest: 'LoginRequest',
  LoginRequestFailed: 'LoginRequestFailed',
  LoginRequestSuccess: 'LoginRequestSuccess',

  addStoreRequest : 'addStoreRequest',
  addStoreRequestSuccess  :'addStoreRequestSuccess',
  addStoreRequestFailed  :'addStoreRequestFailed',
  
  addProductRequest : 'addProductRequest',
  addProductRequestSuccess : 'addProductRequestSuccess',
  addProductRequestFailed : 'addProductRequestFailed',
  
  ViewAllStoreRequest : 'ViewAllStoreRequest',
  viewAllStoreRequestSuccess : 'viewAllStoreRequestSuccess',

  ViewAllProductRequest : 'ViewAllProductRequest',
  viewAllProductRequestSuccess : 'viewAllProductRequestSuccess',

  AddPurchaseRequest : 'AddPurchaseRequest',
  addPurchaseRequestSuccess : 'addPurchaseRequestSuccess',

  AddSaleRequest:'AddSaleRequest',
  addSaleRequestSuccess : 'addSaleRequestSuccess',

  ViewStocktRequest : 'ViewStocktRequest',
  viewStockRequestSuccess  :'viewStockRequestSuccess',

  ViewSaleRequest : 'ViewSaleRequest',
  viewSaleRequestSuccess : 'viewSaleRequestSuccess',

  StocktRequest : 'StocktRequest',
  StockRequestSuccess : 'StockRequestSuccess',

};

export default actionTypes;