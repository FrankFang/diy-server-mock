var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 8888;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  //从这里开始看，上面不要看
  if(path === '/index'){
    response.setHeader('Content-Type','text/html; charset="utf-8"')
    var string = fs.readFileSync('./index.html', 'utf-8')
    response.end(string)
  }else if(path === '/style'){
    response.setHeader('Content-Type','text/css')
    var cssString = fs.readFileSync('./style.css', 'utf-8')
    response.end(cssString)
  }else if(path === '/main'){
    response.setHeader('Content-Type','text/javascript')
    var jsString = fs.readFileSync('./main.js', 'utf-8')
    response.end(jsString)
  }else if(path === '/data'){
    response.setHeader('Content-Type','application/json')
    var jsonString = fs.readFileSync('./data.json','utf-8')
    response.end(jsonString) 
  }else if(path === '/page-2'){
    response.setHeader('Content-Type','application/json')
    var jsonString = fs.readFileSync('./page-2.json','utf-8')
    response.end(jsonString) 
  }else if(path === '/page-3'){
    response.setHeader('Content-Type','application/json')
    var jsonString = fs.readFileSync('./page-3.json','utf-8')
    response.end(jsonString) 
  }else{
    response.statusCode = 404
    response.setHeader('Content-Type','text/html')
    var notFoundFile = fs.readFileSync('./404.html', 'utf-8')
    response.end(notFoundFile)
  }


  // 代码结束，下面不要看
  console.log(method + ' ' + request.url)
})

server.listen(port)
console.log('监听 ' + port + ' 成功，请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
