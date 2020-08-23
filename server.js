var express=require('express');
var app=express();


app.use(express.static(__dirname+'/dist'));





app.get('/*',function(req,res){
res.sendFile(__dirname+'/dist/assignment/index.html');
});


var port=process.env.PORT||8080;
app.listen(port,function(){
    console.log('server running on port '+port)
})