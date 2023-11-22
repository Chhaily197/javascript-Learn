var tool = new Tool();

tool.onMouseDown = function(e){
    var c = Shape.Circle(e.point.x, e.point.y, 20);
    c.fillColor = 'green';
};