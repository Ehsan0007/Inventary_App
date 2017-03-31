import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function addSaleRequest(ProductData) {
    return dispatch => {
        dispatch(AddSaleRequest());
        return fbConfigs.database.ref('/sale').push(ProductData).then((data)=>{
            return fbConfigs.database.ref('/products/' + ProductData.productId).once('value',snap=>{
                 var total = {
                    quantity : parseInt(snap.val().quantity) - parseInt(ProductData.Quantity),
                    store : ProductData.store,
                    Unit : ProductData.Unit,
                    saleVolume : parseInt(snap.val().quantity) * parseInt(ProductData.Unit),
                }
                console.log("sale ki quantity" , total.saleVolume)
                return fbConfigs.database.ref('/products/' + ProductData.productId).update(total,(done)=>{
                    alert("Successfully Added.");
                   dispatch(addSaleRequestSuccess(data));
                })
                 
            })
           
        })
    }
}

function AddSaleRequest() {
    return {
        type: ActionTypes.AddSaleRequest
    };
}

function addSaleRequestSuccess(data) {
    return {
        type: ActionTypes.addSaleRequestSuccess,
        data
    };
}

// function addProductRequestFailed() {
//     return {
//         type: ActionTypes.addProductRequestFailed
//     };
// }