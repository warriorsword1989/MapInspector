/**
 * @description
 * @file
 * @author    linglong
 * @date      2017/10/25
 *
 * @copyright @Navinfo, all rights reserved.
 */
const Sequelize = require('sequelize');
const db = require('../../dataBase');

// 创建 model
module.exports = db.define('om_user_role', {
        id: {
            type: Sequelize.INTEGER,
            field: 'pid',
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        userId: {
          type: Sequelize.INTEGER,
          field: 'user_id',
          allowNull: false,
          references: {
            model: 'om_user',
            key: 'user_id'
          }
        },
        roleCode: {
          type: Sequelize.INTEGER,
          field: 'role_code',
          allowNull: false,
          references: {
            model: 'om_role',
            key: 'role_code'
          }
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }, {
        freezeTableName: true
    }
);
