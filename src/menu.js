'use strict';

let drawActiveMenuItems = () => {
	let activeMenuItems = document.querySelectorAll('.active');

	for (let i = 0; i < activeMenuItems.length; i++) {
		activeMenuItems[i].style.color = 'red';
	}
};


// let wrapper = document.getElementById('wrapper');
// let menu = document.getElementsByClassName('menu');
// let activeElement = document.querySelector('.active');
// let activeElements = document.querySelectorAll('.active');
// let result = activeElement.matches('.my-class');
// let menu = document.getElementsByTagName('menu');
// let menu = document.getElementsByName('menu');

export default {
	drawActiveMenuItems
};