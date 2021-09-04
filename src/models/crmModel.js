class Contact{
    // firstName;
    // lastName;
    // email;
    // company;
    // phone;
    // created_date;

    constructor(){
        // this.firstName = data.firstName;
        // this.lastName = data.lastName;
        // this.email = data.email;
        // this.company = data.company;
        // this.phone = data.phone;
        // this.created_date = data.created_date;
    }

    save(data ,callback) {
        globalContactSchemaStore.arrContact.push(data);
        return callback(null, globalContactSchemaStore.arrContact);
    }
    find(input, callback){
        // globalContactSchemaStore.arrContact.find(input);
        callback(null, globalContactSchemaStore.arrContact);
    }
    findById(index, callback){
        const val = globalContactSchemaStore.arrContact[index];
        callback(null, val);
    }
    findOneAndUpdate(indexObj, object, options, callback){
        globalContactSchemaStore.arrContact[indexObj._id] = object;
        callback(null, object);
    }
    remove(indexObj, callback){
        globalContactSchemaStore.arrContact.splice(indexObj._id,1);
        callback(null)
    }
}

class ContactSchema {
    arrContact = [];

    constructor(){
    }
};


const globalContactSchemaStore = new ContactSchema();
export const contact = new Contact();