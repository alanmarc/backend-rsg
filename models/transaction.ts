import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Transaction = db.define('Transaction', {
    accountId: {
        type: DataTypes.INTEGER
    },
    typeTransactions: {
        type: DataTypes.STRING
    },
    amount: {
        type: DataTypes.DECIMAL
    },
    date: {
        type: DataTypes.DATE
    },
    userId: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.BOOLEAN
    }
});

export default Transaction;