const { users } = require('../db/config')

/////////////////////////////////////////////////////
exports.Create = async (body) => {
    try{
        await users.create(body);
        return true;
    }catch(err){
        console.log(err)
        return false;
    }
}
/////////////////////////////////////////////////////
exports.LogIn = async (body) => {
    try{
        const user = await users.findOne(body);
        return user;
    }catch(err){
        console.log(err)
        return false;
    }
}

//////////////////////////////////////////////
exports.Update = async (body) => {
    try{
      await users.update(body.values,body.condition);
      return true;
    }catch(err){
      return err;
    }
}

/////////////////////////////////////////////
exports.Delete = async (body) => {
    try{
      await users.destroy(body);
      return true;
    }catch(err){
      return err;
    }
}

////////////////////////////////////////////
exports.GetAll = async (body) => {
    try{
        const user = await users.findAll(body);
        return user;
    }catch(err){
        return err;
    }
}

/////////////////////////////////////////////
exports.GetOne = async (body) => {
    try{
        const user = await users.findOne(body);
        return user;
    }catch(err){
        return err;
    }
}