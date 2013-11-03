$(function () {
  var width = 960,
      height = 500,
      range = 100;

  $(document).on('change', 'select', function() {
    // $('body').remove()
   d3.select("svg").remove();

    var vertices = d3.range(range).map(function(d) {
        return [Math.random() * width, Math.random() * height];
      });

      range = parseInt($('#Country_name option:selected').data('density'))
      console.log(range)
      vertices = d3.range(range).map(function(d) {
        return [Math.random() * width, Math.random() * height];
      });

    var voronoi = d3.geom.voronoi()
        .clipExtent([[0, 0], [width, height]]);

    var svg = d3.select("#tessellation").append("svg")
        .attr("width", width)
        .attr("height", height)
        .on("mousemove", function() { vertices[0] = d3.mouse(this); redraw(); });

    var path = svg.append("g").selectAll("path");

    svg.selectAll("circle")
        .data(vertices.slice(1))
      .enter().append("circle")
        .attr("transform", function(d) { return "translate(" + d + ")"; })
        .attr("r", 1.5);

    redraw();

    function redraw() {
      path = path
          .data(voronoi(vertices), polygon);

      path.exit().remove();

      path.enter().append("path")
          .attr("class", function(d, i) { return "q" + (i % 9) + "-9"; })
          .attr("d", polygon);

      path.order();
    }

    function polygon(d) {
      return "M" + d.join("L") + "Z";
    }

  });
});