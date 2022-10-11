import { Request, Response, NextFunction, Router } from "express";
import mercadopago from 'mercadopago'
import { TEST } from '../utilities/credentials';
const router = Router();

router.get('/', async (req:Request, res:Response) => {

    res.json({
        msg:"MercadoPago API"
    })
    
})

router.post('/', async (req:Request, res:Response) => {

    const preference = {
        items: [{
            title: `Nuestro producto`,
            unit_price: 830,
            quantity: 1,
        }],
        back_urls: {
            "success": `https://nuestrositio.com/ejemplo=300`,
            "failure": `https://nuestrositio.com/`,
            "pending":`https://nuestrositio.com/`
        },
        payment_methods: {
            excluded_payment_methods: [
                // {id:'master'},
                // {id:'visa'},
            ],
            excluded_payment_types:[
                {id:'ticket'}
            ],
            installments:1
        },
        // auto_return:'approved',
        binary_mode:true,
        external_reference:"123456",
        // marketplace:"other_account_token",
        // marketplace_fee:total*0.1,
    };
    
    // conectamos el SDK a nuestra App
    mercadopago.configure({access_token:TEST.token})

    mercadopago.preferences
    .create(preference)
    .then(function (response) {
        // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
        //init_point es el link a redirigir
        res.json(response.body)
    })
    .catch(function (error) {
        console.log(error);
        return res.status(400).json({errors:{ msg:'Error al generar el pago' }})
    });

})

export default router;