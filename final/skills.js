module.exports.skill1=function(data)

{   console.log("i am in tables")


    var a=data;
    //console.log("aaaaaa",a);

     let keyUpgrade = `Summary of Qualification(|s)|Additional Skill(|s)|Campus Activitie(|s)|ACADEMIC CREDENTIAL(|S)|career summary|key project(|s)|Technical Skill(|s)|ACADEMIC QUALIFICATION(|S)|Professional Summary|PROFESSIONAL TRAINING & PROJECTS|Summary|Professional Objective|Employment Objective|Car(e|r)er Objective|Objective|Career Goal|Five Year Plan|Interests (|and) (|Hobbies)|Employment History|PROFESSIONAL DOSSIER|Work History|Work Experience|Professional Experience|Professional Background|Preference(|s)|Additional Experience|Career Related Experience|Related Experience|Industry Experience|Accounting Experience|Freelance Experience|Freelance|Army Experience|Military Experience|Strength(|s)|Military Background|Experience|Academic Background|Academic Experience|Program(|s)|Related Course(|s)|Course(|s)|Education and Training|Education|Educational Background|Educational Qualification(|s)|Educational Training|Academic Training|Professional Training|Training|Course Project Experience|Related Course Project(|s)|Internship Experience|Internship(|s)|Apprenticeship(|s)|College Activitie(|s)|Certification(|s)|Special Training|Activities and Honor(|s)|Affiliation(|s)|Professional Affiliation(|s)|Professional Association(|s)|Association(|s)|Professional Membership(|s)|Membership(|s)|Athletic Involvement|Community Involvement|Civic Activitie(|s)|Extra-Curricular Activitie(|s)|POSITIONS OF RESPONSIBILITY|Reporting|EXTRA CURRICULAR (|ACHIEVEMENT(|s)|Activities)|Extra\\-?curricular|Professional Activitie(|s)|Volunteer Work|Volunteer Experience|Publication(|s)|Presentation(|s)|Convention(|s)|Credential(|s)|Skills (|&|and) Expertise|Qualification(|s)|Areas of Experience|Areas of Expertise|Areas of Knowledge|Career Related Skill(|s)|Professional Skill(|s)|Specialized Skill(|s)|Computer Skill(|s)|Computer Knowledge|Software|Technologie(|s)|Technical Experience|Proficiencie(|s)|Language Competencies and Skill(|s)|Programming Language(|s)|Technology Skill(|s)|Skill(|s)|Academic Honor(|s)|Honor(|s)|Accolade(|s)|Endorsement(|s)|Achievement(|s)|Award(|s)|Distinction(|s)|Fellowship(|s)|Scholarship(|s)|Hobbie(|s)|Personal Interest(|s)|Responsibilitie(|s)|Interest(|s)|Miscellaneou(|s)|personal project(|s)|group project(|s)|other project(|s)|project(|s)|(Language(|s)[ ]Proficiency)|Language(|s)|personal detail(|s)|Accomplishment(|s)|personal information|SAP HCM SKILLS`
const keys = new RegExp(`(((^(\\s)<strong>|^(\\s)<h1>)(\\n*|\\s*)([A-Z]([A-Z]+([ ]?[A-Z]+?)))(\\n*|\\s*)(<\/strong>|<\/h1>))|(^\\s*([A-Z]+\\s*)*\\n))`, 'gm')
let matches;
if (a.match(keys) === null) {

} else {
  matches = a.match(keys).map(element => {
      if (element === null) {

      } else {
          return element.replace(/<strong>|<h1>|(\\n*|\\s*)|<\/strong>|<\/h1>/gm, '').trim()
      }
  })
  keyUpgrade += '|'
  keyUpgrade += matches.join('|')
}


let finalKeys = new RegExp(`(([^\\w*]<strong>|[^\\w*]<h1>)(\\n*|\\s*|\\t*)(${ keyUpgrade })((\\W){1,4})*(\\n*|\\s*\\t*)(</strong>|</h1>)(\\n*))`, 'gim')

let finalMatches = new Array(...a.match(finalKeys))
// const extendMatch = a.match(new RegExp(`^\\s*([A-Z]+\\s*)*\\n`,'gm') )
// if ( extendMatch != null ){
//   finalMatches.push(...extendMatch)
// }
const regarr = finalMatches.map(element => element.trim().replace(/\s+|\n+/g, '\\n*\\s*'))
 // console.log("................",regarr);
let matches1 = []
for (let i = 0; i < regarr.length - 1; i++) {
  var j = i;
  var matches2 = regarr[j]
  // .trim('\n').replace('\n','\\n*\\s*')
  var matches3 = regarr[++j]
  // matches2.replace('\n','\\n*\\s*')
  let regex = `(${ matches2 })\\n?(.*\\n)+(\\s*${ matches3 })`
  // let regex = `(${ matches2 })\n*(.*\n)+(\s*${ matches3 })`
  // console.log(regex);
  keys1 = new RegExp(regex, 'g')
  // var keys1 = `/(${ matches2 })\\n?(.*\\n)+(${ matches3 })/g`
  if(a.match(keys1))
  {
      matches1.push(a.match(keys1))
  }
}
 //console.log("*********************************",matches1)
matches1.push(a.match(new RegExp(`${ matches3 }\\n?(.*\\n)+`,'gm')))
//console.log(matches1);
  let skills = [];
  // let lang = [];
 let career1=[];
  let education1=[];
matches1.forEach(element => {

  let lo = element[0].split('\n')
  console.log(lo[0])
  var skillreg=['technical skills','technology skills','Skills']
  for(i=0;i<skillreg.length;i++){
    let skill = (lo[0]).toLowerCase().includes(skillreg[i])
    if(skill == true){
    skills.push(lo)
    }
  }


var careerreg=['objective','career','summary']
for(i=0;i<careerreg.length;i++){
  var career = (lo[0]).toLowerCase().includes(careerreg[i])
  if(career == true){
   career1.push(lo)
   // console.log('true');
  }
}

var edureg=['academics','academic','education']
for(i=0;i<edureg.length;i++){
var edu = (lo[0]).toLowerCase().includes(edureg[i])
if(edu == true){
education1.push(lo)
// console.log('true');
}
}


});
  //console.log("education1",education1[0].join('\n'))
   skill(skills[0])
   career_obj(career1[0])
   education(education1[0])
}



  var words=require('./words');
  var tableData=require('./tables.js').table
  //words.obj.details.academicQualifications="hello";
  var DomParser = require('dom-parser');
  var parser = new DomParser();



function skill(skills){


if(skills!=null && skills!=undefined && skills.length > 0){

var str=skills.splice(1,skills.length-1).join('\n')

var keys1 = /(^(\s*<li>)\n*.*(\n*\s*<\/li>)|^(\s*<p>)\n*.*(\n*\s*<\/p>))/gm
var c=str.match(keys1)
       var skillarr=c.toString().replace(/<[a-z]+>|\|\•|<\/[a-z]+>|<[a-z]+\/>|Languages|\t|\:|\n/gmi,'').trim().split(',')

       console.log("skills are:",skillarr)
       words.obj.details.skills=skillarr;
       }else{
        console.log('no skills are present')
       }

}
function career_obj(career){
if(career!=null && career!=undefined && career.length >1){
 var str=career.splice(1,career.length-1).join('\n')

 var keys1 = /(^(\s*<li>)\n*.*(\n*\s*<\/li>)|^(\s*<p>)\n*.*(\n*\s*<\/p>))/gm
 var c=str.match(keys1)
 // var key2=/[a-z]\s?[a-z]\s?(\,)|/gm
  //console.log(c)
 var careerarr=c.toString().replace(/<[a-z]+>|<\/[a-z]+>|<[a-z]+\/>|Languages|\t|\:|\n/gmi,'').trim()
        console.log("career are:",careerarr)
        words.obj.details.careerObjective=careerarr;

}
}

function education(edu){

    if( edu === null || edu === undefined || edu.length === 0){
        return
    }
     edu=[edu.join('\n')];
    let arr = {}

    edu.forEach( (ele,i) => {
        // console.log(" 🥈",ele.trim().match(/\s*\n*(<table>)\\n?(.*\\n)+(<\/table>)\n*/gm))
        // console.log(" 🥈", parser.parseFromString(ele).getElementsByTagName('table'))
        ele = ele.replace(/<\/body>/gm,'')
        console.log(ele);


 if (parser.parseFromString(ele).getElementsByTagName('table') && ele.includes('<table>','</table>')){
            arr[i] = tableData(ele)
        }else if(parser.parseFromString(ele).getElementsByTagName('ul') && ele.match(/<table>|<\/table>/gm) != null){
            arr[i] = listData(ele)
        }else{
        arr[i] = ele.toString().replace(/<[a-z\d]+>|<\/[a-z\d]+>|<[a-z\d]+\/>|Languages|\t|\:|\n/gmi,'').trim()
        }
    })

    ed = []
    // let key = /\s(19[5-9]\d|20[0-4]\d|2050)/g;
    console.log(" 💯",arr[0]);
    words.obj.details.academicQualifications=arr[0];


    function listData(data){
        // data = data.replace(/(<.+>|<\/.+>)/gmi,"").trim()
        let dom = parser.parseFromString(data);
        let ul = dom.getElementsByTagName('ul');
        var inputList2 = Array.prototype.slice.call(ul);
        let list = []
        inputList2.forEach(ShowResults2);
        function ShowResults2(value, index, ar) {
          list.push(value.innerHTML)
        }

        list = list.map( ele => {
            // console.log(ele)
            return ele.trim().replace(/<li>|\n*/gm,"").trim().split('</li>').filter( el => el.length > 1)
        })

        // console.log(" 👍",data.match(/<ul>\\n?(.*\\n)+<\/ul>/gim))
        // console.log(" 👍",inputList2.innerHtml)
        return list[0]

    }
}


