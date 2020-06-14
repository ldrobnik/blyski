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