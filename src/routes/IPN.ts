import { Request, Response, Router } from "express";
import mercadopago from 'mercadopago'
import { PROD, TEST } from '../utilities/credentials';
const router = Router();

router.post('/', async (req:Request, res:Response)=>{
    const {method} = req.query
    const accesToken = method  === 'prod' ? PROD.token : TEST.token
    mercadopago.configure({ access_token: accesToken });

    try {
        const id:number = Number(req.query['data.id'])

        switch(req.query.type){
            case 'payment':
                const payment = await mercadopago.payment.findById(id)
                const {external_reference, status, payer, amount} = payment.body

                switch(status){
                    case "approved":
                        //Do some if payment was approved
                        const paymentInfo = {
                            payer,
                            status,
                            amount
                        }
                        break;
                    default:
                        //Do some if payment was denied
                        break;
                }
                break;
            case "merchant_order":
                const merchant = await mercadopago.merchant_orders.findById(id)
                const external:string = merchant.body.external_reference
                break;
            default:
                break;
        }
        res.send('IPN Success')

    } catch (error:any) {
        console.log(error.message)
        return res.status(400).json({errors:{ msg:'Error al guardar el pago' }})
    }
})

export default router;