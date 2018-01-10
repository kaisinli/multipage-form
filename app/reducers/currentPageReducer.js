'use strict'

//----------------------------------------< initial state >------------------------------------------
const pageInitialState = {
    currentPage: 0
}

//----------------------------------------< action >------------------------------------------
const GET_BASIC_INFO_PAGE = 'GET_BASIC_INFO_PAGE';
const GET_LOCATION_PAGE = 'GET_LOCATION_PAGE';
const GET_EDUCATION_PAGE = 'GET_EDUCATION_PAGE';
const GET_SUMMARY_PAGE = 'GET_SUMMARY_PAGE';
const GET_THANK_YOU_PAGE = 'GET_THANK_YOU_PAGE'
const GET_SORRY_PAGE = 'GET_SORRY_PAGE'

//----------------------------------------< action creator >------------------------------------------

export const getBasicInfoPage = () => ({
    type: GET_BASIC_INFO_PAGE
})

export const getLocationPage = () => ({
    type: GET_LOCATION_PAGE
})

export const getEducationPage = () => ({
    type: GET_EDUCATION_PAGE
})

export const getSummaryPage = () => ({
    type: GET_SUMMARY_PAGE
})

export const getThankYouPage = () => ({
    type: GET_THANK_YOU_PAGE
})

export const getSorryfoPage = () => ({
    type: GET_SORRY_PAGE
})

//----------------------------------------< thunk creator >------------------------------------------
export const basicPage = () =>
    dispatch => dispatch(getBasicInfoPage())

export const locationPage = () =>
    dispatch => dispatch(getLocationPage())

export const educationPage = () =>
    dispatch => dispatch(getEducationPage())

export const summaryPage = () =>
    dispatch => dispatch(getSummaryPage())

export const thankYouPage = () =>
    dispatch => dispatch(getThankYouPage())

export const sorryPage = () =>
    dispatch => dispatch(getSummaryPage())

//----------------------------------------< reducer >------------------------------------------
export default (state = pageInitialState, action) => {
    switch (action.type) {
        case GET_BASIC_INFO_PAGE:
            return Object.assign({}, state, { currentPage: 1 });
        case GET_LOCATION_PAGE:
            return Object.assign({}, state, { currentPage: 2 });
        case GET_EDUCATION_PAGE:
            return Object.assign({}, state, { currentPage: 3 });
        case GET_SUMMARY_PAGE:
            return Object.assign({}, state, { currentPage: 4 });
        case GET_THANK_YOU_PAGE:
            return Object.assign({}, state, { currentPage: 5 });
        case GET_SORRY_PAGE:
            return Object.assign({}, state, { currentPage: 6 });
        default:
            return state
    }
}
