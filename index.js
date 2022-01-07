const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')


mongodb.MongoClient.connect(process.env.CONNECTIONSTRING,{useUnifiedTopology:true}, async function (err,client) 
{

    if(err) 
    {
            console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
    const db = client.db()   
    //FOR QUERY    
    // const results = await db.collection('pets').find({species:'cat'}).toArray() //return Json
    // console.log(results)
    //FOR INSERT
    // const pets = db.collection('pets')
    // await pets.insertOne({name:'Hugo',species:'cat',age:4},(err, data) => {
    //     if(err)  console.log(err);
    //     console.log('saved to db: ');
    // })

    
    client.close()


})


