import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Expense = db.define('Expense', {
    accountId: {
        type: DataTypes.INTEGER
    },
    userId: {
        type: DataTypes.INTEGER
    },
    concept: {
        type: DataTypes.STRING
    },
    amount: {
        type: DataTypes.DECIMAL
    },
    date: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.BOOLEAN
    }
});

export default Expense;