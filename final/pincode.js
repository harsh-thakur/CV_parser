module.exports.pincodes=function(pincode)
{
  var words1=require('./words.js')
  var pinArr=[];
  for(let j=0;j<pincode.length;j++)
  {
    var request = require('request');
           let address=[];
           console.log(pincode[j]);
             request({
             url:`https://maps.googleapis.com/maps/api/geocode/json?address=${pincode[j]}&key=AIzaSyATAf58891KC6ohOJPsWL4561cUbsqz2qg`,
             json:true
             },(error,response,body)=>{
             if(error){
             callback("unable to connect forecast.io ")
            }else if(response.statusCode ==400){
            callback("unable to fetch data ")
            }else if(response.statusCode ==200){
            for(let i=0;i<body.results[0].address_components.length;i++){
             //  console.log(body.results[0].address_components[i].long_name)
             address.push(body.results[0].address_components[i].long_name)
           }
           console.log("address:",address.toString())
           pinArr.push(address.toString());
           }

           })

  }
  words1.obj.details.address=pinArr

        }
