const router = require("express").Router();
let Detail = require('../models/Detail');

router.route("/add").post((req, res) => {

    const fname = req.body.fname;
    const email = req.body.email;
    const tpnumber = req.body.tpnumber;

    const address = req.body.address;
    const city = req.body.city;
    const stpnumber = req.body.stpnumber;
    const status = req.body.status;

    const newDetail = new Detail({

        fname,
        email,
        tpnumber,
        address,
        city,
        stpnumber,
        status

    })
    
    newDetail.save().then(() => {
        res.json("Details Added")
    }).catch(err => {
        console.log(err);
    })

})

router.route("/all/").get((req, res) => {
    Detail.find().then((details) => {
        res.json(details)
    }).catch(err => {
        console.log(err);
    })
})

//get Specific detail

router.get('/:id',(req, res)=>{

    let detailId = req.params.id;

    Detail.findById(detailId,(err,details)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
        success:true,
        details
        });
    });

});

router.put('/update/:id',(req, res)=>{
    Detail.findByIdAndUpdate(
    req.params.id,
    {
        $set:req.body
    },
    (err)=>{
        if(err){
        return res.status(400).json({error:err});
    }

    return res.status(200).json({
        success:"Updated Successfully"
        });
    }
);

});

//Delete Post

router.delete('/delete/:id',(req, res)=>{
    let detailId = req.params.id;
    Detail.findByIdAndRemove(detailId).exec((err,details) =>{

    if (err) return res.status(400).json({
        message:"Delete Unsuccessful",err
    });

    return res.json({
        message:"Delete Successfull",details,
        
        });
    });
});


module.exports = router;
