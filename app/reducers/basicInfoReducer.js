//----------------------------------------< initial state >------------------------------------------
const basicInfoInitialState = {
    firstName: '',
    lastName: '',
    email: '',
    website: ''
}

//----------------------------------------< action >------------------------------------------
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_WEBSITE = 'UPDATE_WEBSITE';

//----------------------------------------< action creator >------------------------------------------
export const updateFirstName = (firstName) => ({
    type: UPDATE_FIRST_NAME,
    firstName
})

export const updateLastName = (lastName) => ({
    type: UPDATE_LAST_NAME,
    lastName
})

export const updateEmail = (email) => ({
    type: UPDATE_EMAIL,
    email
})

export const updateWebsite = (website) => ({
    type: UPDATE_WEBSITE,
    website
})

//----------------------------------------< thunk creator >------------------------------------------
export const putFirstName = (firstName) =>
    dispatch => dispatch(updateFirstName(firstName))

export const putLastName = (lastName) =>
    dispatch => dispatch(updateLastName(lastName))

export const putEmail = (email) =>
    dispatch => dispatch(updateEmail(email))

export const putWebsite = (website) =>
    dispatch => dispatch(updateWebsite(website))


//----------------------------------------< reducer >------------------------------------------
export default function (state = basicInfoInitialState, action) {
    switch (action.type) {
        case UPDATE_FIRST_NAME:
            return Object.assign({}, state, { firstName: action.firstName })
        case UPDATE_LAST_NAME:
            return Object.assign({}, state, { lastName: action.lastName })
        case UPDATE_EMAIL:
            return Object.assign({}, state, { email: action.email })
        case UPDATE_WEBSITE:
            return Object.assign({}, state, { website: action.website })
        default:
            return state
    }
}