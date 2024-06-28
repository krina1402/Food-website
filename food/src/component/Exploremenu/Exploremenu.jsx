
import React from 'react';
import './Exploremenu.css';
import { menu_list } from '../../../assets/assets';

function Exploremenu({ category, setCategory }) {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolor aliquid unde sapiente ducimus consequatur, ipsa dolorum et praesentium velit. Consequuntur soluta ratione minus distinctio voluptate voluptatibus assumenda facere modi!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div 
            key={index} 
            className="explore-menu-list-item"
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
          >
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt=''/>
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Exploremenu;
