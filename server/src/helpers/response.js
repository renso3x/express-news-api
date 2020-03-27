function setHeaderToJSON(res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
}

exports.returnObject = function(object, res) {
  res.status(200);
  setHeaderToJSON(res);
  res.send(object);
};

exports.throwInternalServerError = function(res) {
  res.status(500);
  setHeaderToJSON(res);
  res.send(JSON.stringify({errorMessage: 'An Unknown Error Has Occured'}));
};