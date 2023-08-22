const yaml = require("js-yaml");
const fs = require("fs");

function ymldataimport() {
  const inputYML =
    "/Users/ajaygajula/Documents/clean-code/Assignment-2/data/peopledata.yml";
  const outputJSON = "output.json";
  const obj = yaml.load(fs.readFileSync(inputYML, { encoding: "utf-8" }));
  fs.writeFileSync(outputJSON, JSON.stringify(obj, null, 2));
  const sample = require("./output.json");
  return sample;
}
ymldataimport()
module.exports = { ymldataimport };
