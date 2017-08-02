import _ from 'lodash';

let sayHello = () => {
	let message = _.join(['Hello', 'webpack'], ' ');

	console.log(message);
	console.log(message);
	console.log(message);
	console.log(message);
	console.log(message);
	console.log(message);
}

export default sayHello;