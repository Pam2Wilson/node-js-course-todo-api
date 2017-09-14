//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongo database server');
  }
  console.log('Connected to Mongo Database server');

  // delete Many

  //db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //  console.log(result);
  //});

  // delete Many

  // db.collection('Users').deleteMany({name: 'Pam Wilson'}).then((result) => {
  //  console.log(result);
  // });

  // delete One

  //db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //  console.log(result);
  //})

  // findOneAndDelete

  // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete

  db.collection('Users').findOneAndDelete({
     _id: 123
   }).then((result) => {
    console.log(result);
  });

  //db.close();
});
