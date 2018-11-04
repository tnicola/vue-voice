const PATH_SRC = 'src/';
const PATH_DIST = 'dist/';
const fs = require('fs-extra');

fs.copy(`${PATH_SRC}assets`, `${PATH_DIST}assets`)
    .then(() => {
        console.info('[PACKAGING]::: Copying assets.');
    })
    .catch((err) => {
        if (err) return console.error(err);
        return true;
    });
