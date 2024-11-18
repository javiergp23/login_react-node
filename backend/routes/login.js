const router = require('express').Router();
const { jsonResponse } = require('../lib/jsonResponse');
const loginUser = require('../controllers/LoginController');

router.post('/', loginUser)
    // const {username, password} = req.body;

//     if(!!!username || !!!password){
//         res.status(400).json(jsonResponse(400,{
//             error: "Fields are required"
//         }));
//         return;
//     }

//     const accessToken = "access_token";
//     const refreshToken = "refresh_token";
//     const user = {
//         _id: 1,
//         name: "Javier",
//         username: "javier"
//     }
//     res.status(200).json(jsonResponse(200,{
//         user, accessToken, refreshToken
//     }));
// })


module.exports = router;