'use strict';

let drawActiveMenuItems = () => {
  let menuItems = document.querySelectorAll('.menu-item');
  let hash = location.hash;
  
  for (let i = 0; i < menuItems.length; i++) {
    let href = menuItems[i].getAttribute('href');
    let classList = menuItems[i].getAttribute('class');
    if (href === hash){
      menuItems[i].setAttribute('class', classList + ' active');
      break;
    }
  }
};

let createMenu = ( selectorId, itemsArray ) => {
  let menuBlock = document.getElementById(selectorId);
  let attributes = [
    {
      name: 'id',
      val: 'menu'
    },
    {
      name: 'class',
      val: 'menu'
    }
  ];
  let menu = createElement('ul', attributes);
  for (let i = 0; i < itemsArray.length; i++){
    let menuItem = createMenuItem(itemsArray[i], i);
    menu.appendChild(menuItem);
  }
  menuBlock.appendChild(menu);
};

let createMenuItem = (item, itemId) => {
  let attributes = [
    {
      name: 'id',
      val: 'menu-item'+itemId
    },
    {
      name: 'class',
      val: 'menu-item menu-item'+itemId
    },
    {
      name: 'href',
      val: item.link
    }
  ];

  let menuItem = createElement('li');
  let menuItemLink = createElement('a', attributes, item.text);  

  menuItem.appendChild(menuItemLink);
  return menuItem;
};

let createElement = (element, attriburtesArray, text) => {
  let newElement = document.createElement(element);
  if(!!attriburtesArray){
    for(let i = 0; i < attriburtesArray.length; i++){
      newElement.setAttribute(attriburtesArray[i].name, attriburtesArray[i].val);
    }
  }
  if(!!text){
    newElement.innerHTML = text;
  }
  return newElement;
}

export default {
  drawActiveMenuItems,
  createMenu
};