function duckCount () {
    var args = Array.prototype.slice.call(arguments, 1);

    return args.filter(function(item) {
        return (item.hasOwnProperty && item.hasOwnProperty('quack')) || ("quack" in item);
    }).length;

}

module.exports = duckCount;