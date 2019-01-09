import { fetchData } from './api';
import { globalConstants, paths } from './../constants';
import sinon from 'sinon';

describe("fetchData", () => {
    it("should return proper response for proper url", () => {
        const spy = sinon.spy();

        fetchData(globalConstants.GET_STRING, paths.TEST_FILE, spy);
        expect(spy.calledWith('get', 200, 4)).toBe(true);
    });
});