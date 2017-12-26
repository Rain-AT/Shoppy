/**
*
* CartIcon
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import cartIcon from 'images/cart_icon.png';

const CartWrapper = styled(Link)`
	float: right;
	width: 20px;
	cursor: pointer;
	position: relative;
	top: -3px;

	img {
		width: 100%;
	}
	span {
		background: #000;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		color: #fff;
		font-size: 9px;
		position: absolute;
		left: -5px;
		top: 5px;
		padding-top: 2px;
		font-family: 'sfu_futurabold';
	}
`;

function CartIcon({numItems}) {
  return (
    <CartWrapper>
    	<img src={cartIcon} alt="your shopping cart" />
    	<span>{numItems}</span>
    </CartWrapper>
  );
}

CartIcon.propTypes = {

};

export default CartIcon;
