//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongo database server');
  }
  console.log('Connected to Mongo Database server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('59baba989c0cedf114005ce5')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch documents');
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err) => {
  //   console.log('Unable to fetch documents');
  // });

  var error = (err) => {
    console.log('Unable to fetch documents');
  };

  db.collection('Users').find({name: 'Pam Wilson'}).count().then((count) => {
    console.log(`Users count: ${count}`);
    //console.log(JSON.stringify(docs, undefined, 2));
  }, error);

  db.collection('Users').find({name: 'Pam Wilson'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, error);


  //db.close();
});
