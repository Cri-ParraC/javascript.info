let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

menu = multiplyNumeric(menu);

console.log(menu);

function isNumber(value) {
  if (typeof value === 'number') {
    return true;
  } else {
    return false;
  }
}

function multiplyNumeric(object) {
  const newObject = {};
  for (const key in object) {
    if (isNumber(object[key])) {
      newObject[key] = object[key] * 2;
    } else {
      newObject[key] = object[key];
    }
  }
  return newObject;
}