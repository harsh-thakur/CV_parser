
 module.exports.table=function(html){
    console.log("In tables function");
  var DomParser = require('dom-parser');
  var parser = new DomParser();
  var fs=require('fs');
 
  var obj={};
  var finalRows=[]
  var tableArr=[];
  var heading=[];
  var final_obj=[];
  var dom = parser.parseFromString(html);
 
  var table =dom.getElementsByTagName('table');
  var inputList2 = Array.prototype.slice.call(table);
  console.log("input list of tables tags are :",inputList2);
  inputList2.forEach(ShowResults2);
  function ShowResults2(value, index, ar) {
    tableArr.push(value.innerHTML)
  }
 
  for(l=0;l<tableArr.length;l++){
  var str=tableArr[l]
  var count = (str.match(/<tr>/g) || []).length;
  if(count>1){
      str=str.replace(/<[a-z]{1,2}>/g,'').replace(/<\/[a-z]{1,2}>/g,'').replace(/\s{2,}/g,'')
  var table_head=str.split(/<\/strong>/g);
  for(i=0;i<table_head.length;i++){
      regex=/<strong>/gmi
      if(table_head[i].match(regex)){
          var head=table_head[i].replace(regex,'')
          heading.push(head)
      }
  }
 
  var tr_array=[]
  var td_array=[]
 
  str=tableArr[l]
  str=str.replace(/<[a-z]{3,}>/g,'').replace(/<\/[a-z]{3,}>/g,'').replace(/\s{2,}/g,'').replace(/<[a-z]>/g,'').replace(/<\/[a-z]>/g,'').replace(/\n/gm,'')
  tr_array=str.split(/<\/tr>/g);
  tr_array.shift()
  tr_array.pop();
 
  for(i=0;i<tr_array.length;i++){
      tr_array[i]=tr_array[i].replace(/<tr>/,'').replace(/<td>/g,'').replace(/<td colspan="\d">/g,'').replace(/<td rowspan="\d">/g,'');
      td_array[i]=tr_array[i].split(/<\/td>/);
      td_array[i].pop();
      finalRows.push(td_array[i])
  }
 
  if(heading.length==finalRows[0].length)
  {
      for(i=0;i<finalRows.length;i++){
          var flag=0;
          for(j=0;j<heading.length;j++){
              if(!finalRows[i][j]){
                  flag=1;
                  break;
              }
              else{
              obj[heading[j]]=finalRows[i][j];
             }
          }
          if(flag==0){
              final_obj[i]=Object.assign({},obj)
          }
      }
  }
  }
 }
 console.log(final_obj)
 return final_obj
 
 }
 