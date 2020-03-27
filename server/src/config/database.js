const redis = require('redis');

const CONFIG = {
  port: process.env.REDIS_PORT || 6379,
  host: process.env.REDIS_HOST || "127.0.0.1",
  url: process.env.REDIS_URL || '',
  password: process.env.REDIS_PASSWORD || ''
}

const redisClient = redis.createClient(CONFIG);

redisClient.on('connect', function() {
  console.log('Redis client connected');
});

redisClient.on('error', function (err) {
  console.log('Something went wrong ' + err);
});

module.exports = redisClient;