module.exports.textRact=function(){
var textract = require('textract');
var words=require('./words.js')
var mammoth=require('mammoth');
var fs=require('fs');
var pincodes=require('./pincode.js')
var textArr=[];
var dataArr=[];
textract.fromFileWithPath("./uploads/abc.docx", function( error, text ) {
//  console.log(text.trim().toString())
// fs.writeFile('message1.txt', text.toString(), (err) => {
//       if (err) throw err;
//       console.log('The file has been saved!');
//     });

console.log('***************************************************************************')
textArr=text.split('.');
//console.log(textArr.length);
//console.log("text*****",text.toString())

  mammoth.extractRawText({path: "uploads/abc.docx"})
      .then(function(result){
           var data = result.value; // The raw text
          var messages = result.messages;
          //console.log(data.trim().toString())

          dataArr=data.split('.');
        //  console.log(dataArr.length)

//*******************************************************************************************************************************

          const fs = require('fs');


          function cleanStr(str) {
            return str.replace(/\r?\n|\r|\t|\n/g, '').trim();
          }
          function cleanTextByRows(data) {
            var rows,
                clearRow,
                clearRows = [];

            rows = data.split("\n");
            for (var i = 0; i < rows.length; i++) {
              clearRow = cleanStr(rows[i]);
              if (clearRow) {
                clearRows.push(clearRow);
              }
            }
          //  console.log(clearRows);
            return clearRows.join("\n") + "\n";
          }




              var data  = cleanTextByRows(data);
              data=data.replace(/[\s]+/gm,' ')
              data=data.toString();
              text=text.toString();
              //console.log("mam3ooth*****",data.toString())
              // fs.writeFile('message.txt', data, (err) => {
              //   if (err) throw err;
              //   console.log('The file has been saved!');
              // });
              text=text.trim();
              data=data.trim();

              let a = text.replace(/\W+/gm,":")
              let b = data.replace(/\W+/gm,":");
              //console.log(a);
              //console.log(b);
              let header=a.replace( RegExp(`(${ b })`,'gmi'),"");
              header=header.replace(/:/g,' ')
              //console.log(header)

              var headArr=header.split(' ')

              console.log(headArr.length)
              console.log("jhghjg",headArr[1]);
              if(headArr.length>1)
              {
                if(headArr[0]=='')
                {
                  words.obj.details.name.first_name=headArr[1];
                  //words.obj.details.name.last_name=headArr[2];
                }
                else{
                  words.obj.details.name.first_name=headArr[0];
                  //words.obj.details.name.last_name=headArr[1];
                }



                //Email Starts here
                //console.log(text)
                      if(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/gm.test(text))
                      {
                        var mailId=text.toString().match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/gm);
                        console.log("email id is :",mailId[0]);
                        words.obj.details.email=mailId[0];
                        }
                        else{
                          console.log("No mail found");
                        } //End of email


                        //contact starts here
                              if(/(([\+])?([\(]?(\d{1}\-\d{3}|[+]|[+]\d{2}|\d{2,3}|\d{1})?[\)]?)[\-|\s|\.]*?([\(]\d{1}[\)])?[(]?\d{3,4}[)]?[\-|\s|\.]*?\d{3}[\-|\s|\.]*?\d{2}[\-|\s|\.]?\d{1,2})/.test(text))
                                {
                                var phone=text.toString().match(/(([\+])?([\(]?(\d{1}\-\d{3}|[+]|[+]\d{2}|\d{2,3}|\d{1})?[\)]?)[\-|\s|\.]*?([\(]\d{1}[\)])?[(]?\d{3,4}[)]?[\-|\s|\.]*?\d{3}[\-|\s|\.]*?\d{2}[\-|\s|\.]?\d{1,2})/gm);
                                console.log("phone id is :",phone[0]);
                                words.obj.details.mobile=phone[0]
                                }
                                else{
                                  console.log("No phone found");
                                }//phone

                        if(/[^\d]\d{5,6}[^a-z|[^@|^\d]/.test(text.toString())){
                       let pincodereg=text.toString().match(/[^\d]\d{5,6}[^a-z|[^@|^\d]/gm)
                         var pincode=pincodereg.toString().match(/\d{5,6}/gm)
                         // console.log("pincode:",pincode[0])


                      }
                      if(pincode!=null && pincode!=undefined )
                      pincodes.pincodes(pincode);
              }


      })
      .done();





})
}