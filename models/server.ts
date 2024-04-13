import express, { Application } from 'express';
import cors from 'cors'
import userRoutes from '../routes/user';
import accountRoutes from '../routes/account';
import transactionRoutes from '../routes/transaction';
import expenseRoutes from '../routes/expense';;
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users',
        accounts: '/api/accounts',
        transactions: '/api/transactions',
        expenses: '/api/expenses',
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            
            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            console.log(error)
        }
    }

    middlewares() {
        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public') );
    }


    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
        this.app.use(this.apiPaths.accounts, accountRoutes);
        this.app.use(this.apiPaths.transactions, transactionRoutes);
        this.app.use(this.apiPaths.expenses, expenseRoutes);
    }

    listen() {
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en... ' + this.port );
        })
    }
}

export default Server;