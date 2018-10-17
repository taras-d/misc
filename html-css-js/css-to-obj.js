
var css = 'display: block; margin: 20px auto; background-image: url(bg.png); border-top-left-radius: 10px;';
var obj = cssToObj(css);
console.log(obj);
// {
//   	dispaly: 'block',
//   	margin: '20px auto',
//   	backgroundImage: 'url(bg.png)',
//   	borderTopLeftRadius: '10px'
// }

// Convert CSS rules to object with lowerCamelCased properties
function cssToObj(css) {
  	if (!css) {
  		  return null;
  	}
  	var rules = css.split(';'),
  		  rule, obj = {};
  	for (var i = 0; i < rules.length; ++i) {
    		rule = parseCssRule(rules[i]);
    		if (rule) {
      			rule.prop = cssPropToLcc(rule.prop);
      			obj[rule.prop] = rule.val;
    		}
  	}
  	return obj;
}

// Parses CSS rule and returns property and value
function parseCssRule(rule) {
  	if (!rule) {
  		  return null;
  	}
  	var parts = rule.split(':');
  	if (parts[0] && parts[1]) {
    		return {
      			prop: parts[0].trim(),
      			val: parts[1].trim()
    		};
  	} else {
  		  return null;
  	}
}

// Convert CSS property to lowerCamelCase (LCC)
function cssPropToLcc(prop) {
  	if (!prop) {
  		  return null;
  	}
  	var parts = prop.toLowerCase().split('-'),
  		  res = parts[0];
  	for (var i = 1; i < parts.length; ++i) {
  		  res += parts[i][0].toUpperCase() + parts[i].slice(1);
  	}
  	return res;
}
