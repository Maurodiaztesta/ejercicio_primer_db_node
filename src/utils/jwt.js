const jwt = require('jsonwebtoken');

const generateSing = (id, email) => {
    return jwt.sign({id, email}, process.env.JWT_KEY, {expiresIn: '1h'});
}

const verifySing = (token) => {
    return jwt.verify(token, process.env.JWT_KEY);
}

module.exports = {generateSing, verifySing};