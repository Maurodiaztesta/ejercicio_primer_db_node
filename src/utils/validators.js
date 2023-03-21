const User = require("../api/models/users.model");

const validateEmail = (email) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    return regex.test(String(email).toLowerCase());
}

const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(String(password));
}

const usedEmail = async (email) => {
    const users = await User.find({email: email});
    return users.length;
}

module.exports = {validateEmail, validatePassword, usedEmail};