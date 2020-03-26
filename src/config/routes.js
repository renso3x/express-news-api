const newsRouter = require('../api/news/router');

module.exports = (app) => {
  app.use('/news', newsRouter);


  app.use('*', function(req,res){
    res.status(404)
    res.json({ message: 'Cannot find API.' });
  });
}