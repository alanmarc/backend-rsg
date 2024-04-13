import { Request, Response} from 'express';
import Transaction from '../models/transaction';

export const getTransactions = async ( req: Request, res: Response ) => {

    const transac = await Transaction.findAll();
    res.json({ transac });
}

export const getTransaction = async ( req: Request, res: Response ) => {
    const { id } = req.params;

    const transac = await Transaction.findByPk( id );

    if ( transac ){
        res.json(transac);
    } else {
        res.status(404).json({
            msg: `No existe la transaccion con eñ id ${ id }}`
        });
    }

    
}

export const postTransaction = async ( req: Request, res: Response ) => {
    const { body } = req;

    try {
        const transac = new Transaction(body);
        await transac.save();

        res.json(transac);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        });
    }
}


export const deleteTransaction = async( req: Request, res: Response ) => {
    const { id } = req.params;

    const transac = await Transaction.findByPk( id );
    if ( !transac ){
        return res.status(404).json({
            msg: 'No existe la transaccion con el id ' + id
        })
    }

    await transac.update({ status: false });
    res.json(transac);
}