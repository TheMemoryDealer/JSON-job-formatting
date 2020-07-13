var fs = require('fs');
let dataFile  = require('./3-minds-digital.json');

var files = fs.readdirSync('./london/'); // all json files stored here

for (let j = 0; j < files.length; j++){ // we loop through them 
    // console.log(files[j]);
    var fileContents = fs.readFileSync(`./london/${files[j]}`, 'utf8'); // read in that file
    console.log("-----------------------------NEXT FILE---------------------------------------------------")
    let obj = JSON.parse(fileContents);
    for (let i = 0; i < obj.jobs.length; i++) { // loop through json obj attribute obj.YOURATTR.length
        let app = obj.jobs[i];
        // console.log(app.descriptionHtml);
        var str2 = app.descriptionHtml.replace(/\n|\r/g, "");
        // console.log(str2);
        var arrStr = str2.split(/[<!]/);
        // var res = str2.split("</");
        console.log(arrStr);
        for (let z=0; z<arrStr.length; z++){
            console.log(arrStr[z])
        }
        // for (let k = 0; k < res.length; k++) {
        //     console.log(res[k]);
        // }
        return
        // console.log(typeof app.descriptionHtml);
        console.log("-----------------------------NEXT JOB---------------------------------------------------")
    }
}