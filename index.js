const { faker } = require('@faker-js/faker');
const bcrypt = require("bcrypt");
const prompt = require("prompt");



var schema = {
  properties: {
    x: {
      message: 'Amount of fake user: ',
      required: true
    }
  }
};


prompt.start();


prompt.get(schema, function (err, result) {

  var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.yn2d1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {





  var x = parseInt(result.x);
  x = x + 1;

async function close(){
    x = x - 1;
    await db.close();
    console.log("All "+ x + " documents has successfully inserted")    
}

async function add (){
  var current = new Date();
  const date = current.toLocaleTimeString() + " " + current.toLocaleDateString();
  var dbo = db.db("Faker_test");

    for (let i = 1; i < x; i++) {

      const randomUsername = faker.name.firstName() + "" + faker.name.lastName();
      const randomAddress = faker.address.city();
      const randomPhoneNumber = faker.phone.phoneNumber('+6011########');
      const randomPass = faker.internet.password();
      const randomEmail = faker.internet.email();
      var current = new Date();
  const date = current.toLocaleTimeString() + " " + current.toLocaleDateString();

      const rounds = 10;

      const hash = bcrypt.hashSync(randomPass, rounds);

      const randomHashpass = hash;

      if (err){
        throw err;
      }
      var myobj = { username: randomUsername, email: randomEmail, address: randomAddress, phone: randomPhoneNumber, pass: randomHashpass, last_update: date };
       await dbo.collection("Fake_user").insertOne(myobj).then(a=>{
        console.log("The document No." + i +" with the _id of (" + a.insertedId +") has been successfully inserted in Faker_test , db.Fake_user" )
      })
    }
  };
  async function Run() {
    try{
    await add();
      }
    catch(err){
    }
    finally{
      close();
    }
  }
  Run();

});


})



