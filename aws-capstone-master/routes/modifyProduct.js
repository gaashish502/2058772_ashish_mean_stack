const router = require("express").Router();
const ModifyProduct = require("../models/productModify");
const mongoose = require("mongoose");


router.get("/modify",(req,res) => {
    ModifyProduct.find({})
    .then(data => {
        console.log(data);
        return res.json({
            requests : data
        })
    })
})

router.post("/modify",(req,res) => {


    const modifyProduct = new ModifyProduct();
    modifyProduct.name = req.body.name;
    modifyProduct.quantity = req.body.quantity;

    console.log(modifyProduct);

    modifyProduct.save()
    .then(() => {
        return res.json({
            success : true
        })
    })
})

module.exports = router