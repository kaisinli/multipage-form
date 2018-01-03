// initial state
const basicInfoInitialState = {
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    city: '',
    state: '',
    country: '',
    school: ''
}

// action
const UPDATE_BASIC_INFO = 'UPDATE_BASIC_INFO';

// action creator
export const updateBasicInfo = (info) => ({
    type: UPDATE_BASIC_INFO,
    info
})

// thunk creator
export const putBasicInfo = (info) =>
    dispatch => dispatch(updateBasicInf(info))

// reducer
export default function (state = basicInfoInitialState, action) {
    switch (action.type) {
        case UPDATE_BASIC_INFO:
            let newBasicInfo = Object.assign({}, state);
            newBasicInfo[action.info] = action.info;
            return newBasicInfo;
        default:
            return state
    }
}