const userModel = require("../models/userModel");


createUser = (req, res) => {
        const {username, email, password} = req.body;
        const userData = [username, email, password];
    
        userModel.createUser(userData, (err) => {
            if(!userData){
                res.status(400).json(jsonResponse(400,{
                    error: "Fields are required"
                }));
                return;
            }
        
            res.status(200).json(jsonResponse(200,{
                message: "User created successfully"
                
            }));
        
            res.send('Sign Up');
        })
        
    }

module.exports = createUser;