var fs = require('fs');
var path = require('path')
var CSV2SQL = require('csv2sql-lite-2');

const company = 'ubisoft'
const samples = path.resolve(`dataSamples/csv/${company}.csv`)
const queries = path.resolve(`dataSamples/sql/${company}.sql`)

var rstream = fs.createReadStream(samples);
var wstream = fs.createWriteStream(queries);


var csv2sql = CSV2SQL({
    tableName: 'ea',
    dbName: 'GameMarket',
});

rstream.pipe(csv2sql).pipe(wstream);