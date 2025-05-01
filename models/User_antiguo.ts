import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from './database'; // Importa la instancia de Sequelize

class User
  extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'Users', // Asegúrate de que el nombre de la tabla coincida
    timestamps: true // Habilita createdAt y updatedAt
  }
);



export default User;
