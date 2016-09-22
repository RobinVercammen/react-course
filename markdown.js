var concat = require('concat-files');
var path = require('path');

var mdDocs = [
    "00-inleiding.md",
    "01-node-setup.md",
    "02-react-tooling.md",
    "03-react-setup.md",
    "04-webpack-config.md",
    "05-react-hello-world.md"
]
var bookPath = path.join(__dirname, 'public', 'merge.md');

concat(mdDocs, bookPath, function () {
    console.log('done');
});