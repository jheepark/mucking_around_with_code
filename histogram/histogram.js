let canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height;

let histowidth = width,
    histoheight = width / 2;

let x = d3.scaleLinear().domain([0, 256]).rangeRound([0, histowidth]),
    y = d3.scaleLinear().rangeRound([0, histoheight]);

let r = new Array(257),
    g = new Array(257),
    b = new Array(257);

let area = d3.area()
    .curve(d3.curveStepAfter)
    .x(function(d, i) { return x(i); })
    .y0(y(0))
    .y1(y);

let line = d3.line()
    .curve(curveStepBelow)
    .x(function(d, i) { return x(i); })
    .y(y);

let brush = d3.brush()
    .on("start brush", brushed)
    .on("end", brushended);

let svg = d3.select("svg");

let histogram = svg.append("g")
    .attr("class", "histogram");

let histoarea = histogram.selectAll(".histogram-area")
    .data([r, g, b])
  .enter().append("path")
    .attr("class", function(d, i) { return "histogram-area histogram-" + "rgb"[i]; });

let histoline = histogram.selectAll(".histogram-line")
    .data([r, g, b])
  .enter().append("path")
    .attr("class", function(d, i) { return "histogram-line histogram-" + "rgb"[i]; });

let image = new Image;
image.src = "hey.jpg";
image.onload = loaded;

function loaded() {
  context.drawImage(this, 0, 0);

  svg.append("g")
      .attr("class", "brush")
      .call(brush)
      .call(brush.move, [[100, 150], [200, 250]]);
}

function brushed() {
  let s = d3.event.selection,
      x0 = s[0][0],
      y0 = s[0][1],
      dx = s[1][0] - x0,
      dy = s[1][1] - y0,
      max = 0;

  for (let i = 0; i < 257; ++i) {
    r[i] = g[i] = b[i] = 0;
  }

  if (dx && dy) {
    let data = context.getImageData(x0, y0, dx, dy).data;
    for (let i = 0; i < dx; ++i) {
      for (let j = 0; j < dy; ++j) {
        let k = j * dx + i << 2;
        max = Math.max(max, ++r[data[k]], ++g[data[k + 1]], ++b[data[k + 2]]);
      }
    }
    y.domain([0, max]);
    histoarea.attr("d", area);
    histoline.attr("d", line);
  } else {
    histoarea.attr("d", null);
    histoline.attr("d", null);
  }
}

function brushended() {
  if (!d3.event.selection) {
    histoarea.attr("d", null);
    histoline.attr("d", null);
  }
}

function curveStepBelow(context) {
  let y0, i;
  return {
    lineStart: function() { y0 = NaN, i = 0; },
    lineEnd: function() {},
    point: function(x, y) {
      x -= y0 < y ? -0.5 : +0.5, y += 0.5;
      if (++i === 1) context.moveTo(x, y0 = y);
      else context.lineTo(x, y0), context.lineTo(x, y0 = y);
    }
  };
}
