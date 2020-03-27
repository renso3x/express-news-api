const redis = require('redis');
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const redisClient = redis.createClient(REDIS_PORT);

redisClient.on('connect', function() {
  console.log('Redis client connected');
});

redisClient.on('error', function (err) {
  console.log('Something went wrong ' + err);
});

module.exports = redisClient;