const {Create, LogIn, Update, Delete, GetAll, GetOne} = require('../services/user');

const bcrypt = require ("bcrypt");
const users = require('../schema/users');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config({path: './.env'});
const { Op } = require ("sequelize");


///////////////////////////////////////////////////////////
//CreateUser
exports.CreateUser = async (req, res, next) => {
req.body.image = req.file.originalname;
    //bcrypt
    const saltRounds = 10;
    bcrypt.hash(req.body.password,saltRounds,(_error,hash) => {

        req.body.password = hash;
        console.log(req.body);
        Create(req.body)
            .then(createUser => {
                res.send({
                    message:"Successfully Created!"
                })
            })
            .catch(error => {
                res.send({
                    message:"Unsuccesful!"
                })
            })
    })
}

/////////////////////////////////////////////////////
//LogInUser
exports.LogInUser = async (req, res) => {
    try{
        // Username validation
        const user = await LogIn({
            where: {
                id: req.body.id
            }
        })

        console.log(user);

        if(!user){
            res.send({
                message: "Invalid ID"
            });
        }

        //password validation
        const password = bcrypt.compareSync(req.body.password, user.password)

        if(!password){
            res.send({
                message: "Invalid Password"
            });
        }

        //SendingOfToken
        const token = jwt.sign(
            {
                id: user.id,
                department_id: user.department_id,
                fname: user.fname,
                mname: user.mname,
                lname: user.lname,
                image: user.image
                
            },
                process.env.SecuredToken, {
                    expiresIn: '24h'
                }
        );

        res.send({token});
    }
    catch(error){
        res.send(
            error
        )
    }
}

/////////////////////////////////////////////////////
//Update
exports.UpdateUser = async (req, res) => {

req.body.image=req.file.originalname;
    const condition = {
        where: {
                id:req.body.id
        }};
    const saltRounds = 10;

    bcrypt.hash(req.body.password,saltRounds,(_error,hash) => {
        req.body.password = hash;

        const values = req.body

        Update({condition, values})
            .then(lea => {
                res.send({
                    message:"Successfully Updated"
                })
            })
                
            .catch(error =>{
                res.send({
                    message:"Failed to Update!"
                })
            })
                
    })
}

///////////////////////////////////////////////////////////////
//Delete
exports.DeleteUser= async(req,res) => {
    const result = await Delete({
        where: {
            id: req.body.id
        }
    });
    if(result){
        res.send({
            message: "Successfully Deleted!",
            status: result
        });
    }
    res.message({
        message: "Failed to Delete User!", error: result
    });
}

///////////////////////////////////////////////////////////
//GetAll
exports.GetAllUser = async(req, res) => {
    try{
        const result = await GetAll();
        const response = (result.length > 0 ? result: "No User Found!")

        res.send(response)
    }
    catch(error){
    }
}

/////////////////////////////////////////////////////////
//GetOne
exports.GetOneUser = async(req, res) => {
    try{
        const result = await GetOne({
            where:{
                id: req.body.id
            }
        });
        const response = (result ? result: "No User Found!")
        res.send(response);
    }
    catch(error){
    }
}