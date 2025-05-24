let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

function isEmpty(object) {
  for (let key in object) {
    return false;
  }
  return true;
}