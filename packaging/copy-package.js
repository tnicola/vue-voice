const PATH_LIB = 'src/lib/';
const PATH_DIST = 'dist/';
const fs = require('fs');

const resizable = fs.readFileSync(`${PATH_LIB}package.json`).toString();
fs.writeFileSync(`${PATH_DIST}package.json`, resizable);
