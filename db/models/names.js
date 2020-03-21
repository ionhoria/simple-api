const { getData, pushData } = require("../db");

const KEY = "names"; // table name

const getNames = () => {
  return getData(KEY);
};

const addName = name => {
  pushData(KEY, name);
};

module.exports = { getNames, addName };
