var http=require('http')



http.createServer(function(req,res){
	var str = '';
	req.on('data',function(err,data){
		str += data
	});
	req.on('end',function(err){
		var json = querystring.parse(str)
		console.log(json)
	})


}).listen(8000,function(){
	console.log('启动')
})