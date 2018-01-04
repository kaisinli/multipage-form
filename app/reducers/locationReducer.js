'use strict'

//----------------------------------------< initial state >------------------------------------------
const locationInitialState = {
    city: '',
    state: '',
    country: '',
}

//----------------------------------------< action >-------------------------------------------------
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_COUNTRY = 'UPDATE_COUNTRY';

//----------------------------------------< action creator >------------------------------------------
export const updateCity = (city) => ({
    type: UPDATE_CITY,
    city
})

export const updateState = (state) => ({
    type: UPDATE_STATE,
    state
})

export const updateCountry = (country) => ({
    type: UPDATE_COUNTRY,
    country
})

//----------------------------------------< thunk creator >------------------------------------------
export const putCity= (city) =>
    dispatch => dispatch(updateCity(city))

export const putState = (state) =>
    dispatch => dispatch(updateState(state))

export const putCountry = (country) =>
    dispatch => dispatch(updateCountry(country))

//----------------------------------------< reducer >-----------------------------------------------
export default function (state = locationInitialState, action) {
    switch (action.type) {
        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.city })
        case UPDATE_STATE:
            return Object.assign({}, state, { state: action.state })
        case UPDATE_COUNTRY:
            return Object.assign({}, state, { country: action.country })
        default:
            return state
    }
}