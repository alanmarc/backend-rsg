import { Router } from 'express';
import { deleteExpense, getExpense, getExpenses, postExpense } from '../controllers/expenses';

const router = Router();

router.get('/', getExpenses );
router.get('/:id', getExpense );
router.post('/', postExpense);
router.delete('/:id', deleteExpense);


export default router;