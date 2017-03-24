
function KeywordInterceptor(options) {

    options = options || {};

    this.onkeyword = null;

    this._timeoutId = null;
    this._delay = options.delay || 1000;
    this._keywords = options.keywords || {};
    this._keys = [];
    
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onStopTyping = this._onStopTyping.bind(this);
}

KeywordInterceptor.prototype.start = function() {
    window.addEventListener('keydown', this._onKeyDown);
}

KeywordInterceptor.prototype.stop = function() {
    window.removeEventListener('keydown', this._onKeyDown);
    this._keys = [];
}

KeywordInterceptor.prototype._onKeyDown = function(event) {
    
    if (this._inputFocused()) {
        return;
    }

    this._keys.push(event.keyCode || event.which);
    
    if (this._timeoutId !== null) {
        clearTimeout(this._timeoutId);
    }
    
    this._timeoutId = setTimeout(this._onStopTyping, this._delay);
}

KeywordInterceptor.prototype._onStopTyping = function() {

    if (typeof this.onkeyword === 'function') {
        var name = this._getKeyword();
        if (name) {
            this.onkeyword(name);
        }
    }

    this._keys = [];
}

KeywordInterceptor.prototype._getKeyword = function() {
    var keys = this._keys.join(',');
    for (var name in this._keywords) {
        if (this._keywords[name] === keys) {
            return name;
        }
    }
    return null;
}

KeywordInterceptor.prototype._inputFocused = function() {
    var el = document.activeElement;
    return (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'));
}
