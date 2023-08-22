var fs = require("fs");

var xml2js = require("xml2js");
function xmldataimport() {
  let results = [];
  //   var parser = new xml2js.Parser();

  data = fs.readFileSync(
    "/Users/ajaygajula/Documents/clean-code/Assignment-2/data/persons.xml"
  );

  xml2js.parseString(data, function (err, result) {
    user = result.Person.Person;
    results = user.map((obj) => ({
      FirstName: obj.FirstName[0],
      LastName: obj.LastName[0],
      Age: parseInt(obj.Age[0]),
    }));
  });

  return results;
  //   console.log(results);
}
xmldataimport();
module.exports = { xmldataimport };

// const fs = require("fs");
// var convert = require("xml-js");
// var xml = require("fs").readFileSync("./person.xml", {
//   encoding: "utf8",
//   flag: "r",
// });
// // console.log(xml);

// var xmlData = convert.xml2json(xml, {
//   compact: true,
//   space: 4,
// });
// // array = [];
// fs.writeFileSync("output2.json", xmlData);
// const sample = require("./output2.json");

// console.log(sample.People.Person);
