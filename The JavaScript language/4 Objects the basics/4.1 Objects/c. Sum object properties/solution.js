let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

const sum = sumSalaries(salaries);

console.log(sum);

function sumSalaries(object) {
  if (isEmpty(object)) {
    return 0;
  }
  let sum = 0;
  for (const key in object) {
    sum += object[key];
  }
  return sum;
}

function isEmpty(object) {
  if (JSON.stringify(object) === '{}') {
    return true;
  } else {
    return false;
  }
}