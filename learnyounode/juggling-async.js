var http = require('http'),
    args = process.argv.slice(2),
    bl = require('bl'),
    count = 0,
    results = [];


function print(results) {
    results.forEach(function (item) {
        console.log(item);
    })
}

function httpGet(index) {

    http.get(args[index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) console.error(err);

            results[index] = data.toString();
            count++;

            if (count === 3)
                print(results);
        }));
    });

}

for (var i = 0; i < 3; i++)
    httpGet(i)
