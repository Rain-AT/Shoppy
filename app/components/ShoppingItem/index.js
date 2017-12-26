/**
*
* ShoppingItem
*
*/

import React from 'react';
import styled from 'styled-components';

import { transition } from 'style-utils.js';

const ItemWrapper = styled.div`
	width: 50%;
	height: 320px;
	display: inline-flex;
	text-transform: uppercase;
	text-align: center;
	margin-bottom: 2px;

  > div {
  	width: 100%;
  	height: 100%;
  	margin: 0 2px;
  	cursor: pointer;
  	box-shadow: 0 2px 3px #999;
  	${ transition('all', '0.3s', 'ease-out') }

  	&:hover {
  		box-shadow: 0 2px 7px #333;
  	}
  }
  &:nth-child(even) {
  	> div {
  		box-shadow: 0 2px 3px #999;

  		&:hover {
  			box-shadow: 0 2px 7px #333;
  		}
  	}
  }
	h4 {
		font-size: 14px;
		margin-bottom: 5px;
	}
	h5 {
		font-size: 10px;
		font-weight: normal;
		margin-top: 0;
	}
	p {
		width: 282px;
		height: 200px;
		margin-left: auto;
		margin-right: auto;

		img {
			width: 100%;
		}
	}
	strong {
		display: block;
		font-size: 14px;
		font-weight: normal;
	}
	.line-through {
		display: inline-block;
		font-size: 10px;
		text-decoration: line-through;
		padding: 0 10px;
	}
	span {
		font-size: 14px;
	}
`;

function ShoppingItem({data}) {
	const { category, name, image, price, salePrice } = data;
	const priceClass = salePrice ? 'line-through' : '';

  return (
    <ItemWrapper>
    	<div>
    		<h4>{category}</h4>
    		<h5>{name}</h5>
    		<p><img src={image} alt="" /></p>
    		<strong className={priceClass}>{price}</strong>
    		<span>{salePrice}</span>
    	</div>
    </ItemWrapper>
  );
}

ShoppingItem.propTypes = {

};

export default ShoppingItem;
