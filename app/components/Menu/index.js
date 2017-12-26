/**
*
* Menu
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import gsap from 'react-gsap-enhancer';
import {TimelineMax} from 'gsap';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { gradientBg, gradientLine, transition } from 'style-utils.js';

const MenuWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding-top: 52px;
	${ gradientBg() };
	z-index: 90;
	overflow: hidden;
	display: none;

	&.is-open {
		display: block;
	}
	ul {
		list-style-type: none;
		text-align: left;
		font-size: 15px;
	}
	li {
		margin-top: 45px;
		position: relative;

		&:hover {
			a {
				padding-left: 30px;
				${ transition('all', '0.5s', 'ease-out-back') }

				&:before {
					width: 20px;
					opacity: 1;
					${ transition('all', '0.5s', 'ease-out') }
				}
			}
		}
	}
	a {
		color: #000;
		display: block;
		text-decoration: none;
		position: relative;
		${ transition('all', '0.3s', 'ease-out', '0.2s') }

		&:before {
			content: '';
			display: inline-block;
			position: absolute;
			top: 40%;
			left: 0;
			overflow: hidden;
			${ gradientLine('20px', '1px') };
			opacity: 0;
			width: 0;
			${ transition('all', '0.3s', 'ease-out') }
		}
	}
`;


export class Menu extends React.Component { // eslint-disable-line react/prefer-stateless-function
//function Menu({menuState}) {

	showMenuAnimation({target}) {
		let timelineMax = new TimelineMax({paused: true});
		const menuWrapper = target[0];

		timelineMax.addLabel('show').set(menuWrapper, {
      display: 'block',
      height: 0
    });

    let liList = menuWrapper.querySelectorAll('li'),
    		liTag = null;
    for (let i = 0, l = liList.length; i < l; i++) {
    	liTag = liList[i];
    	timelineMax.set(liTag, {
    		opacity: 0,
    		left: 90
    	});
    }

    timelineMax.to(menuWrapper, 0.5, {
      height: '100%'
    });
    for (let i = 0, l = liList.length; i < l; i++) {
    	liTag = liList[i];

	    timelineMax.to(liTag, 0.45, {
    		opacity: 1,
	      left: 0,
	      ease: Back.easeOut
	    }, 0.1 * i);

	    if (i === l - 1) {
	    	timelineMax.addPause();
	    }
    }

    timelineMax.addLabel('hide').to(menuWrapper, 0.5, {
      height: 0
    }).set(menuWrapper, {
      display: 'none'
    }).addPause();

		return timelineMax;


   /*return new TimelineMax({paused: true})
	    .addLabel('show').set(menuWrapper, {
	      display: 'block',
	      height: 0
	    }).to(menuWrapper, 0.5, {
	      height: '100%'
	    }).addPause()
	    .addLabel('hide').to(menuWrapper, 0.5, {
	      height: 0
	    }).set(menuWrapper, {
	      display: 'none'
	    }).addPause();*/
	}

	onShowMenuComplete() {
		alert('done');
	}

	componentDidMount() {
    this.animation = this.addAnimation(this.showMenuAnimation);
  }

  componentWillReceiveProps({ menuState }) {
  	if (menuState) {
  		this.animation.play('show');
  	} else {
  		this.animation.play('hide');
  	}
  }

	render() {
		const { menuState } = this.props;
		const menuStateClass = menuState ? 'is-open' : '';

	  return (
	    <MenuWrapper className={menuStateClass}>
	    	<ul>
	    		<li>
	    			<Link to="/"><FormattedMessage {...messages.home} /></Link>
	    		</li>
	    		<li>
	    			<Link to="/wallet"><FormattedMessage {...messages.wallet} /></Link>
	    		</li>
	    		<li>
	    			<Link to="/brands"><FormattedMessage {...messages.brands} /></Link>
	    		</li>
	    		<li>
	    			<Link to="/buy"><FormattedMessage {...messages.buy} /></Link>
	    		</li>
	    		<li>
	    			<Link to="/profile"><FormattedMessage {...messages.profile} /></Link>
	    		</li>
	    		<li>
	    			<Link to="contact-us"><FormattedMessage {...messages.contactUs} /></Link>
	    		</li>
	    	</ul>
	    </MenuWrapper>
	  );
	}
}

Menu.propTypes = {

};

export default gsap()(Menu);