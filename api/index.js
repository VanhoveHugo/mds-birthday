require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');

app.use(cors());
app.use(helmet.hidePoweredBy());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.ieNoOpen());
app.use(helmet.hsts({ maxAge: 7776000000, includeSubDomains: true }));
app.use(helmet.dnsPrefetchControl());
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
    }
}));

app.use(express.json());

app.use('/api', require('./routes'));

app.listen(process.env.SERVER_PORT);