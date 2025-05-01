//import { Sequelize } from 'sequelize';
import config from '../config2/config';
const Sequelize = require('sequelize');
const environment = process.env.NODE_ENV || 'development';
const configEnv = config[environment];

let sequelize;
if(configEnv.dialect === 'mysql'){
  sequelize = new Sequelize(configEnv.database, configEnv.username, configEnv.password, {
    host: configEnv.host,
    dialect: configEnv.dialect
  });
}else {
  sequelize = new Sequelize(configEnv.database, configEnv.username, configEnv.password, {
    host: configEnv.host,
    dialect: configEnv.dialect,
    dialectOptions: configEnv.dialectOptions
  });
}



export default sequelize;