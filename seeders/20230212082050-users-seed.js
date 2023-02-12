'use strict';
const fs = require('fs')

module.exports = {
  up: (models, mongoose) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return models.Test.bulkWrite([
        {
          insertOne: {
            document: {
              name: 'first test'
            }
          }
        }
      ]).then(res => {
      // Prints "1"
      console.log(res.insertedCount);
    });
    */
    let users = JSON.parse(fs.readFileSync('./data', 'utf-8'), 3)

    models.User.bulkWrite()
  },

  down: (models, mongoose) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return models.Test.bulkWrite([
        {
          deleteOne: {
            filter: {
              name: 'first test'
            }
          }
        }
      ]).then(res => {
      // Prints "1"
      console.log(res.deletedCount);
      });
    */
  }
};
