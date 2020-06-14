import * as actionTypes from '../actions/constants';

const initialState = {
    pageLoaded: false,
    error: false,
    issues: [
        {
            issue: '',
            date: '',
            author: '',
            texts: [],
            bio: {
                title: '',
                content: '',
                slug: ''
            }
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PAGE_LOADED:
            return {
                ...state,
                pageLoaded: action.pageLoaded
            };
        case actionTypes.SET_ISSUES:
            return {
                ...state,
                issues: action.issues
            };
        case actionTypes.SET_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export default reducer;