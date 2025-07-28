'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt      = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  /*Store hash in your db*/
  if (err) {
    console.log(err);
  } else {
    console.log(hash);
    
    // Now compare the password with the generated hash
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
      /*res == true or false*/
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    });
  }
});

//END_ASYNC

//START_SYNC



//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
