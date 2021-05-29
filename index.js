var path = require("path");

module.exports =
  process.platform === "darwin"
    ? path.join(__dirname, "macos", "rescript-react-intl-extractor")
    : process.platform === "linux" && process.arch === "x64"
    ? path.join(__dirname, "linux", "rescript-react-intl-extractor")
    : process.platform === "win32" && process.arch === "x64"
    ? path.join(__dirname, "windows", "rescript-react-intl-extractor.exe")
    : null;
