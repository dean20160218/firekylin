var fs = require('fs');
var content = fs.readFileSync('./package.json', 'utf8');
var data = JSON.parse(content);
delete data.devDependencies;
delete data.scripts.compile;
delete data.scripts['watch-compile'];
delete data.scripts.watch;
delete data.scripts['copy-package'];
fs.writeFileSync('output/package.json', JSON.stringify(data, undefined, 4));