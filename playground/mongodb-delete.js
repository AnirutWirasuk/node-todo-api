// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// DeleteMany
	db.collection('Todos').deleteMany({text: 'Test text'}).then((result) => {
		console.log(result);
	});

	// DeleteOne
	// db.collection.('Todos').deleteOne({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').deleteMany({name: 'Anirut'});

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('59c2456009b06678a47600e8')
	}).then((results) => {
		console.log(JSON.stringify(results, undefined, 2));
	});

	// db.close();
});
