'use strict';

import _ from 'lodash';

let sayHello = () => {
	let message = _.join(['Hello', 'webpack'], ' ');

	return message;
};

export default sayHello;