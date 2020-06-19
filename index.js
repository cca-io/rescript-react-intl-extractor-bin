var path = require("path");

module.exports =
  process.platform === "darwin"
    ? path.join(__dirname, "macos", "bs-react-intl-extractor")
    : process.platform === "linux" && process.arch === "x64"
    ? path.join(__dirname, "linux", "bs-react-intl-extractor")
    : process.platform === "win32" && process.arch === "x64"
    ? path.join(__dirname, "windows", "bs-react-intl-extractor.exe")
    : null;
