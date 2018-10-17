
var start = -50,
    end = 50,
    duration = 500;

$({ value: start }).animate(
    { value: end },
    { 
        duration: duration,
        step: function(now) {
            console.log(now);
        }
    }
);
