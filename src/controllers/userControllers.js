import {user as User, comparePassword} from './../models/userMode';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginRequired = (req, res, next) => {
    if(req.user){
        next();
    } else {
        return res.status(401).json({message: 'Unauthorized user!'});
    }
}

export const register = (req, res) => {
    const iUser = req.body;
    iUser.password = bcrypt.hashSync(req.body.password, 10);
    
    User.save(iUser, (err, user) => {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            // ideally in the Database call we can do this
            // user.password = undefined;
            const retUser = {username: user.username, email: user.email, password: undefined}
            return res.json(retUser);
        }
    });
}

export const login = (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if(err) throw err;

        if(!user) {
            res.status(401).json({
                message: 'Authentication Failed.'
            });
        }else if(user) {
            if(!comparePassword(req.body.password, user.password)){
                res.status(401).json({
                    message: 'Authentication failed. Wrond Password'
                })
            } else {
                return res.json({
                    token: jwt.sign({
                        email:user.email, 
                        username: user.username, 
                        _id:user.id
                    }, 'SECRET_WORD')
                })
            }
        }
    })
}