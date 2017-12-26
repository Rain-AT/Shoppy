/**
*
* MenuButton
*
*/

import React from 'react';
import styled from 'styled-components';

import { transition } from 'style-utils.js';

const MenuButtonWrapper = styled.a`
	position: relative;
	display: inline-block;
	width: 20px;
	height: 17px;
	cursor: pointer;
	float: left;
	position: relative;
	top: 5px;

	&:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		display: block;
		width: 20px;
		height: 2px;
		background: #000;
		transform-origin: 0 0;
		${ transition('all', '0.5s', 'ease-out-back') }
	}
	span {
		position: absolute;
		left: 0;
		top: 7px;
		display: block;
		width: 13px;
		height: 2px;
		background: #000;
		${ transition('all', '0.5s', 'ease-out-back') }
	}
	&:after {
		content: '';
		position: absolute;
		left: 0;
		top: 14px;
		display: block;
		width: 16px;
		height: 2px;
		background: #000;
		transform-origin: 0 100%;
		${ transition('all', '0.5s', 'ease-out-back') }
	}
	&:hover {

		&:before,
		&:after {
			width: 13px;
		}
		span {
			width: 20px;
		}
	}
	&.is-open {
		&:before {
			width: 20px;
			transform: rotate(45deg);
			${ transition('all', '0.5s', 'ease-out') }
		}
		&:after {
			width: 20px;
			transform: rotate(-45deg);
			${ transition('all', '0.5s', 'ease-out') }
		}
		span {
			opacity: 0;
			${ transition('all', '0.3s', 'ease-out') }
		}
	}
`;


function MenuButton({onClickMenuHandler, menuState}) {
	const menuStateClass = menuState ? 'is-open' : '';

  return (
    <MenuButtonWrapper className={menuStateClass} onClick={onClickMenuHandler}>
    	<span></span>
    </MenuButtonWrapper>
  );
}

MenuButton.propTypes = {
	onClickMenuHandler: React.PropTypes.func,
	menuState: React.PropTypes.bool,
};

export default MenuButton;
