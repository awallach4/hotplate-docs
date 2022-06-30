var fs = require("fs");

module.exports = function () {
  var files = fs.readdirSync("./guide/");
  var list = [""];
  for (var i in files) {
    var filename = files[i].split(".").slice(0, -1).join(".");
    if (filename.toLowerCase() !== "readme") {
      list.push(`/guide/${filename}`);
    } else {
      list.push("/guide/");
    }
  }
  console.log("./guide/: ", list);
  return list;
}
