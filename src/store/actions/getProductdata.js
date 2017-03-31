import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function loadProductRequest(viewAllStoreData) {
    return dispatch => {
        dispatch(ViewAllProductRequest());
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
            dispatch(viewAllProductRequestSuccess(todo))
        });
    }
}

function ViewAllProductRequest() {
    return {
        type: ActionTypes.ViewAllProductRequest
    };
}

function viewAllProductRequestSuccess(data) {
    return {
        type: ActionTypes.viewAllProductRequestSuccess,
        data
    };
}

// function viewAllCrimesRequestFailed() {
//     return {
//         type: ActionTypes.viewAllCrimesRequestFailed
//     };
// }