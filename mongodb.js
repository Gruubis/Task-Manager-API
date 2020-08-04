const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id)
console.log(id.toHexString())

MongoClient.connect(connectionURL, { useUnifiedTopology: true}, (error, client) => {
    if(error){
       return console.log('unable to connect to dabase')
    }

    const db = client.db(databaseName)

    db.collection('users').deleteMany({
        age: 20
    }).then((result)=>{
        console.log(result.deletedCount)
    }).catch((error) =>{
        console.log(error)
    })
})