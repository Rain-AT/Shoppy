import { createSelector } from 'reselect';

/**
 * Direct selector to the productManagePage state domain
 */
const selectProductManagePageDomain = () => (state) => state.get('productManagePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProductManagePage
 */

const makeSelectProductManagePage = () => createSelector(
  selectProductManagePageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProductManagePage;
export {
  selectProductManagePageDomain,
};
