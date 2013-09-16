/**
 * DeveloperController
 *
 * @module      :: Controller
 * @description :: Contains logic for handling requests.
 */

 module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
  index: function(req, res) {
      res.json({
          "hello": "world"
      })
  },

  list: function(req, res) {
      var developers = [
          {
              firstName: 'vasiliy',
              lastName: 'pupkin',
              login: 'vas'
          },
          {
              firstName: 'ivan',
              lastName: 'durak',
              login: 'ivd'
          }
      ];

      res.json(developers);
  }

};