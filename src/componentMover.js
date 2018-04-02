var box = AFRAME.registerComponent("box", {
	init: function() {
		var that = this;
		setTimeout(function() {
			that.el.setAttribute("position", "-1 1 -3");
			console.log("moved")
		}, 1000)
	},
	tick: function() {
		var prevLocation = this.el.getAttribute("position");
		var {x,y,z} = prevLocation;

		var newLocation = {x: x+0.01, y, z};

		this.el.setAttribute("position", newLocation)
	}
})