import { __users__ } from "./fixedData";

export function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const ADD_DELAY = true
const DELAY_DURATION = 1500

export const SEARCH_BY_ID = 'id'
export const SEARCH_BY_NAME = 'name'

function getUsersData(searchBy, key) {
    let results = []
    if (searchBy === SEARCH_BY_ID) {
        if (__users__[key]) {
            results.push(__users__[key])
        }
    }
    else if (searchBy === SEARCH_BY_NAME) {
        for (const user of __users__) {
            if (user.username.includes(key)) {
                results.push(user)
            }
        }
    }
    return results
}

function getDataPage(data, requestedPage, pageSize) {
    if (data.length <= pageSize) {
        return {
            results: data,
            totalPages: 1
        }
    }
    //const endIndex = requestedPage*pageSize
    const endIndex = (requestedPage + 1)*pageSize
    return {
        totalPages: Math.ceil(data.length / pageSize),
        results: data.slice(endIndex - pageSize, endIndex)
    }
}

export function fetchUserResults(searchBy, key, callback) {

    if (ADD_DELAY) {
        delay(DELAY_DURATION).then(() => {
            callback(getUsersData(searchBy, key))
        })
    }
    else {
        callback(getUsersData(searchBy, key))
    }
}

export function fetchUserResultsPage(searchBy, key, requestedPage, pageSize, callback) {
    console.log(arguments)
    const response = getDataPage(getUsersData(searchBy, key), requestedPage, pageSize)
    if (ADD_DELAY) {
        delay(DELAY_DURATION).then(() => {
            callback(response)
        })
    }
    else {
        callback(response)
    }
    //console.log(response);
}