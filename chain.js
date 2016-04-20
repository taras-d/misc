
function chain(fnArr) {
    if (!fnArr || fnArr.length == 0) {
        return;
    }
    /*
    fnArr[2] = fnArr[2].bind(this, function(){});
    fnArr[1] = fnArr[1].bind(this, fnArr[2]);
    fnArr[0] = fnArr[0].bind(this, fnArr[1]);
    fnArr[0]();
    */
    for (var i = fnArr.length-1; i >= 0; --i) {
        var next = fnArr[i+1] || function() { };
        fnArr[i] = fnArr[i].bind(this, next);
    }
    fnArr[0]();
}


function f1(next) {
    // simulate callback (2 sec)
    setTimeout(function () {
        console.log('f1 callback', this);
        next();
    }.bind(this), 2000);
}

function f2(next) {
    // simulate callback (1 sec)
    setTimeout(function () {
        console.log('f2 callback', this);
        next();
    }.bind(this), 1000);
}

function f3(next) {
    // simulate callback (3 sec)
    setTimeout(function () {
        console.log('f3 callback', this);
        next();
    }.bind(this), 3000);
}

function f4(next) {
    // simulate callback (2 sec)
    setTimeout(function () {
        console.log('f4 callback', this);
        next();
    }.bind(this), 2000);
}

function f5() {
    // simulate callback (1 sec)
    setTimeout(function () {
        console.log('f5 callback', this);
    }.bind(this), 1000);
}

/*

    chain();

    chain([]);

    chain([
        f1
    ]);

    chain([
        f1,
        f2,
        f3,
        f4,
        f5
    ]);

    chain.call({}, [
        f1,
        f2,
        f3,
        f4,
        f5
    ]);

    chain([
        f1,
        f2.bind({}),
        f3,
        f4.bind({}),
        f5
    ]);

*/