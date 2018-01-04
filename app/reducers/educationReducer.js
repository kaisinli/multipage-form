'use strict'

//----------------------------------------< initial state >------------------------------------------
const schoolInitialState = {
    school:[]
}

//----------------------------------------< action >------------------------------------------
const ADD_SCHOOL = 'ADD_SCHOOL';

//----------------------------------------< action creator >------------------------------------------
export const addSchool = (school) => ({
    type: ADD_SCHOOL,
    school
})

//----------------------------------------< thunk creator >------------------------------------------
export const putSchool= (school) =>
    dispatch => dispatch(addSchool(school))

//----------------------------------------< reducer >------------------------------------------
export default function (state = schoolInitialState, action) {
    let newState = Object.assign({}, state);
    switch (action.type) {
        case ADD_SCHOOL:
            newState.school.push(action.school);
            return newState;
        default:
            return state
    }
}