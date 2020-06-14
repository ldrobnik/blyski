import * as actionTypes from './constants';

//Specifies whether the spinner or the content should be shown
export const setPageLoaded = (pageLoaded) => {
    return {
        type: actionTypes.SET_PAGE_LOADED,
        pageLoaded
    }
};

//Updates issue data fetched from the Worpdress API
export const setIssues = (issues) => {
    return {
        type: actionTypes.SET_ISSUES,
        issues
    }
};

//Specifies whether there was an error fetching Wordpress data
export const setError = (error) => {
    return {
        type: actionTypes.SET_ERROR,
        error
    }
};