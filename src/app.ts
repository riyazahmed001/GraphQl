import express, { Request, Response, NextFunction, Router } from 'express';
import { graphqlHTTP } from "express-graphql";
const app = express();
const port = 3000;

const schema = require("./schema/schema");

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(port, ()=>{
    console.log("Server is running at " + port)
})