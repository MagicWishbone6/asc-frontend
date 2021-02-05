const User = require('./models/User')
const userSeedData = require('./userSeeds.json')

User.deleteMany({})
  .then( () => {
    return User.insertMany(userSeedData)
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {process.exit()})