const { ymldataimport } = require("./importing_files/ymldata");
const { xmldataimport } = require("./importing_files/xmldata");
const { importcsv } = require("./importing_files/csvdataimport");
async function userdata() {
  const ymldata = ymldataimport();
  const csvdata = await importcsv();
  const xmldata = xmldataimport();
  const totaldata = ymldata.concat(csvdata, xmldata);
  totaldata.sort((a, b) => a.Age - b.Age);
  console.log(totaldata);
}
userdata();
