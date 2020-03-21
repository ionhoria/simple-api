const data = { names: ["dummy name", "other dummy name"] };

const getData = key => {
  return data[key];
};

const pushData = (key, value) => {
  data[key].push(value);
};

module.exports = { getData, pushData };
