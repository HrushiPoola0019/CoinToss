var http = require('http');
http.createServer(function(request, response){
//var path = url.parse(request.url).pathname;
  console.log("request recieved");
  
  var string = 0;
  var random_generator = Math.floor(Math.random()*255)%3;
  if(random_generator%3)
  {
    string = 1;
  }
  if(random_generator%3==1)
  {
    string = Math.floor(Math.random()*255)%2;
  }

  console.log("string '" + string + "' chosen");
  response.writeHead(200, {"Content-Type": "text/plain",'Access-Control-Allow-Origin' : '*'});
  response.end(string.toString());
  console.log("data sent");
}).listen(8001);
console.log("server initialized");