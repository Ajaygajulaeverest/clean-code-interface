const csv = require("csvtojson");

async function importfun() {
  const projects = await csv().fromFile(
    "/Users/ajaygajula/Documents/clean-code/Assignment-2/data/csv-data.csv"
  );
  console.log(projects)
}
importfun();
