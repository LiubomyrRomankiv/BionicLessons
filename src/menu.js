'use strict';

let drawActiveMenuItems = () => {
  let menuItems = document.querySelectorAll('.menu-item');
  let hash = location.hash;
  
  for (let i = 0; i < menuItems.length; i++) {
    let href = menuItems[i].getAttribute('href');
    if (href === hash){
      menuItems[i].style.color = 'red';
      break;
    }
  }
};

let createMenu = ( selectorId, itemsArray ) => {
  let menuBlock = document.getElementById(selectorId);
  let menu = document.createElement('ul');
  menu.setAttribute('id','menu');
  menu.setAttribute('class','menu');
  for (let i = 0; i < itemsArray.length; i++){
    let menuItem = createMenuItem(itemsArray[i], i);
    menu.appendChild(menuItem);
  }
  menuBlock.appendChild(menu);
};

let createMenuItem = (item, itemId) => {
  let menuItem = document.createElement('li');
  let menuItemLink = document.createElement('a');
  menuItemLink.setAttribute('id','menu-item'+itemId);
  menuItemLink.setAttribute('class','menu-item menu-item'+itemId);
  menuItemLink.setAttribute('href',item.link);
  menuItemLink.innerHTML = item.text;
  menuItem.appendChild(menuItemLink);
  return menuItem;
};

export default {
  drawActiveMenuItems,
  createMenu
};