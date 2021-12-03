import { DataTypes } from "sequelize";
import { connect } from '../config/connect'

export const NameModel = connect.define('names', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    encripted_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})