const http = require('http');
const port=process.env.PORT || 2999


var url = require('url')
var fs = require('fs')

var server = http.createServer(function(request, response){   
  var parsedUrl = url.parse(request.url, true)
  var path = request.url
  // console.log("path: " + path)
  var method = request.method

  console.log('HTTP PATH: ' + path)

  if (path == '/translation'){
    response.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Headers': 'Accept',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',

    // "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept",
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    });
    response.write('translation')
    response.end()
  }else if(path == '/submit'){
    response.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    });
    response.write('submit')
    response.end()
  }else{
    response.statusCode = 404
    response.end()
  }
})

server.listen(port)