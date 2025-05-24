console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

function camelize(string) {
  const words = string.split('-');

  const camelizedString = words
    .filter((e) => e !== '')
    .map((e, i) => i !== 0 ? capitalize(e) : e);

  return camelizedString.join('');
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}