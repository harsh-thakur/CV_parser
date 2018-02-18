module.exports.logic=function(strongArr,arr,h1Arr,html,data){
  console.log("in logic tables");
  //console.log(data)
  var tables=require('./tables.js');
  var pincodes=require('./pincode.js');
  var words=require('./words.js');
  
  var skill1=require('./skills.js');
  var new_arr=[];


  for(i=0;i<strongArr.length;i++){
    strongArr[i]=strongArr[i].trim();
  }

  for(i=0;i<h1Arr.length;i++){
    h1Arr[i]=h1Arr[i].trim();
  }
  var DomParser = require('dom-parser');
  var parser = new DomParser();
  var dom = parser.parseFromString(html);
  var img =dom.getElementsByTagName('img');
  var myArr=[];
  
for(i=0;i<strongArr.length;i++)
{
  for(j=0;j<words.length;j++)
  {
      if(words[j].test(strongArr[i])){
        myArr.push(strongArr[i])
      }
  }

}
//console.log(strongArr)
//console.log(myArr);

        var  new_arr=arr.join('')
       new_arr=new_arr.replace(/<[a-z]>/gmi,'')
       new_arr=new_arr.replace(/<\/[a-z]>/gmi,'\n')
       var update_arr=new_arr.split('\n');
      for(let i=0;i<update_arr.length;i++)
      {
        update_arr[i]=update_arr[i].replace(/<[a-z]+>/gm,'')
        update_arr[i]=update_arr[i].replace(/<\/[a-z]+>/gm,'')
        update_arr[i]=update_arr[i].replace(/\t/gm,'')
        update_arr[i]=update_arr[i].replace(/\s{2,}/gm,'')
      }

      if(img.length>0){
        var src=img[0].getAttribute('src');
        //console.log(src)
        var str=arr.join('');
        arr=str.split(/<img.*\/>/g)
        arr.shift();
        update_arr.shift();
      }

function foo(update_arr)
{
  var name=[];
  update_arr=update_arr.trim();
name=update_arr.split(' ');

if(name.length==1)
{
  words.obj.details.name.first_name=name[0];
  console.log(name[0]);
}
else
{
  words.obj.details.name.first_name=name[0];
  words.obj.details.name.last_name=name[name.length - 1];
  console.log(name[0]);
  console.log(name[name.length-1]);
}

}

//for finding name
  if(h1Arr != null && h1Arr.length>0)
  {
    if( h1Arr[0].trim()!="CV" && h1Arr[0].trim()!="RESUME")
    {
        console.log("Name is in h1:",update_arr[0]);
        foo(update_arr[0]);

    }
    else {
       console.log("Name is in h1 :",update_arr[1])
       foo(update_arr[1]);
    }
  }

  else if(strongArr != null && strongArr.length>0) {

       if( strongArr[0].trim()!="CV" && strongArr[0].trim()!="RESUME")
       {
         console.log("Name is in strong :",update_arr[0]);
         foo(update_arr[0]);
       }
       else{
         console.log("Name is in strong :",update_arr[1])
         foo(update_arr[1]);
       }
     }
     else {
       console.log("Name is :",update_arr[0])
       foo(update_arr[0]);
     }

   //end of name
   //console.log("**************",arr[0]);

//Start for Gender
    var gend1=/\bmale/i;
    var gend2=/\bfemale/i;
    if(gend1.test(arr))
    {
      console.log("Gender : male");
      words.obj.details.gender="Male";
    }
    else if(gend2.test(arr)){
      console.log("Gender : female");
      words.obj.details.gender="Female";
    }
    else{
      console.log("NO gender found")
    }//End of Gender

//DOB starts here
    if(/\d{1,2}(,|<sup>th<\/sup>|<sup>rd<\/sup>|<sup>nd<\/sup>)(\s)?[a-zA-Z]+(\s)?(,)?(\s)?\d{4}/.test(arr) ||  /\d{1,4}[/|-]\d{2}[|/|-]\d{1,4}/.test(arr))
    {
      var dob1=[];
      var dob2=[];
      var dob1=arr.toString().match(/\d{1,2}(,|<sup>th<\/sup>|<sup>rd<\/sup>|<sup>nd<\/sup>)(\s)?[a-zA-Z]+(\s)?(,)?(\s)?\d{4}/)
      var dob2=arr.toString().match(/\d{1,4}[/|-]\d{2}[|/|-]\d{1,4}/)

      if(dob1 != null && dob1.length > 0){
        dob1[0]=dob1[0].replace(/<(\/)?[a-z]+>/gm,'')
        console.log("DOB : ",dob1[0]);
        words.obj.details.dateOfBirth=dob1[0];
      }
      else if(dob2 != null && dob2.length > 0)
      {
        console.log("DOB : ",dob2[0]);
        words.obj.details.dateOfBirth=dob2[0];
      }
      }
      else{
        console.log("No DOB found");
      } //End of DOB




//Email Starts here
      if(/\w+([.\w]+)+@[a-z]+([.][a-z]+){1,2}/.test(arr))
      {
        var mailId=arr.toString().match(/\w+([.\w]+)+@[a-z]+([.][a-z]+){1,2}/);
        console.log("email id is :",mailId[0]);
        words.obj.details.email=mailId[0];
        }
        else{
          console.log("No mail found");
        } //End of email

        if(/[^\d]\d{5,6}[^a-z|[^@|^\d]/.test(arr.toString())){
       let pincodereg=arr.toString().match(/[^\d]\d{5,6}[^a-z|[^@|^\d]/gm)
         var pincode=pincodereg.toString().match(/\d{5,6}/gm)
         // console.log("pincode:",pincode[0])


      }

//contact starts here
      if(/(([\+])?([\(]?(\d{1}\-\d{3}|[+]|[+]\d{2}|\d{2,3}|\d{1})?[\)]?)[\-|\s|\.]*?([\(]\d{1}[\)])?[(]?\d{3,4}[)]?[\-|\s|\.]*?\d{3}[\-|\s|\.]*?\d{2}[\-|\s|\.]?\d{1,2})/.test(arr))
        {
        var phone=arr.toString().match(/(([\+])?([\(]?(\d{1}\-\d{3}|[+]|[+]\d{2}|\d{2,3}|\d{1})?[\)]?)[\-|\s|\.]*?([\(]\d{1}[\)])?[(]?\d{3,4}[)]?[\-|\s|\.]*?\d{3}[\-|\s|\.]*?\d{2}[\-|\s|\.]?\d{1,2})/gm);
        console.log("phone id is :",phone[0]);
        words.obj.details.mobile=phone[0]
        }
        else{
          console.log("No phone found");
        }//phone

        //console.log("pincode",pincode[0])
        if(pincode!=null)
        var pincode1=pincode[0];
        if(pincode!=null && pincode!=undefined )
        pincodes.pincodes(pincode1);
        //console.log(data)
        skill1.skill1(data);



      //just checkin whethere words is displaying in json format or not


}


