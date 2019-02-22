const fs = require('fs');

module.exports = (app) => {
    fs.readdirSync(`${__dirname}/routes`).forEach((file) => {
        const name = file.substr(0, file.indexOf('.'));
        app.use(`/${name}`, require(`${__dirname}/routes/${file}`));
    });
};