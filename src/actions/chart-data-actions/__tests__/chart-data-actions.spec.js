import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';
import { SERVER_URL } from '../../../../config';
import { loadChartData, loadChartDataSuccess } from '../';
import initialState from '../../../reducers/initial-state';
import { beginAjaxCall, ajaxCallError, ajaxCallSuccess } from '../../ajax-status-actions';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('loadChartData()', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('dispatch a beginAjaxCall()', () => {
        const stubReturnedData = {
            minX: 0,
            maxX: 0,
            minY: 0,
            maxY: 0,
            points: []
        };

        nock(`${SERVER_URL}/`)
            .get('/scatter-data')
            .reply(200, stubReturnedData);

        const expectedActions = [
            beginAjaxCall(),
            ajaxCallSuccess(),
            loadChartDataSuccess(stubReturnedData)
        ];

        const store = mockStore({ ...initialState });

        return store.dispatch(loadChartData())
            .then(() => { // return of async actions
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});
