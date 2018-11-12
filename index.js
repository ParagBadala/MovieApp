var express = require('express');
var parser = require('body-parser');
var exp = express();
var fs = require('fs');
var dataS = require('../src/assets/Data/data.json');
var appendData = dataS;
var getUrl = "/rest/api/get-films";
var postUrl = "/rest/api/post-film";
/**
 * Get Method
 */
exp.route(getUrl).get((req,res)=>{
    console.log("Get Invoked");
    res.send(dataS);
});

/**
 * Post Method
 */

exp.use(parser.json());
exp.use(parser.urlencoded({ extended: false }));

exp.route(postUrl).post((req,res)=>{
    console.log("Post invoked");
    var Obj = req.body;
    appendData.push(Obj);
    //res.send("Product Added");
    fs.writeFileSync('../src/assets/Data/data.json',JSON.stringify(appendData));

})

// exp.post('/rest/api/post',function(req,res){
//     console.log("Add Url invoked")
//     var Obj = req.body;
//     console.log(Obj);
//     appendData.push(Obj);
//     console.log(appendData);
//     res.send("Product Added");
//     //fs.writeFileSync('Project_Assignment/Schema/productCollection.json',JSON.stringify(appendData));
//     }); 

exp.listen(3001,()=>console.log("Running"))