import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function loadSaleRequest(viewStockData) {
    return dispatch => {
        dispatch(ViewSaleRequest());
        return fbConfigs.database.ref('/sale').once('value', snap => {
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
            dispatch(viewSaleRequestSuccess(todo))
        });
    }
}

function ViewSaleRequest() {
    return {
        type: ActionTypes.ViewSaleRequest
    };
}

function viewSaleRequestSuccess(data) {
    return {
        type: ActionTypes.viewSaleRequestSuccess,
        data
    };
}

// function viewAllCrimesRequestFailed() {
//     return {
//         type: ActionTypes.viewAllCrimesRequestFailed
//     };
// }