const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')


mongodb.MongoClient.connect(process.env.CONNECTIONSTRING, async function (err,client) {

if(err) {
            console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
       }
       const db = client.db()       
const results = await db.collection('pets').find().toArray() //return Json
console.log(results)
})

// app.post('/stored', (req, res) => {
//     console.log(req.body);
//     db.collection('quotes').insertOne(req.body, (err, data) => {
//         if(err) return console.log(err);
//         res.send(('saved to db: ' + data));
//     })
// });
