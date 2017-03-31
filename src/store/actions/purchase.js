import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function loadStockRequest(viewStockData) {
    return dispatch => {
        dispatch(ViewStocktRequest());
        // return fbConfigs.database.ref('/Stores').once('value', snap => {
            return fbConfigs.database.ref('/products/').once('value',snapshot=>{
                const arr=[];
                // snap.forEach(childSnapshot =>{
                // var data = childSnapshot.val();
                // arr.push(data); 
                snapshot.forEach(childSnapshot =>{
                    var data = childSnapshot.val()
                    arr.push(data);
                    console.log("Coming data" ,arr)
                })
                  dispatch(viewStockRequestSuccess(arr))
            console.log("Complete data is" , arr)
                 })
          
        // });
    }
}

function ViewStocktRequest() {
    return {
        type: ActionTypes.ViewStocktRequest
    };
}

function viewStockRequestSuccess(data) {
    return {
        type: ActionTypes.viewStockRequestSuccess,
        data
    };
}

// function viewAllCrimesRequestFailed() {
//     return {
//         type: ActionTypes.viewAllCrimesRequestFailed
//     };
// }