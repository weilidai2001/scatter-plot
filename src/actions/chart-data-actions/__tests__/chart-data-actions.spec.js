import expect from 'expect';
import { loadChartData } from '../';
import { beginAjaxCall, ajaxCallError, ajaxCallSuccess } from '../../ajax-status-actions';
import * as exports from '../../../api/chart-data-api';

describe('loadChartData()', () => {
    it('dispatch a beginAjaxCall()', () => {
        spyOn(exports, 'getAllChartData'); // Mock
        exports.getAllChartData = () => Promise.resolve({});

        const dispatch = expect.createSpy();
        loadChartData()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(beginAjaxCall());
    });
});
