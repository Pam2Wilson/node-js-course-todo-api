//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongo database server');
  }
  console.log('Connected to Mongo Database server');

 //  db.collection('Todos').findOneAndUpdate({
 //    _id: new ObjectID('59bac8039c0cedf1140061d7')
 //  }, {
 //    $set: {
 //      completed: true
 //    }
 //  }, {
 //    returnOriginal: false
 //  }).then((result) => {
 //   console.log(result);
 // });

 //  db.collection('Users').findOneAndUpdate({
 //    _id: new ObjectID('59bab4e00faa69035048e10e')
 //  }, {
 //    $set: {
 //      name: 'Mark Wilson'
 //  },
//     $inc: {
//       age: 1
//   }
 //  }, {
 //    returnOriginal: false
 //  }).then((result) => {
 //   console.log(result);
 // });

 db.collection('Users').findOneAndUpdate({
   _id: new ObjectID('59bab4e00faa69035048e10e')
 }, {
   $inc: {
     age: 1
   }
 }, {
   returnOriginal: false
 }).then((result) => {
  console.log(result);
});





  //db.close();
});
