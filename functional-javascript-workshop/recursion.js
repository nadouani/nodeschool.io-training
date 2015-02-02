function reduce(array, fn, init) {
    if(!array.length) return init;
    return reduce(array.slice(1), fn, fn(init, array[0]))
}

module.exports = reduce;