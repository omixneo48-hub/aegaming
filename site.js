(function () {
  "use strict";

  var grid = document.getElementById("miniGrid");
  if (grid) {
    var cyan = new Set([9, 10, 17, 18]);
    var gold = new Set([25, 26, 32, 33, 39, 40, 45, 46]);
    for (var i = 0; i < 49; i += 1) {
      var cell = document.createElement("i");
      if (cyan.has(i)) cell.className = "filled-cyan";
      if (gold.has(i)) cell.className = "filled-gold";
      grid.appendChild(cell);
    }
  }

  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (item) { observer.observe(item); });
  } else {
    items.forEach(function (item) { item.classList.add("visible"); });
  }
}());
