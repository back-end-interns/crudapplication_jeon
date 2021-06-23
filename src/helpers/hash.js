const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.bcryptHash = async (password) => {
        const hashed = bcrypt.hash(password, saltRounds);
        return hashed;
}