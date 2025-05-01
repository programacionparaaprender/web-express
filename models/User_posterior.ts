import { Model, DataTypes, Sequelize } from 'sequelize';
//import sequelize from './database'; // Importa la instancia de Sequelize


export class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Definición del modelo y sincronización
export function initialize(sequelize: Sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        //type: DataTypes.STRING(128),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize, // Pasar la instancia de Sequelize
      tableName: 'Users',
      modelName: 'User',
      timestamps: true, // Habilita createdAt y updatedAt
    }
  );
}

export default User;