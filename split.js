const parse = require('csv-parse');
const fs = require('fs');

function readFile(srcPath) {
  return new Promise(function (resolve, reject) {
    let myArr = [];
    let tempObj = {};
    const file =  fs.createReadStream('./communication.csv')

  .pipe(parse())
  .on('data', function (data) {

    if (data[1] !== ''){

      myArr.push({
        amigo: data[0],
        comnum: data[1],
        body: data[2],
        // three: data[3]
      })
    }
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

 data.forEach(entry => {

    let tempArr = [];
    tempArr.push(entry.body);
    tempArr = splitAtString('Date:', tempArr);
    tempArr = splitAtString('To:', tempArr);
    tempArr = splitAtString('Cc:', tempArr);
    tempArr = splitAtString('Subject:', tempArr);

    // remove 'From:'
    tempArr[0] = tempArr[0].replace("From: ", "");
    tempArr[0] = tempArr[0].replace(">\u000b", "");

    // split at ' <'
    let shiftOff = tempArr.shift();
    shiftOff = shiftOff.split(' <');
    tempArr.unshift(shiftOff[1]);
    tempArr.unshift(shiftOff[0]);

    console.log(tempArr);

  });

  function splitAtString(str, arr){
    // console.log(arr);
    if (arr[arr.length-1].search(str) >= 0) {
      let temp = arr[arr.length-1].split(str); // .split('To:');
      arr[arr.length-1] = temp[0]
      arr.push(temp[1]);
      return arr;
    } else {
      return arr;
    }
  }

}
