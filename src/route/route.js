const express = require('express');

const router = express.Router();

const controller = require('../controllers/controller')

const upload = require('../middlewares/upload')

const VerifyToken = require('../middlewares/VerifyToken')

////////
router.post('/create', upload.single('image'), VerifyToken, controller.CreateUser);
////////
router.post('/login', controller.LogInUser);
////////
router.put('/update', upload.single('image'), VerifyToken, controller.UpdateUser);
////////
router.delete('/delete', VerifyToken, controller.DeleteUser);
////////
router.get('/', VerifyToken, controller.GetAllUser);
////////
router.get('/getone', VerifyToken, controller.GetOneUser);
////////


module.exports=router;