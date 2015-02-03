var fs = require('fs'),
    path = require('path');

module.exports = function (dirPath, extension, callback) {

    fs.readdir(dirPath, function (err, list) {
        if (err)
            return callback(err);

        return callback(null, list.filter(function (item) {
            return path.extname(item) === ('.' + extension);
        }));

    });
};