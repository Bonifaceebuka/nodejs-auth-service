const User = require("../models/UserModel");
const { jwtConfig: config } = require("../config");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { signUpValidator } = require("../utils");

exports.signUp = async (request, response) => {
  const { email, password } = request.body;
  const signUpData = {
    email, password
  }
  const { emailValidationMessage, passwordValidationMessage } = signUpValidator(signUpData);
  if(emailValidationMessage?.message){
    const message = emailValidationMessage?.message;
      return response.status(400).json({ error:message});
  }

  if(passwordValidationMessage?.message){
    const message = passwordValidationMessage?.message;
    return response.status(400).json({ error:message});
  }

  const passwordSalt = await bcrypt.genSalt(15)
  const hashedPassword = await bcrypt.hash(password, passwordSalt);

  const data = {
      email: email,
      password: hashedPassword
  }
  try {
    const user = await User.create(data);
    return response.status(201).json({
      message: 'Account created successfully', 
      data: user
  });
  } catch (error) {
    return response
          .status(500)
          .json({ error: "Internal server error just occured!" });
  }
 
  
}

exports.userProfile = async(request, response) =>{
  const { id } = request.user;
  try {
    if (id) {
      const user = await User.findByPk(id);
      if (!user){
        return response
            .status(404)
            .json({ error: "User profile not found!" });
      }
      return response.status(200).json({
        message: 'User profile', 
        data: user
    });
    }
  } catch (error) {
    return response
          .status(500)
          .json({ error: "Internal server error just occured!" });
  }
}

///Login Logic
exports.signIn = async (request, response) => {
  const { email, password } = request.body;
  try {
    const user = await User.findOne({ where: {email: email} });
    if (!user) {
        return response
            .status(400)
            .json({ error: "Invalid login details!" });
      }
    if(await bcrypt.compare(password, user.password)){
      const token = loginWebToken(user);
      return response.status(200).json({
        success: true,
        token: `Bearer ${token}`,
        message: "You are now logged in.",
      });
    }
    else{
      return response
        .status(400)
        .json({ error: "Invalid login details!" });
    }
    
  } catch (error) {
    return response
          .status(500)
          .json({ error: "Internal server error just occured!" });
  }
};

const loginWebToken = (user) => {
  // ////////////////////////////////////////////////////
    // // Creating the JWT(Json Web Token)
    // ////////////////////////////////////////////////////

    const token = jwt.sign(
      {
        id: user.id.toString()
      },
      config.secret,
      { expiresIn: config.tokenLiveSpan }
    );

    return token;
}
