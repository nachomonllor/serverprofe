const router = require("express").Router({mergeParams: true});

router.get("/", (req, res) => {
    let ip = req.ip;

    const auto = req.db.collection("autos");

    auto.find({ip: ip}).toArray( (err, data) => {
        if ( err ) {
            res.json({rta: err});
            return;
        }

        res.json({rta: data});
    });
});

router.post("/", (req, res) => {
    let o = req.body.auto;
    // console.log(req.body);
    if ( !o ) {
        res.json({error: "No encontrado objeto auto"});
        return;
    }

    o.ip = req.ip;

    const auto = req.db.collection("autos");

    auto.insertOne(o, (err, data) => {
        if ( err ) {
            res.json({rta: err});
            return;
        }

        res.json({rta: data.result});
    });
});


router.put("/:id", (req, res) => {
    let o = req.body.cliente;

    let id = req.params.id;

    if ( !o ) {
        res.json({error: "No encontrado objeto cliente"})
        return;
    }

    const autos = req.db.collection("autos");

    autos.update({
        ip: req.ip,
        id: +id
    }, {$set: {...o}}, (err, data) => {
        if ( err ) {
            res.json({rta: err});
            return;
        }

        res.json({rta: data.result});
    })
});

router.delete("/:id", (req, res) => {

    let id = req.params.id;
    let _id = req.params._id;
    console.log("id"+id);
    console.log("_id"+_id);
    if ( !id ) {
        res.json({error: "No encontrado objeto auto"})
        return;
    }

    const auto = req.db.collection("autos");
    auto.remove({      
        ip: req.ip, 
        id: +id
    }, (err, data) => {
        if ( err ) {
            res.json({rta: err});
            return;
        }

        res.json({rta: data.result});
    })
});

module.exports = router;
