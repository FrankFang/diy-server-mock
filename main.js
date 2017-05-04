var b = document.getElementById('btn')
var ul = document.getElementsByTagName('ul')[0]
var page = 1
b.onclick = function(){
  page += 1
  ajaxGet('/page-' + page, function(object){
    var result = object.items
    var hasNext = object.hasNext
    for(var i=0;i<result.length; i++){
      var li = document.createElement('li')
      li.textContent = result[i].text
      ul.appendChild(li)
    }
    if(hasNext === false){
      b.disabled = true
      b.textContent = '别点了'
    }
  }, function(xhr){
    console.log('fail')
    console.log(xhr)
  })
}

function ajaxGet(path, successFn, errorFn){
  var httpRequest = new XMLHttpRequest() // 获取实例
  httpRequest.open('GET', path) // 设置GET 路径
  httpRequest.onreadystatechange = function(){
    if(httpRequest.readyState === XMLHttpRequest.DONE){
      if(httpRequest.status === 200){
        var object = JSON.parse(httpRequest.responseText)
        successFn(object)
      }else{
        errorFn(httpRequest)
      }
    }
  }
  httpRequest.send()
  return httpRequest
}
