const csv = require("csvtojson");

async function importcsv() {
  const projects = await csv().fromFile(
    "/Users/ajaygajula/Documents/clean-code/Assignment-2/data/csv-data.csv"
  );
  results = projects.map((obj) => ({
    FirstName: obj.firstName,
    LastName: obj.lastName,
    Age: parseInt(obj.age),
  }));
  return results;
}
module.exports = { importcsv };
