import { Request, Response} from 'express';
import Expense from '../models/expense';

export const getExpenses = async ( req: Request, res: Response ) => {

    const expense = await Expense.findAll();
    res.json({ expense });
}

export const getExpense = async ( req: Request, res: Response ) => {
    const { id } = req.params;

    const expense = await Expense.findByPk( id );

    if ( expense ){
        res.json(expense);
    } else {
        res.status(404).json({
            msg: `No existe un gasto con eñ id ${ id }}`
        });
    }

    
}

export const postExpense = async ( req: Request, res: Response ) => {
    const { body } = req;

    try {

        const expense = new Expense(body);
        await expense.save();

        res.json(expense);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        });
    }
}


export const deleteExpense = async( req: Request, res: Response ) => {
    const { id } = req.params;

    const expense = await Expense.findByPk( id );
    if ( !expense ){
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        })
    }

    await expense.update({ status: false });
    res.json(expense);
}