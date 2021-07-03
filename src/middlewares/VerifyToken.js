const jwt = require('jsonwebtoken');

function VerifyToken (req, res, next){
    const token = req.headers['authenticate'];

    if(token == null) return res.status(401).send({message: "Invalid Token"})

        jwt.verify(token, process.env.SecuredToken,(err, usersToken) => {
            if(err) return res.status(403).send({message: "Token Expired!"})
            req.usersToken = usersToken
            next()
        })
    }

module.exports = VerifyToken;