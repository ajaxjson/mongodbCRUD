const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')


mongodb.connect(process.env.CONNECTIONSTRING,function (err,client) {

})