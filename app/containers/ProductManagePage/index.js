/*
 *
 * ProductManagePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectProductManagePage from './selectors';
import messages from './messages';
import styled from 'styled-components';

const ProductManageWrapper = styled.div`
  width: 50%;
  margin: 20px auto;

  input {
    display: block;
    background: #fff;
    border: 1px solid #000;
    padding: 5px 10px;
  }
`;

export class ProductManagePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      image: '',
      name: '',
      price: '',
      salePrice: ''
    };
  }

  render() {
    return (
      <ProductManageWrapper>
        <Helmet
          title="ProductManagePage"
          meta={[
            { name: 'description', content: 'Description of ProductManagePage' },
          ]}
        />        
        {
          //<FormattedMessage {...messages.header} />
        }

        {this.state.image && <img src={this.state.image} role='presentation' className='w-100' />}
        <input className='w-100' type="file" name="fileUpload" onChange={e => {
          console.log(e, e.target.value);
          this.setState({file: e.target.files[0]});
          
          const reader = new FileReader();
          reader.onload = e => {                  
            this.setState({image: e.target.result});
          }
          reader.readAsDataURL(e.target.files[0]);
        }} />
        <input className='w-100' value={this.state.name} placeholder='Product Name' onChange={e => this.setState({name: e.target.value})} />
        <input className='w-100' value={this.state.price} placeholder='Product Price' onChange={e => this.setState({price: e.target.value})} />
        <input className='w-100' value={this.state.salePrice} placeholder='Product Sale Price' onChange={e => this.setState({salePrice: e.target.value})} />
        {this.state.name && this.state.image && this.state.price && this.state.salePrice &&
          <button className='pa3' onClick={this.handlePost}>Add new product</button>}
      </ProductManageWrapper>
    );
  }
}

ProductManagePage.propTypes = {
  //dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ProductManagePage: makeSelectProductManagePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default ProductManagePage;
