'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/contact')
    .get(todoList.list_all_contacts)
    // .post(todoList.create_a_contact);


//   app.route('/contact/:contactId')
//     .get(todoList.read_a_contact)
//     .put(todoList.update_a_contact)
//     .delete(todoList.delete_a_contact);
};