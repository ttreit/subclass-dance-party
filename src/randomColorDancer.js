var RandomColorDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.randomColor();
};

RandomColorDancer.prototype = Object.create(Dancer.prototype);
RandomColorDancer.prototype.constructor = RandomColorDancer;
RandomColorDancer.prototype.colors = ['aqua', 'blue', 'yellow', 'purple', 'green'];
RandomColorDancer.prototype.randomColor = function() {
  var index = Math.floor(Math.random() * (this.colors.length));
  let color = this.colors[index];
  this.setColor(color)
};
RandomColorDancer.prototype.setColor = function(color) {
  var colorSettings = {'border-color': color};
  this.$node.css(colorSettings);
};

