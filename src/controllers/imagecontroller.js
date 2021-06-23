const {} = require('../services/user');

exports.Upload = async(req, res) =>{
    console.log(req.file);
    res.send('Single File upload success');
};