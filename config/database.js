module.exports = {
    // database: 'mongodb://localhost:27017/' + process.env.database,
    database: 'mongodb://rejdb:' + process.env.mongodb_pwd + '@payjuan-shard-00-00-fttrp.mongodb.net:27017,payjuan-shard-00-01-fttrp.mongodb.net:27017,payjuan-shard-00-02-fttrp.mongodb.net:27017/' + process.env.database + '?ssl=true&replicaSet=PayJuan-shard-0&authSource=admin',
    secret: 'mypassword'
}