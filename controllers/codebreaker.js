

var cb=require('../domain/cb');

//GET 
exports.adivinarSecreto = function(req, res) {
    var data =  cb.cb(req.params.secret);
    return res.status(200).send(data);
};

exports.setSecret = function(req,res) {
    cb.setSecret(req.body.secret);
    return res.status(200).send("OK");
};
