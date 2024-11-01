import config from '../../config';
import ApiError from '../../errors/ApiError';
import { jwtHelpers } from '../../helpers/jwtHelpers';
const auth = (...requiredRoles) => async (req, res, next) => {
    try {
        //get authorization token
        const token = req.headers.authorization;
        if (!token) {
            throw new ApiError(400, 'You are not authorized');
        }
        // verify token
        let verifiedUser = null;
        verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret);
        req.user = verifiedUser; // role  , userid
        // role diye guard korar jnno
        if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
            throw new ApiError(500, 'Forbidden');
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
export default auth;
