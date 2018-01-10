'use strict'

//----------------------------------------< initial state >------------------------------------------
const infoInitialState = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    website: '',
    city: '',
    state: '',
    country: '',
    school: []
}

//----------------------------------------< action >-------------------------------------------------
const UPDATE_INFO = 'UPDATE_INFO';
const ADD_SCHOOL = 'ADD_SCHOOL';
const CLEAR_SCHOOL = 'CLEAR_SCHOOL'

//----------------------------------------< action creator >------------------------------------------
export const updateInfo = (name, value) => ({
    type: UPDATE_INFO,
    name,
    value
})

export const addSchool = (school) => ({
    type: ADD_SCHOOL,
    school
})

export const clearSchool = () => ({
    type: CLEAR_SCHOOL
})

//----------------------------------------< thunk creator >------------------------------------------
export const putInfo = (name, value) =>
    dispatch => dispatch(updateInfo(name, value))

export const putSchool = (school) =>
    dispatch => dispatch(addSchool(school))

export const deleteAllSchools = () =>
    dispatch => dispatch(clearSchool())
//----------------------------------------< reducer >-----------------------------------------------
export default (state = infoInitialState, action) => {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case ADD_SCHOOL:
            newState.school.push(action.school);
            return newState;
        case CLEAR_SCHOOL:
            newState.school = [];
            return newState;
        case UPDATE_INFO:
            newState[action.name] = action.value;
            return newState
        default:
            return state
    }
}
