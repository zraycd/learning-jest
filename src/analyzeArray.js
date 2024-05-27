function analyzeArray(arr) {
  let obj = { average: 0 };
  let i = 0;
  let average = 0;
  arr.forEach((element) => {
    average += element;
    i++;
  });

  obj.average = average / i;
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);

  obj.length = arr.length;

  return obj;
}

module.exports = analyzeArray;
