const Post = require('./models/Post')
const postSeedData = require('./postSeeds.json')

Post.deleteMany({})
  .then( () => {
    return Post.insertMany(postSeedData)
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {process.exit()})