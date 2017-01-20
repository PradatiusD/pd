(function (){

  var canvas = Raphael("canvas", 100, 100);

  canvas.customAttributes.arc = function (xloc, yloc, value, total, R) {
    var alpha = 360 / total * value,
    a = (90 - alpha) * Math.PI / 180,
    x = xloc + R * Math.cos(a),
    y = yloc - R * Math.sin(a),

    path;

    if (total === value) {
      path = [
        ["M", xloc, yloc - R],
        ["A", R, R, 0, 1, 1, xloc - 0.01, yloc - R]
      ];
    } else {
      path = [
        ["M", xloc, yloc - R],
        ["A", R, R, 0, +(alpha > 180), 1, x, y]
      ];
    }
    return {
      path: path
    };
  };

  var arc = canvas.path().attr({
    "stroke": "#f44336",
    "stroke-width": 4,
    arc: [50, 50, 0, 100, 30]
  });

  arc.animate({
    arc: [50, 50, 100, 100, 30]
  }, 1000, "linear");

})();