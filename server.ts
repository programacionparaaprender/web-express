

//import express from 'express';
//import * as express from 'express';
const express = require('express');
const multer = require('multer');
import { Sequelize } from 'sequelize';
import {Application} from "express";
import { getAllUsers } from "./server/get-users.route"; 
import { updateUser } from "./server/update-user.route";
import { saveUser } from "./server/save-user.route";
import { deleteUser } from "./server/delete-user.route";
import { getUser } from "./server/get-user.route";
import sequelize from './models/database';
const cors = require('cors');
const bodyParser = require('body-parser');

const app: Application = express();
app.use(cors({origin: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
//app.use(express.json());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));


// Probar la conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.error('Error de conexión a la base de datos:', err));


app.route('/api/users/:id').get(getUser);
app.route('/api/users/:id').put(updateUser);
app.route('/api/users').post(saveUser);
app.route('/api/users').get(getAllUsers);
app.route('/api/users/:id').delete(deleteUser);

const PORT = 9000
const httpServer = app.listen(PORT, () => {
    
    //console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
    console.log("HTTP REST API Server running at http://localhost:" + PORT + '\n' + httpServer.address()?.toString);
});



