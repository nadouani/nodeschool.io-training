var lsModule = require('./module.js');

lsModule(process.argv[2], process.argv[3], function (err, data) {
    if (err)
        console.error('Error');

    data.forEach(function (item) {
        console.log(item);
    });
});