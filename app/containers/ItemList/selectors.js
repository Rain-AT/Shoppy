import { createSelector } from 'reselect';

/**
 * Direct selector to the itemList state domain
 */
const selectItemListDomain = () => (state) => state.get('itemList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ItemList
 */

const makeSelectItemList = () => createSelector(
  selectItemListDomain(),
  (itemListState) => {    
    if (typeof itemListState != 'undefined') {
      return itemListState.get('productList');
    }
    return {};
  }
);

export {
  selectItemListDomain,
  makeSelectItemList,
};
