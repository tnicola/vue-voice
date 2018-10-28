const PATH_LIB = "lib/";
const PATH_DIST = "dist/";

const fs = require('fs');
let resizable = fs.readFileSync(PATH_LIB + 'package.json').toString();
fs.writeFileSync(PATH_DIST + 'package.json', resizable);
