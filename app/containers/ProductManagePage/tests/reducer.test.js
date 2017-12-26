
import { fromJS } from 'immutable';
import productManagePageReducer from '../reducer';

describe('productManagePageReducer', () => {
  it('returns the initial state', () => {
    expect(productManagePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
