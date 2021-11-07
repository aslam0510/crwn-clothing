import React  from 'react'
import './MenuItem.style.scss';
import { withRouter } from 'react-router-dom';

 function MenuItemComponent({ title, imageUrl, size,history,match,linkUrl}) {
  
  const onCardClick = () =>{
    console.log(match);
    console.log(history);
    console.log('clicked');
    history.push(`${match.url}${linkUrl}`)
  }

  return (
    <>
      <div className={`${size} menu-item`} onClick={onCardClick}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})`}}
        ></div>
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </>
  );
}

export default withRouter(MenuItemComponent)