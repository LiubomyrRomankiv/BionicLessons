'use strict';

import sayHello from './user.js';
import menu from './menu.js';
import menuItemsList from './menu.json';
import './main.scss';

sayHello();

menu.createMenu('wrapper', menuItemsList);
menu.drawActiveMenuItems();
menu.initMenu();