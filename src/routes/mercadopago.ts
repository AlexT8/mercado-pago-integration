import { Request, Response, NextFunction, Router } from "express";
import mercadopago from 'mercadopago'
const router = Router();

router.get('/', async (req:Request, res:Response) => {

    res.json({
        msg:"MercadoPago API"
    })

})

router.post('', async (req:Request, res:Response) => {

    res.json({msg:"Create Payment"})

})

export default router;