import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function loadStoreRequest(viewAllStoreData) {
    return dispatch => {
        dispatch(ViewAllStoreRequest());
        return fbConfigs.database.ref('/Stores').once('value', snap => {
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
            dispatch(viewAllStoreRequestSuccess(todo))
        });
    }
}

function ViewAllStoreRequest() {
    return {
        type: ActionTypes.ViewAllStoreRequest
    };
}

function viewAllStoreRequestSuccess(data) {
    return {
        type: ActionTypes.viewAllStoreRequestSuccess,
        data
    };
}

// function viewAllCrimesRequestFailed() {
//     return {
//         type: ActionTypes.viewAllCrimesRequestFailed
//     };
// }