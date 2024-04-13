import { Router } from 'express';
import { deleteTransaction, getTransaction, getTransactions, postTransaction } from '../controllers/transactions';

const router = Router();

router.get('/', getTransactions );
router.get('/:id', getTransaction );
router.post('/', postTransaction );
router.delete('/:id', deleteTransaction);


export default router;