(function(){
  "use strict";

  // include index.html for webpack to load
  require("./index.html");
  require("../css/style.css");
  //
  var T = require("timbre/timbre.dev.js");

  // T("sin", {freq:600, mul:0.5}).play();
  T("square", {freq:600, mul:0.5}).play();


})();
