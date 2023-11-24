/**
 * This UserDatabase object represents a list of all our rewards program users.
 * 
 * Can you find and fix the bugs so that the expected behavior is achieved?
 */

const UserDatabase = {
  users: [],

  // SOLUTION: this keyword is not bound to the UserDatabase since this was an arrow function
  //this is making a property called addUser that accepts 3 arguments and adds a user to the list with the 3 as well as whether or not they've recieved a coupon
  addUser: function(name, id, phone) {  //get rid of the arrow function
    this.users.push({ name, id , phone, hasCoupon: false, isEnrolledInRewards: false});
  },

  // what is wrong with this function?
  loadFromFile: function() { //get rid of the arrow function
    const usersFromFile = require("../../util/userDatabase/usersdb.json");
    this.users = usersFromFile;
  },
};

module.exports = UserDatabase;

// you can use these console logs to help you debug addUser()
console.log(UserDatabase.users);
UserDatabase.addUser("John Doe", 1234, "+1 (111) 111-1111");
console.log(UserDatabase.users);


// you can use these console logs to help you debug loadFromFile()
UserDatabase.loadFromFile();
console.log(UserDatabase.users);


