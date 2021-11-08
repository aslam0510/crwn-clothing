import React, { Component } from 'react'
import CollectionPreviewComponent from '../../components/CollectionPreview/CollectionPreviewComponent';
import SHOP_DATA from './ShopData';
export default class ShopComponent extends Component {
  constructor(props){
    super();

    this.state ={
      collection : SHOP_DATA
    }
  }
  render() {
    const {collection} = this.state;

    return (
      <div className="shop-page">
        <h1>Collections</h1>
        {
          collection.map(({id,...otherProps}) =>{
            return(
              <CollectionPreviewComponent key={id}{...otherProps}/>
            )
          })
        }
      </div>
    )
  }
}
