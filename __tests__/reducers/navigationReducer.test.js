import reducer from '../../src/js/reducers/navigationReducer';
import {
    NAV_HOME,
    CHANGE_VIEW
} from '../../src/js/constants.js';

describe('Navigation Reducer (default state)', () => {

    it('has a default state', () => {
        expect(reducer(undefined, {
            type: 'unexpected'
        })).toEqual({
            view: {
                viewID: 1
            }
        });
    });

});

describe('Navigation Reducer (opening home page)', () => {

    it('can handle NAV_HOME', () => {
        expect(reducer(undefined, {
            type: 'NAV_HOME'
        })).toEqual({
            view: {
                viewID: 1
            }
        });
    });

});

describe('Navigation Reducer (changing view)', () => {

    it('can handle CHANGE_VIEW', () => {
        expect(reducer(undefined, {
            type: 'CHANGE_VIEW',
            payload: {
                viewPayload: 'some payload'
            }
        })).toEqual({
            view: {
                viewPayload: 'some payload'
            }
        });
    });

});