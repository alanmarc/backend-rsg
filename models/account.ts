import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Account = db.define('Account', {
    userId: {
        type: DataTypes.INTEGER
    },
    typeAccount: {
        type: DataTypes.STRING
    },
    info: {
        type: DataTypes.STRING
    },
    nameAccount: {
        type: DataTypes.STRING
    },
    initialCapital: {
        type: DataTypes.DECIMAL
    },
    status: {
        type: DataTypes.BOOLEAN
    }
});

export default Account;