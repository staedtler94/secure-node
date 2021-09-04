var assert = require('assert');
import {
  BaseModel
}
from './../../../src/template-models/template-model';

// in actual implementation extend the class but export only the actual object created from the file
class ActualData extends BaseModel {};

describe("Testing the template model", () => {
  const baseModel = new ActualData();
  const inputData = {
    firstName: "Sid",
    lastName: "D"
  };

  it(
    'test the models save functionality is async and returns the saved data',
    async() => {

      const startTime = new Date().getTime();
      const data = await baseModel.save(inputData);

      const endTime = new Date().getTime();
      const diff = endTime - startTime;

      assert.equal(diff > 100, true);
      assert.equal(data, inputData);
    });

  it('test the models saveSync functionality', () => {
    const data = baseModel.saveSync(inputData, (err, res) => {
      assert.equal(res, inputData);
    });
  });

});
