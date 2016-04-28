var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products');
var product = require('./productSchema.js')

var app = express();
app.use(bodyParser.json());
app.use(cors());



app.get('/api/products', function(req, res, next){
product.find( function(error, response){
  if(error){
    res.status(500).json(error)
  } else {
    res.json(response)
  }
})
});

app.get('/api/products/:id', function(req, res, next){
  product.findById(req.params.id, function(err, response){
    if(err){
    res.status(500).json(err);
  }
   else {
    res.json(response);
  }
})
});

app.post('/api/products', function(req, res, next){
  product.create(req.body, function(error, response){
    res.send(response);
});
});

app.put('/api/products/:id', function(req, res, next){
  product.findByIdAndUpdate(req.params.id, req.body, function(error, response){
    if(error){
      return res.status(500).json(error)
    }else {
      return res.json(response)
    }
  });

});



var port = 4000;
app.listen(port, function(req, res, next){
console.log("Easy listening on port " + port + ": the breeze");

});
