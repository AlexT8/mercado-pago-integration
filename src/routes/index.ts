import { Router } from "express";
const router = Router()

import mercadopago from './mercadopago';
import IPN from './IPN';

router.use('/mercadopago', mercadopago)
router.use('/ipn', IPN)

export default router
