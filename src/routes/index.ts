import { Router } from "express";
const router = Router()

import mercadopago from './mercadopago';

router.use('/mercadopago', mercadopago)

export default router
