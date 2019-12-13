// var debounce = function(func, delay) {
//   let loading;
//   return (...args) => {
//     if (!loading) {
//       func.apply(this, args);
//       loading = true;
//     }
//     setTimeout(() => {
//       loading = false;
//     }, delay);
//   }
// };

var debounce = function(func, wait) {
  var timeout, result;

  var later = function(context, args) {
    timeout = null;
    if (args) result = func.apply(context, args);
  };

  var debounced = restArgs(function(args) {
    if (timeout) clearTimeout(timeout);
    var callNow = !timeout;
    timeout = setTimeout(later, wait);
    if (callNow) result = func.apply(this, args);

    return result;
  });

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
};

var h = 1;

var cb = function (text) {
  console.log(text + new Date());
}

debounce(cb , 2000)(1);
debounce(cb , 2000)(2);