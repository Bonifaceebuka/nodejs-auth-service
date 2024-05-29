const jwt = require("jsonwebtoken");
const { jwtConfig: config } = require("../config");
const User = require("../models/UserModel");

const auth = async (request, response, next) => {
  const { authorization } = request.headers;
  if (!authorization) {
    return response
      .status(401)
      .json({ error: "Authorization header is required!" });
  }

  const token = authorization.split(" ")[1];
  try {
    const { id } = jwt.verify(token, config.secret);
    if (!id) {
      return response.status(401).json({ error: "Unauthorized access!" });
    }
    
    const userId = await User.findByPk(id);
    if (!userId) {
      return response.status(401).json({ error: "Unauthorized access!" });
    }
    request.user = userId;
    next();
  } catch (error) {
    return response.status(401).json({ error: "Unauthorized access!" });
  }
};

module.exports = auth;
