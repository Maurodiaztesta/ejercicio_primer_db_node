const { verifySing } = require("../../utils/jwt");


const isAuth = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;

        if (!authorization) {
            return res.status(401).json({message: 'Unauthorized'})
        }
        
        const token = authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({message: 'No token provided'})
        } 

        let tokenVerified = verifySing(token, process.env.JVT_KEY);
        

        if (!userLogged) {
            return res.status(401).json(tokenVerified)
        }

        console.log(tokenVerified);
        const userLogged = await User.findById(tokenVerified.id);
        req.user = userLogged;

        next();

    } catch (error) {
        return res.status(500).json(error);
    }
    
}

module.exports = {isAuth};