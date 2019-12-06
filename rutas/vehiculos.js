const router = require("express").Router({mergeParams: true});

router.get("/", (req, res) => {
    let ip = req.ip;

    const vehiculo = req.db.collection("vehiculos");

    auto.find({ip: ip}).toArray( (err, data) => {
        if ( err ) {
            res.json({rta: err});
            return;
        }

        res.json({rta: data});
    });
});

router.post("/", (req, res) => {
    let o = req.body.vehiculo;
    // console.log(req.body);
    if ( !o ) {
        res.json({error: "No encontrado objeto vehiculo"});
        return;
    }

    o.ip = req.ip;

    const vehiculo = req.db.collection("vehiculos");

    vehiculo.insertOne(o, (err, data) => {
        if ( err ) {
            res.json({rta: err});
            return;
        }

        res.json({rta: data.result});
    });
});

module.exports = router;
