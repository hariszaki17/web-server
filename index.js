const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const history = require("connect-history-api-fallback");
const compression = require("compression");

const app = express();

const port =  5000;

app.use(compression());
app.use(history());

app.use("/", serveStatic(path.join(`${__dirname}/dist/`)));
// nah itu pathnya lu ganti aja brok sesuai hasil build punya lu.
// lu serve file ini deh.
// di line 3 klo lu butuh env ya klo ga butuh skip aja

app.listen(port, () => {
    console.log('Nyala boss');
});