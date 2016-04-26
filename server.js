var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var app = express();
app.use(bodyParser.json());
app.use(cors());


var db = mongojs('ecommerce', ['products']);

app.get('/api/products', function(req, res, next){
  var query = req.query;
  db.products.find(query, function(err, response){
    if (err) {
      res.status(500).json(err);
    }else{
      res.json(response);
    }
  });
});

app.get('/api/products', function(req, res, next){
  var idObj = {
    _id: req.params.id
  };
  db.products.findOne(idObj, function(err, response){
    if(err) {
      res.status(500).json(err, response)
    } else{
      res.json(response);
    }
  });

})

app.post('/api/products', function(req, res, next){
  db.products.save(req.body, function(error, response){
    if(error){
      return res.status(500).json(error);
    } else {
      return res.json(response);
    }
  });
});


app.put('/api/products/:id', function(req, res, next){
  if(!req.params.id){
    return res.status(400).send('id query needed');
  };
  var query = {
    _id: mongojs.objectId(req.params.id)
  };
  db.products.update(query, req.body, function(error, response){
    if (error){
      return res.status(500).json(error);
    } else {
      return res.json(response);
    }
  })
});
app.delete('/api/products/:id', function(req, res, next){

res.send("I haven't deleted anything, especially not " + req.params.id);
});



var port = 4000;
app.listen(port, function(req, res, next){
console.log("Easy listening on port " + port + ": the breeze");

})
