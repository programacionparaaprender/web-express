import { Dialect } from 'sequelize';

const configmysql:any = {
  development: {
    username: "root",
    password: "",
    database: "express",
    host: '127.0.0.1',
    dialect: 'mysql' as Dialect,
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true
      }
    }
  },
  test: {
    username: "root",
    password: "",
    database: "express",
    host: '127.0.0.1',
    dialect: 'mysql' as Dialect,
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true
      }
    }
  },
  production: {
    username: "root",
    password: "",
    database: "express",
    host: '127.0.0.1',
    dialect: 'mysql' as Dialect,
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true
      }
    }
  }
};

export default configmysql;