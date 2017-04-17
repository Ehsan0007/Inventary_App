import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';
import { browserHistory } from 'react-router'

export function logOutRequest() {

    return dispatch => {
        dispatch(LogOutRequest());
        return fbConfigs.fbAuth.signOut()
            .then((data) => {
                dispatch(logOutRequestSuccess());
                browserHistory.push('/')
            })
            .catch((error) => {
                dispatch(logOutRequestFailed());
            });
    }
}

function LogOutRequest() {
    return {

        type: ActionTypes.logOutRequest
    };
}

function logOutRequestSuccess() {
    return {
        type: ActionTypes.logOutRequestSuccess
    };
}

function logOutRequestFailed() {
    return {
        type: ActionTypes.logOutRequestFailed
    };
}