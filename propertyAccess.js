const setter = (source, path, newValue) => {
  s = path.split('.');
  let obj = source;
  while (obj && s.length - 1) {
    obj = obj[s.shift()];
  }
  obj[s.shift()] = newValue;
};

const getter = (source, path) => {
  path = path.split('.');
  var obj = source;
  while (obj && path.length) {
    obj = obj[path.shift()];
  }
  return obj;
};

module.exports = {
  setter,
  getter
};
