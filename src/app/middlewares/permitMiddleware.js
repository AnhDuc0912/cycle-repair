const Roles = require("../models/Roles");

module.exports = function permitMiddleware(...permittedRoles) {
    // return a middleware
    return async (request, response, next) => {
        // const permission = 
        const user = request.session.user.user;
        const role = await Roles.findById(user.role._id).populate({
            path: "permissions",
        });

        role.permissions.forEach(permission => {
            if (user && permission.title.includes("ROOT")) {
                return next();
            }
            
            if (user && permittedRoles.includes(permission.title)) {
                next();
            } else {
                response.status(403).json({
                    message: "Forbidden"
                });
            }
        });



    }
}