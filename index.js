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

    // FOR INSERT
    const pets = db.collection('pets')
    await pets.insertOne({name:'Hugo',species:'cat',age:4},(err, data) => {
        if(err)  console.log(err);
        console.log('saved completed');
    })

    //FOR UPDATE
    // const pets = db.collection('pets')
    // await pets.updateOne({_id:mongodb.ObjectId('61d712041d45754573c9908f')},{$set:{name:'Always hungry',age:5}},(err, data) => {
    //     if(err)  console.log(err);
    //     console.log('update completed');
    // })
    
    //FOR DELETE
    // const pets = db.collection('pets')
    // await pets.deleteOne({_id:mongodb.ObjectId('61d712041d45754573c9908f')},(err, data) => {
    //     if(err)  console.log(err);
    //     console.log('DELETE Completed');
    // })
    
    

    client.close()


})


