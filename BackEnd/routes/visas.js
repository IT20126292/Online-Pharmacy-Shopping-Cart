const router = require("express").Router();
let Visa = require('../models/Visa');

router.route("/add").post((req, res) => {

    const name = req.body.name;
    const cardNumber = req.body.cardNumber;
    const cvvNumber = req.body.cvvNumber;
    const expDate = req.body.expDate;

    const newVisa = new Visa({

        name,
        cardNumber,
        cvvNumber,
        expDate,

    })
    
    newVisa.save().then(() => {
        res.json("Visa Card Added")
    }).catch(err => {
        console.log(err);
    })

})

router.route("/all").get((req, res) => {
    Visa.find().then((visas) => {
        res.json(visas)
    }).catch(err => {
        console.log(err);
    })
})

router.delete('/delete/:id',(req, res)=>{
    let detailId = req.params.id;
    Visa.findByIdAndRemove(detailId).exec((err,visa) =>{

    if (err) return res.status(400).json({
        message:"Delete Unsuccessful",err
    });

    return res.json({
        message:"Delete Successfull",visa,
        
        });
    });
});

module.exports = router;