function duckCount () {
    var args = Array.prototype.slice.call(arguments);

    return args.filter(function(item) {
        return Object.prototype.hasOwnProperty.call(item, 'quack');
    }).length;

}

module.exports = duckCount;