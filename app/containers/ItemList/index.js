/*
 *
 * ItemList
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { makeSelectItemList } from './selectors';
import messages from './messages';
import styled from 'styled-components';
import { Link } from 'react-router';
import axios from 'axios';
import firebase from 'firebase';

import { loadProductList } from './actions';

import ShoppingItem from 'components/ShoppingItem';

import productImg1 from 'images/products/img_1.png';
import productImg2 from 'images/products/img_2.png';

const ItemListWrapper = styled.section`
  text-align: center;

  > a {
    display: inline-block;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      color: #00f;
    }
  }
`;


export class ItemList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();

    this.state = {
      keyIndex: null
    };                          
  }

  componentDidMount() {
    this.props.loadInitialData();

    /*var productsRef = firebase.database().ref('products');
    productsRef.on('value', snapshot => {
      console.log(snapshot.val());
      this.setState({
        products: snapshot.val()
      });
    });*/
  }

  render() {
    const productList = this.props.productList;
    const startKey = Object.keys(productList).sort().pop();
    const renderProductList = [];
    
    //console.log('productList', Object.keys(productList).sort());

    Object.entries(productList).forEach(([key, value]) => {
      if (typeof value === 'object') {
        renderProductList.push(<ShoppingItem key={key} data={value} />);
      }
    });


    return (
      <ItemListWrapper>
        {renderProductList}
        <Link data-key={startKey} onClick={this.props.onGetProductList}>View more</Link>
      </ItemListWrapper>
    );
  }
}

ItemList.propTypes = {
  //productList: PropTypes.array.isRequired,
  onGetProductList: React.PropTypes.func,
  loadInitialData: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  productList: makeSelectItemList(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetProductList: (evt) => {
      //evt.currentTarget.remove();
      let keyIndex = evt.currentTarget.getAttribute('data-key');
      let payload = {
        startIndex: keyIndex,
        numData: 6
      };
      dispatch(loadProductList(payload));
    },
    loadInitialData: (numData = 6) => {
      let payload = {
        startIndex: 0,
        numData: numData
      };
      dispatch(loadProductList(payload));
    },
  };
}

//export default ItemList;
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);