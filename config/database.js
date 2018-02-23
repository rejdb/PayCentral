module.exports = {
    // database: 'mongodb://localhost:27017/' + process.env.database,
    database: 'mongodb://unified:' + process.env.mongodb_pwd + '@sandbox-shard-00-00-rkkn8.mongodb.net:27017,sandbox-shard-00-01-rkkn8.mongodb.net:27017,sandbox-shard-00-02-rkkn8.mongodb.net:27017/' + process.env.database + '?ssl=true&replicaSet=sandbox-shard-0&authSource=admin',
    secret: 'mypassword'
}