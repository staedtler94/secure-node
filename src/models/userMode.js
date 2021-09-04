import bcrypt from 'bcrypt';

export const arrUser = [];

export function comparePassword (password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword);
}

class User{

    constructor(){}

    save(data ,callback) {
        const id = arrUser.push(data);
        return callback(null, arrUser[id-1]);
    }
    find(input, callback){
        // arrUser.find(input);
        callback(null, arrUser);
    }
    findById(index, callback){
        const val = arrUser[index];
        callback(null, val);
    }

    findOne(filterObject, callback){
        const user = arrUser.filter((val, index)=>{
            return val.email === filterObject.email;
        });

        if(user){
            callback(null, user[0]);
        } else {
            callback(null, null);
        }
        
    }

    findOneAndUpdate(indexObj, object, options, callback){
        arrUser[indexObj._id] = object;
        callback(null, object);
    }
    remove(indexObj, callback){
        arrUser.splice(indexObj._id,1);
        callback(null)
    }
}

export const user = new User();