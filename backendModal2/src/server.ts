import "reflect-metadata";
import express from 'express';
import "./database";
import  routes  from "./routes";
import "express-async-errors";
import errorHandler from './errors/handler'
import cors from 'cors';
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..' , 'uploads')));
app.use(errorHandler);
app.listen(3333); 

