exports.sumOfAMultiple = function(n){
  var sum = 0;
  // do your work here
  for (var i = n-1; i>0; i--){
      if(i%3 === 0 || i%5 === 0) {
  		sum += i;
  	}
  }
  return sum;
};
