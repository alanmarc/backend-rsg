import { Request, Response} from 'express';
import Account from '../models/account';

export const getAcounts = async ( req: Request, res: Response ) => {

    const account = await Account.findAll();
    res.json({ account });
}

export const getAccount = async ( req: Request, res: Response ) => {
    const { id } = req.params;

    const account = await Account.findByPk( id );

    if ( account ){
        //Se debe de modificar las sumas
        res.json(account);
    } else {
        res.status(404).json({
            msg: `No existe una cuenta con el id ${ id }}`
        });
    }

    
}


export const postAccount = async ( req: Request, res: Response ) => {
    const { body } = req;

    try {

        const account = new Account(body);
        await account.save();

        res.json(account);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        });
    }
}

export const putAccount = async( req: Request, res: Response ) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const account = await Account.findByPk( id );
        if ( !account ){
            return res.status(404).json({
                msg: 'No existe la cuenta con id' + id
            });
        }

        await account.update( body );
        res.json( account );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin',
        });
    }
}

export const deleteAccount = async( req: Request, res: Response ) => {
    const { id } = req.params;

    const account = await Account.findByPk( id );
    if ( !account ){
        return res.status(404).json({
            msg: 'No existe la cuenta con el id ' + id
        })
    }

    await account.update({ status: false });
    res.json(account);
}