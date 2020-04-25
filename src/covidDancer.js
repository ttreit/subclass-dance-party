var CovidDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="img/covid.jpg" class="covidDancer">');
  this.setPosition(top, left);
  var node = this.$node;
  this.$node.mouseover(function() { node.toggle(); });
};

CovidDancer.prototype = Object.create(Dancer.prototype);
CovidDancer.prototype.constructor = CovidDancer;