const parse = require('csv-parse');
const fs = require('fs');



function readFile(srcPath) {
  return new Promise(function (resolve, reject) {
    let myArr = [];
    let tempObj = {};
    const file =  fs.createReadStream('./expenses.csv')

  .pipe(parse())
  .on('data', function (data) {
    // console.log(;
    if (data[1] !== ''){

     // tempObj =
      myArr.push({
        amigo: data[0],
        comnum: data[1]
      })
    }

    // console.log('Name: %s Age: %s', data.NAME, data.AGE)
  });

  file.on("finish", () => { myresolve(myArr); });
      // fs.readFile(srcPath, 'utf8', function (err, data) {
      //     if (err) {
      //         reject(err)
      //     } else {
      //       myresolve(data);
      //     }
      // });
  })
}

readFile('./expenses.csv');

function myresolve(data) {
  // console.log(data.column);

  console.log(data.length);
  // data.filter(function(item) {
  //   console.log(item.comnum);
  // })
}


// fs.readFileAsync = function(filename) {
//   return new Promise(function(resolve, reject) {
//       fs.readFile(filename, function(err, data){
//           if (err)
//               reject(err);
//           else
//               resolve(data);
//       });
//   });
// };





// var promise1 = new Promise(function(resolve, reject) {
//   let myArr = [];
//   fs.createReadStream('./expenses.csv')
//   .pipe(parse())
//   .on('data', function (data) {
//     // console.log(;
//     myArr.push(data[1]);
//     // console.log('Name: %s Age: %s', data.NAME, data.AGE)
//   }).then(resolve(myArr));

//   //  ;
// });

// promise1.then(function(value) {
//   console.log(value);
//   // expected output: "Success!"
// });




// // new Promise((resolve, reject) => {
// //   fs.createReadStream('./expenses.csv')
// //   .pipe(parse())
// //   .on('data', function (data) {
// //     // console.log(;
// //     myArr.push(data[1]);
// //     // console.log('Name: %s Age: %s', data.NAME, data.AGE)
// // })

// //  // return fs.readdir('/folderpath', (err, filenames) => err !== undefined ? reject(err) : resolve(filenames))
// // }).then(filenames => console.log(myArr))



// // // var fs = require('fs');

// // // var readFilePromise = function(file) {
// // //   return new Promise(function(ok, notOk) {
// // //     fs.readFile(file, function(err, data) {
// // //         if (err) {
// // //           notOk(err)
// //         } else {
// //           ok(data)
// //         }
// //     })
// //   })
// // }

// // readFilePromise('./expenses.csv').then(function(data) {
// //   // do something with the data...
// //   console.log(data);
// // })


// // console.log("hello world");

// // var $ = require('./jquery-3.3.1.min');
// // // require('./jquery-3.3.1.min');
// // require('./jquery.csv.js');


// // $.ajax({
//   url: './expenses.csv',
//   dataType: 'text',
// }).done(successFunction);


// function WriteFile() {

// var fh = fopen("./expenses.csv", 3); // Open the file for writing

//   if(fh!=-1) // If the file has been successfully opened
//   {
//       var str = "Some text goes here...";
//       fwrite(fh, str); // Write the string to a file
//       fclose(fh); // Close the file

//       console.log(fh)
//   }

// }

// WriteFile();


// let csv = require('./expenses.csv');
//$.csv.function(csv, {options}, callback);


// var data = Papa.parse(csvString);
// var data = $.csv.toObjects(csv):

//   $.ajax({
//       type: "GET",
//       url: "expenses.csv",
//       dataType: "text",
//       success: function(data) {processData(data);}
//    });


// function processData(allText) {
//   console.log(allText);
//   // var allTextLines = allText.split(/\r\n|\n/);
//   // var headers = allTextLines[0].split(',');
//   // var lines = [];

//   // for (var i=1; i<allTextLines.length; i++) {
//   //     var data = allTextLines[i].split(',');
//   //     if (data.length == headers.length) {

//   //         var tarr = [];
//   //         for (var j=0; j<headers.length; j++) {
//   //             tarr.push(headers[j]+":"+data[j]);
//   //         }
//   //         lines.push(tarr);
//   //     }
//   // }
//   // alert(lines);
// }