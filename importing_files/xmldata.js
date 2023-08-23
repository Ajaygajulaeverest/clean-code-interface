var fs = require("fs");

var xml2js = require("xml2js");
function xmldataimport() {
  let results = [];

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

}
xmldataimport();
module.exports = { xmldataimport };

