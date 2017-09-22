// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('59c2443f51c8ce16a91f924f')
	// },{
	// 	$set: {
	// 		completed: false
	// 	}
	// },{
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('59c2456009b06678a47600e8')
	},{
		$set: {
			name: 'Test'
		},
		$inc: {
			age: 2
		}
	},{
		returnOriginal: true
	}).then((result) => {
		console.log(result);
	});

	// db.close();
});
