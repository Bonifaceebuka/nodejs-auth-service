'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const db_connect = require('../config/database');
const User = db_connect.define('user', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go 
    timestamps: true
});

module.exports = User;