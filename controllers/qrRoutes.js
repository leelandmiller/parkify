const router = require('express').Router();
const {buildNewQrCodeDoc, getQrCodeData}  require('../db/qrCodeOrm')

router.get('/check/:token', (req, res)=>{
    const token = req.params.token
    getQrCodeData(token).then(data => {
        req.json(data)
    })
})