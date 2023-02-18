const express =require('express');
const voyagerMiddleware = require('graphql-voyager/middleware');


const app = express();

app.use('/voyager', voyagerMiddleware.express({ endpointUrl: 'http://127.0.0.1:4003/v1' }));

app.listen(3001);