const userModel = require("../models/userModel");
const { jsonResponse } = require('../lib/jsonResponse');

const createUser = (req, res) => {
        const {username, email, password} = req.body;
        
        if(!username || !email || !password){
            res.status(400).json(jsonResponse(400,{
                error: "Fields are required"
            }));
            return;
        }
        
        const userData = [username, email, password];

        userModel.createUser(userData, (err) => {
            if(err){
                if(err.message === 'user already exists'){
                    return res.status(400).json(jsonResponse(400,{
                        error: "User already exists"
                    }));
                }
 
                return res.status(500).json(jsonResponse(500, {
                    error: "Internal server error"        
                }))
            }
                    
            return res.status(200).json(jsonResponse(200,{
            message: "User created successfully"
            }));
        })
    } 

module.exports = createUser;