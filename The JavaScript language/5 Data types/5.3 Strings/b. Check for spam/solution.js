console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

function checkSpam(string) {
  const stringLower = string.toLowerCase();

  return stringLower.includes('viagra') || stringLower.includes('xxx');
}