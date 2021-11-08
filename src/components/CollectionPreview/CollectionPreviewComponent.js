import React from 'react'
import './CollectionPreviewStyle.scss'
import CollectionItemComponent from '../collection-item/CollectionItemComponent'


export default function CollectionPreviewComponent({title,items}) {
  return (
    <div className="collection-preview"> 
        <h1 className="title">
           {title}
        </h1>
        <div className="preview">
          {items.filter((item,index)=> index<4).map(({id, ...otherItem}) =>{
            return(
              <CollectionItemComponent key={id} {...otherItem}/>
              // <div key={item.id}>{item.name}</div>
            )
          })}
        </div>
    </div>
  )
}
