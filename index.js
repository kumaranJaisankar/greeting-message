const message = require("../greeting/index.js");
const string = (name) => {
  const leMsg = `Hello ${name}! ${message}`;
  return leMsg;
};

module.exports = string;
