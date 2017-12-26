/*
 *
 * Header
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';

import MenuButton from 'components/MenuButton';
import CartIcon from 'components/CartIcon';
import Menu from 'components/Menu';

const HeaderWrapper = styled.header`
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  background: #fff;
  height: 52px;

  .header-content {
    background: #fff;
    padding: 12px 15px;
    box-shadow: 0px 2px 5px #bbb;
    position: relative;
    z-index: 99;
  }
    h1 {
      font-size: 18px;
      display: inline-block;
      margin: 0;
    }
`;

export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();

    this.state = {
      menuIsOpen: false
    };
  }

  handleMenuClick = (e) => {
    e.preventDefault();

    this.setState((prevState, props) => {
      return {
        menuIsOpen: !prevState.menuIsOpen
      };
    });
  }

  render() {
    const { menuIsOpen } = this.state;

    return (
      <HeaderWrapper>
        <div className="header-content">
          <MenuButton onClickMenuHandler={this.handleMenuClick} menuState={menuIsOpen} />
          <h1><FormattedMessage {...messages.header} values={{name: 'Hahaha'}} /></h1>
          <CartIcon numItems="7" />
        </div>
        <Menu menuState={menuIsOpen} />
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Header);
