import * as GLOBALS from '../globals'

export function checkStatus(response) {
    if (response.status >= GLOBALS.httpStatusCodeSuccessLowerLimit && response.status <= GLOBALS.httpStatusCodeSuccessUpperLimit) {
        return response
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function parseJSON(response) {
    return response.json();
}