/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';

import ItemList from 'containers/ItemList';

const HomepageWrapper = styled.div`

`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HomepageWrapper>
        <Helmet
          title="Product List"
          meta={[
            { name: 'description', content: 'Description of Product List' },
          ]}
        />
        <ItemList />
      </HomepageWrapper>
    );
  }
}
