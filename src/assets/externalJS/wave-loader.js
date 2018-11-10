var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = d3.select.bind(d3);
var WIDTH = document.body.clientWidth;
var HEIGHT = 20;
var WAVES = 3;
var SMOOTH_DISTANCE = 75;

// generate the loader
var svg = $("svg").attr("width", WIDTH).attr("height", HEIGHT);

// Wave class

var Wave = function () {
  function Wave(wavelength, amplitude, offset, opacity) {
    _classCallCheck(this, Wave);

    this.piScaled = Math.PI * 2 / wavelength;
    this.amplitude = amplitude;
    this.offset = offset;
    this.opacity = opacity;

    this.path = svg.append("path").attr("stroke", "url(#loaderGradient)").attr("fill", "none").attr("stroke-opacity", opacity);
    this.line = d3.svg.line().x(function (v) {
      return v.index;
    }).y(function (v) {
      // scale it off if it exceeds the progress
      var scale = 1;
      var exceedingAmount = Math.abs(WIDTH / 2 - v.index) - (WIDTH / 2 * progress - SMOOTH_DISTANCE / 2);

      scale = Math.cos(Math.PI * Math.max(0, Math.min(SMOOTH_DISTANCE, exceedingAmount)) / SMOOTH_DISTANCE) / 2 + 0.5;
      return HEIGHT / 2 + v.value * scale;
    });
  }

  _createClass(Wave, [{
    key: "draw",
    value: function draw() {
      this.path.attr("d", this.generatePath());
    }
  }, {
    key: "generatePath",
    value: function generatePath() {
      var points = [];
      for (var i = 0; i < WIDTH; ++i) {
        points.push({
          value: Math.sin((i + this.offset) * this.piScaled) * this.amplitude,
          index: i
        });
      }
      return this.line(points);
    }
  }]);

  return Wave;
}();

// generate waves


var waves = [];
for (var i = 0; i < WAVES; ++i) {
  var w = new Wave(2.5 * HEIGHT + Math.random() * HEIGHT * 8, // wavelength
    HEIGHT / 2 - Math.random() * HEIGHT / 4, // amplitude 
    25 / WAVES * i + Math.random() * 5, // offset
    0.25 + Math.random() * 0.75 // opacity
  );
  w.draw();
  waves.push(w);
}
// draw & animate
var progress = 0;
var direction = 1;
function draw(dT) {
  if (progress > 1 && direction > 0) {
    direction = -5;
  } else if (progress < 0 && direction < 0) {
    direction = 1;
  }
  progress += 0.003 * direction;
  for (var _i = 0; _i < waves.length; ++_i) {
    waves[_i].offset += ((_i + 1) % 2 * 2 - 1) * (Math.random() * 0.2 + 0.9);
    waves[_i].draw();
  }
  requestAnimationFrame(draw);
}
draw();
