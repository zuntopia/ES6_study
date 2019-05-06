const power = x =>x*x;
console.log(power(3));

function prefix(fix){
        this.fix = fix;
};

prefix.prototype.prefixArray = function(arr) {
    //var that = this;
    return arr.map(function(x) {
        //return that.fix + ' ' + x;
        return this.fix + ' ' + x;
    });
};

var p = new prefix('hi');
console.log(p.prefixArray(['Kim', 'Lee']));