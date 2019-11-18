const getValue = require('get-value');
module.exports.jsonSorting = (array, keyPath, datatype, sortOrder) => {
	if (!sortOrder) {
		sortOrder = 'asc';
	}
	datatype = datatype.toLowerCase();
	if (datatype === 'int') {
		if (sortOrder === 'asc') {
			array = array.sort((obj1, obj2) => {
				let val1 = getValue(obj1, keyPath);
				let val2 = getValue(obj2, keyPath);
				return val1 - val2;
			});
			return array;
		} else if (sortOrder === 'desc') {
			array = array.sort((obj1, obj2) => {
				let val1 = getValue(obj1, keyPath);
				let val2 = getValue(obj2, keyPath);
				return val2 - val1;
			});
			return array;
		}
	}
	if (datatype === 'string') {
		if (sortOrder === 'asc') {
			array = array.sort((obj1, obj2) => {
				let val1 = getValue(obj1, keyPath);
				let val2 = getValue(obj2, keyPath);
				return val1 > val2 ? 1 : val2 > val1 ? -1 : 0;
			});
			return array;
		} else if (sortOrder === 'desc') {
			array = array.sort((obj1, obj2) => {
				let val1 = getValue(obj1, keyPath);
				let val2 = getValue(obj2, keyPath);
				return val1 < val2 ? 1 : val2 < val1 ? -1 : 0;
			});
			return array;
		} else return array;
	}
};
