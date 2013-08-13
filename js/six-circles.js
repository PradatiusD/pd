// Create a canvas that is twice as wide as it is tall at the top left corner of 
// the #pshape element.  Since the shape is proportional to the width, all 
// sizes are based from there.
function pShape (elementWidth) {
	var paper = Raphael(document.getElementById("pshape"), elementWidth, elementWidth*2);
	var xPositions = [1, 3, 1, 3, 1, 1]
	var yPositions = [1, 1, 3, 3, 5, 7]
	for (var i = 0; i < xPositions.length; i++) {
		paper.circle(elementWidth*xPositions[i]/4, elementWidth*yPositions[i]/4, 0).attr({
			fill: "#ff0000",
    		stroke: "#FFFFFF"
		}).animate({
			fill: "#223fa3", 
			r: elementWidth/4
		}, 1000/xPositions.length*[i]);;
	};
}

pShape(300);
