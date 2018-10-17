
// Define namespace
function ns(path) {
	var parts = path.split('.'),
		parent = window;
	for (var i = 0; i < parts.length; ++i) {
		if (parent[parts[i]] === undefined) {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
}

ns('MyApp.Services.Data');
ns('MyApp.Utils');

console.log(MyApp);