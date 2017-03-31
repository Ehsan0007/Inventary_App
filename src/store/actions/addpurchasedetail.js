import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function addPurchaseRequest(PurchaseData) {
    return dispatch => {
        dispatch(AddPurchaseRequest());
    
        return fbConfigs.database.ref('/purchase').push(PurchaseData).then((data)=>{
             return fbConfigs.database.ref('/products/' + PurchaseData.productId).once('value' , snap=>{ 
                    var total = {
                    quantity : parseInt(snap.val().quantity) + parseInt(PurchaseData.Quantity),
                    store : PurchaseData.store,
                    PurchasesDate : PurchaseData.PurchasesDate,
                    Unit : PurchaseData.Unit,
                    saleVolume : parseInt(snap.val().quantity+1) * parseInt(PurchaseData.Unit),
                }
               console.log("Data" , total.saleVolume)
                return fbConfigs.database.ref('/products/' + PurchaseData.productId).update(total,(done)=>{
                    // var updatequantity = {
                    //     salevolume  : snap.val().quantity + PurchaseData.Unit,
                    // }
                    // console.log("update data" ,total.quantity);
                    // console.log("update quantity", updatequantity.salevolume)
                    // alert("Successfully Added.")
                   dispatch(addPurchaseRequestSuccess(data));
                 })
               })       
        })
    }
}

function AddPurchaseRequest() {
    return {
        type: ActionTypes.AddPurchaseRequest
    };  
}

function addPurchaseRequestSuccess(data) {
    return {
        type: ActionTypes.addPurchaseRequestSuccess,
        data
    };
}