import { Dialect } from 'sequelize';

const config:any = {
  development: {
    username: "sa",
    password: "123",
    database: "express",
    host: '127.0.0.1',
    dialect: 'mssql' as Dialect,
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true
      }
    }
  },
  test: {
    username: "sa",
    password: "123",
    database: "express",
    host: '127.0.0.1',
    dialect: 'mssql' as Dialect,
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true
      }
    }
  },
  production: {
    username: "sa",
    password: "123",
    database: "express",
    host: '127.0.0.1',
    dialect: 'mssql' as Dialect,
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true
      }
    }
  }
};

export default config;