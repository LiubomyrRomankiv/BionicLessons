'use strict';

import sayHello from './user.js';
import menu from './menu.js';
// import './style.css';

sayHello();

menu.drawActiveMenuItems();



let newElement = document.createElement('a');

// newElement.innerHTML = '<span>This is my new link</span>';
newElement.text = 'This is my new link';
newElement.setAttribute('href', '#');
// newElement.getAttribute('href'); // -> '#'


let parentElement = document.body;

parentElement.appendChild(newElement);