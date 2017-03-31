import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function loadStockRequest(viewStockData) {
    return dispatch => {
        dispatch(StocktRequest());
        return fbConfigs.database.ref('/products').once('value', snap => {
            const todo = [];
            snap.forEach(childSnapshot => {
                var innerTodo = childSnapshot.val();
                innerTodo.key = childSnapshot.key;
                if(childSnapshot.hasChild('comments')){
                    var customComments = Object.keys(childSnapshot.val().comments).map(key=>{return {key:childSnapshot.val().comments[key]}})
                    console.log(customComments);
                    innerTodo.comments = customComments;
                    todo.push(innerTodo);
                }else{
                    todo.push(innerTodo);
                }
            })
            dispatch(StockRequestSuccess(todo))
        });
    }
}

function StocktRequest() {
    return {
        type: ActionTypes.StocktRequest
    };
}

function StockRequestSuccess(data) {
    return {
        type: ActionTypes.StockRequestSuccess,
        data
    };
}

// function viewAllCrimesRequestFailed() {
//     return {
//         type: ActionTypes.viewAllCrimesRequestFailed
//     };
// }