export class BaseModel {

  dataStore = [];
  constructor() {}

  saveSync(data, callback) {
    const id = this.dataStore.push(data);
    return callback(null, this.dataStore[id - 1]);
  }

  /**
   *  Simulates actual DB call behaviour
   */
  async save(data) {
    return new Promise((resolve, reject) => {
      this.saveSync(data, (err, response) => {
        const fn = () => {
          if (err)
            return reject(err);

          return resolve(response);
        }
        setTimeout(fn, 100, "Save Async")
      })
    });
  }

  findAll(input, callback) {
    callback(null, this.dataStore);
  }

  findById(index, callback) {
    const val = this.dataStore[index];
    callback(null, val);
  }

  findOne(filterObject, callback) {
    const user = this.dataStore.filter((val, index) => {
      return val.email === filterObject.email;
    });

    if (user) {
      callback(null, user[0]);
    } else {
      callback(null, null);
    }

  }

  findOneAndUpdate(indexObj, object, options, callback) {
    this.dataStore[indexObj._id] = object;
    callback(null, object);
  }

  remove(indexObj, callback) {
    this.dataStore.splice(indexObj._id, 1);
    callback(null)
  }
}
