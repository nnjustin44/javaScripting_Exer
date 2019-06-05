var a = 1,
  b = 2,
  c = 3;

(function firstFunction() {
  var d = 5,
    f = 6;

  (function secondFunction() {
    var j = 8;

    (function thirdFunction() {
      var k = 7,
        l = 9 - c;

      (function fourthFunction() {
        var m = 1,
          n = 8;

        console.log("a: " + m + ", b: " + n + ", c: " + l);
      })();
    })();
  })();
})();

// console.log("a: " + a + ", b: " + b + ", c: " + c);
