// Ext JS 4.2.0 
// http://docs.sencha.com/extjs/4.2.0/#!/api/Ext

// browser
Ext.isChrome
Ext.isOpera
var isFirefox = (Ext.firefoxVersion != 0);

// empty function
Ext.emptyFn

// apply properties
var obj = { },
	cfg = { x: 1, y: 2 };
Ext.apply(obj, cfg); // obj = { x: 1, y: 2 }

// apply if property not exist
var obj = { x: 1 },
	cfg = { x: 10, y: 20 };
Ext.applyIf(obj, cfg); // obj = { x: 1, y: 20 }

// clone object
var obj1 = { x: 1, x: 2 };
	obj2 = Ext.clone(obj1);
	
// copy specified properties
var obj1 = { x: 1, y: 2, z: 3 },
	obj2 = { };
Ext.copyTo(obj2, obj1, 'x,y'); // obj2 = { x: 1, y: 2 }

// define class
Ext.define('Vehicle.Car', {
	alternateClassName: 'Car',
	speed: 0,
	move: function() {
		console.log('Move: ' + (this.speed += 10) + ' km/h');
	}
});

// create class instance
var car = Ext.create('Vehicle.Car'); // Ext.create('Car');
car.move();

// iterate array
var items = ['orange', 'banana', 'apple'];
Ext.each(items, function(item, index, allItems) { // Ext.iterate(...)
	console.log(item);
	// return false to stop iteration
});

// JSON encode/decode
Ext.encode({ x: 1, y: 2 });
Ext.decode('{ "x": 10, "y": 20 }');

// get document, head, body
Ext.getDoc();
Ext.getHead();
Ext.getBody();

// get element by id
Ext.get('elmentId');
Ext.getDom('elmentId');

// get elements by selector
Ext.select('div');
Ext.query('div');

// get component by id
Ext.getCmp('componentId');

// get class by object
var obj = Ext.create('Car');
Ext.getClass(obj);
Ext.getClassName(obj);

// generate unique id
Ext.id();

// merge objects
var obj1 = { },
	obj2 = { x: 1, y: 2 },
	obj3 = { z: 3 };
Ext.merge(obj1, obj2, obj3); // obj1 = { x: 1, y: 2, z: 3 }

// merge objects if not exist
var obj1 = { x: 9 },
	obj2 = { x: 1, y: 2 },
	obj3 = { z: 3 };
Ext.mergeIf(obj1, obj2, obj3); // obj1 = { x: 9, y: 2, z: 3 }

// execute function when DOM is ready
Ext.onReady(function() {
	// ...
});


// Array - clean (Ext.clean)
var items = [0, 1, null, 2, undefined, 3, ''];
Ext.Array.clean(items); // [0, 1, 2, 3]

// Array - contains
var items = ['one', 'two', 'three'];
Ext.Array.contains(items, 'one');

// Array - max / min (Ext.min, Ext.max)
var items = [1, 2, 3, 4, 5];
Ext.Array.max(items);
Ext.Array.min(items);

// Array - sum (Ext.sum)
var items = [1, 2, 3];
Ext.Array.sum(items);

// Array - filter
var items = [1, 2, 3, 4, 5, 6];
Ext.Array.filter(items, function(item, index, array) {
	return (item % 2 == 0);
}); // [2, 4, 6]


// Date - add
var date = new Date(2015, 0, 1);
Ext.Date.add(date, Ext.Date.DAY, 5); // 06.01.2015
Ext.Date.add(date, Ext.Date.MONTH, 1); // 01.02.2015

// Date - format
var date = new Date();
Ext.Date.format(date, 'd.m.Y'); // '18.03.2015'
Ext.Date.format(date, 'd.m.Y h:i'); // '18.03.2015 09:40'
Ext.Date.format(date, 'Y-m-d H:i:s'); // '2015-03-18 09:39:02'

// Date - is leap year
Ext.Date.isLeapYear(new Date());

// Date - days in month
Ext.Date.getDaysInMonth(new Date(2015, 0, 1)); // 31
Ext.Date.getDaysInMonth(new Date(2015, 1, 1)); // 28


// Error
Ext.Error.handle = function(error) {
	console.log(error);
	// return true if error handled
	return true;
};
Ext.Error.raise('Something wrong');


// Number - random
Ext.Number.randomInt(0, 10);


// Object - each
var obj = { x: 1, y: 2 };
Ext.Object.each(obj, function(key, value, object) {
	console.log(key + ': ' + value);
});

// Object - is empty
Ext.Object.isEmpty({}); // true
Ext.Object.isEmpty({ x: 1 }); // false

// Object - get keys/values
var obj = { x: 1, y: 2 };
Ext.Object.getKeys(obj); // ['x', 'y']
Ext.Object.getValues(obj); // [1, 2]

// Object - get properties count
var obj = { x: 1, y: 2 };
Ext.Object.getSize(obj);

// Object - to query string
var obj = { id: '123', tag: 'data' };
Ext.Object.toQueryString(obj); // 'id=123&tag=data'


// String - capitalize / uncapitalize
Ext.String.capitalize('text'); // 'Text'
Ext.String.uncapitalize('Text'); // 'text'

// String - ellipsis
var text = 'JavaScript is popular script language';
Ext.String.ellipsis(text, 24); // 'JavaScript is popular...'

// String - end with / start with
var ignoreCase = true;
Ext.String.endsWith('Some text', 'Ext', ignoreCase); // true
Ext.String.startsWith('Some text', 'SOM', ignoreCase); // true

// String - format
Ext.String.format('Today is {0}', 'sunny'); // 'Today is sunny'

// String - html encode / decode
Ext.String.htmlEncode('<div>'); // '&lt;div&gt;'
Ext.String.htmlDecode('&lt;div&gt;'); // '<div>'

// String - insert
Ext.String.insert('1245', '3', 2); // '12345'

// String - repeat
Ext.String.repeat('*', 5); // '*****'
Ext.String.repeat('--', 3, '/'); // '--/--/--'

// String - split words
Ext.String.splitWords('Text abc 123'); // ['Text', 'abc', '123']
