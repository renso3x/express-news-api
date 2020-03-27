const superagent = require('superagent');

const redisClient = require('../../config/database');
const responseHelpers = require('../../helpers/response');

exports.get = async (req, res) => {
  try {
    const pageSize = req.query.pageSize || 10;
    const page = req.query.page || 1;
    const NEWS_API_KEY = process.env.NEWS_API_KEY;
    const API_URL = `${process.env.NEWS_API}/top-headlines?country=ph&apiKey=${NEWS_API_KEY}&category=health&pageSize=${pageSize}&page=${page}`;

    const newsRedisKey = `news:${page}`;

    return redisClient.get(newsRedisKey, async (err, news) => {
      if (err) {
        throw new Error("Not found.");
      }

      if (news)  {
        return responseHelpers.returnObject({
          source: 'cache',
          data: JSON.parse(news)
        }, res)
      } else {
        const response = await superagent.get(API_URL);

        const articles = JSON.parse(response.text);

        redisClient.setex(newsRedisKey, 3600, JSON.stringify(articles));
        return responseHelpers.returnObject({ source: 'api', data: articles }, res)
      }
    })
  } catch (e) {
    return responseHelpers.throwInternalServerError(res);
  }
}