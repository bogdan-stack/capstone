const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const submitAPI = function(values) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

export const fetchAPI = function(date) {
    return new Promise((resolve, reject) => {
      date = new Date(date);
      let result = [];
      let random = seededRandom(date.getDate());

      for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
          result.push(i + ':00');
        }
        if (random() < 0.5) {
          result.push(i + ':30');
        }
      }

      setTimeout(() => {
        resolve(result);
      }, 1000);
    });
  };