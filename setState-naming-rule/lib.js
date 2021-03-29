const getSetterName = (setterName) => setterName.match(/set([a-zA-Z]+)/)[0];

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

module.exports = { getSetterName, capitalize };
