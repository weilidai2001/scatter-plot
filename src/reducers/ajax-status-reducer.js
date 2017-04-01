import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function ajaxStatusReducer(state = initialState.isAjaxCallsInProgress, action) {
    return action.type === types.AJAX_CALL_BEGIN;
}
