/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'containers/Header';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Helmet titleTemplate="%s | Shoppy">
          <meta charSet="utf-8" />
          <title>Shoppy</title>          
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Header />
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
