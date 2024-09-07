// import JWT from 'jsonwebtoken';
// import userModel from '../models/userModel.js';

// // Protected routes token based 
// export const requireSignIn = async (req, res, next) => {
//   try {
//     if (!req.headers.authorization) {
//       return res.status(401).send({
//         success: false,
//         message: "No token provided",
//       });
//     }
    
//     const token = req.headers.authorization.split(' ')[1]; // Get token from "Bearer <token>"
//     const decode = JWT.verify(token, process.env.JWT_SECRET);
//     req.user = decode;

//     next();
//   } catch (error) {
//     console.log(error);
//     res.status(401).send({
//       success: false,
//       message: "Invalid or expired token",
//     });
//   }
// };

// // Admin access
// export const isAdmin = async (req, res, next) => {
//   try {
//     console.log("o beta ji");
//     const user = await userModel.findById(req.user._id);
//     if (user.role !== 1) {
//         console.log("error in isAdmin");
//       return res.status(401).send({
//         success: false,
//         message: 'Unauthorized access',
//       });
//     } else {
//         console.log("hello beta ji");
//       next();
//     }
//   } catch (error) {
//     res.status(401).send({
//       success: false,
//       error,
//       message: "Error in admin middleware",
//     });
//   }
// }


import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js';

// proteted routes token base 
export const requireSignIn = async(req,res,next)=>{
try {
    const decode  =JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
    req.user = decode;

    next();
} catch (error) {
    console.log(error)
}
};

// admin acess

export const isAdmin = async (req,res,next)=>{
    try {
        const user = await userModel.findById(req.user._id)
        if(user.role !== 1){
            return res.status(401).send({
                sucess:false,
                Message:'Unauthorized access'
            });
        }else{
            next();
        }
    } catch (error) {
        res.status(401).send({
            sucess:false,
            error,
            message:"Error in admin middleware",
        });
    }
}