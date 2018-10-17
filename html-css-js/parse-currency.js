
var curr = [
  '$ 123',
  '€ 400',
  '$ 1,500.55',
  '€ 1,250,456.67',
  '12 $',
  '24 €',
  '3.54 $',
  '4,500.34 €',
  '22,556,789 $'
];

function parseCurrency(str) {
  
  var leftRe = /^([^\s0-9]+)\s*(\d[\d.,]+)$/,
      rightRe = /^(\d[\d.,]+)\s*([^\s0-9])$/;
  
  var isLeft = leftRe.test(str),
      isRight = rightRe.test(str);
  
  if (isLeft || isRight) {
    
    var sign = isLeft? RegExp.$1: RegExp.$2,
        signPos = isLeft? 'left': 'right',
        val = isLeft? RegExp.$2: RegExp.$1,
        num = parseFloat( val.replace(/,/g, '') );
    
    return {
      sign: sign,
      signPos: signPos,
      val: val,
      num: num
    };
    
  }
  
  return null;
  
}

for (var i = 0; i < curr.length; ++i) {
  console.log(
    parseCurrency(curr[i])
  );
}
