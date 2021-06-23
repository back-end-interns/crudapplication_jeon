const express = require('express');

const router = express.Router();

const controller = require('../controllers/controller')

const upload = require('../middlewares/upload')

////////
router.post('/create', upload.single('image'), controller.CreateUser);
////////
router.post('/login', controller.LogInUser);
////////
router.put('/update', upload.single('image'), controller.UpdateUser);
////////
router.delete('/delete', controller.DeleteUser);
////////
router.get('/', controller.GetAllUser);
////////
router.get('/getone', controller.GetOneUser);
////////


module.exports=router;