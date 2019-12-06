const router = require("express").Router({mergeParams: true});
const auth = require("../modulos/auth");

router.get("/", [ (req, res) => {
    let ip = req.ip;

    const auto = req.db.collection("concesionaria");

    auto.find({ip: ip}, {pass: 0}).toArray( (err, data) => {
        if ( err ) {
            res.json({rta: err});
            return;
        }

        res.json({rta: data});
    });
}]);

router.post("/", (req, res) => {
    let o = req.body.cliente;

    if ( !o ) {
        res.json({error: "No encontrado objeto concesionaria"})
        return;
    }

    o.ip = req.ip;

    const clientes = req.db.collection("concesionaria");

    clientes.insertOne(o, (err, data) => {
        if ( err ) {
            res.json({rta: err});
            return;
        }

        res.json({rta: data.result});
    })
});


router.put("/:id", (req, res) => {
    let o = req.body.cliente;

    let id = req.params.id;

    if ( !o ) {
        res.json({error: "No encontrado objeto concesionaria"})
        return;
    }

    const clientes = req.db.collection("concesionaria");

    clientes.update({
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
    if ( !id ) {
        res.json({error: "No encontrado objeto concesionaria"})
        return;
    }

    const concesionaria = req.db.collection("concesionaria");
    concesionaria.remove({
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
