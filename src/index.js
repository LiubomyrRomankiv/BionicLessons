'use strict';

import sayHello from './user.js';
import menu from './menu.js';
import menuItemsList from './menu.json';
// import './style.css';

sayHello();

menu.createMenu('wrapper', menuItemsList);

menu.drawActiveMenuItems();