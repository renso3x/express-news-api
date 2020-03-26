const superagent = require('superagent');

const responseHelpers = require('../../helpers/response');

exports.get = async (req, res) => {
  try {
    const pageSize = req.query.pageSize || 10;
    const page = req.query.page || 1;
    const NEWS_API_KEY = process.env.NEWS_API_KEY;
    const API_URL = `${process.env.NEWS_API}/top-headlines?country=ph&apiKey=${NEWS_API_KEY}&category=health&pageSize=${pageSize}&page=${page}`;

    const response = await superagent.get(API_URL);

    return responseHelpers.returnObject(response.text, res)
  } catch (e) {
    responseHelpers.throwInternalServerError(res);
  }

}