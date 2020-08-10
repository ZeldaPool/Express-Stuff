function average(scores){
	var total=0;
//	scores.forEach(function(scores){
//		total = total + scores;
//				   });
	cd
	for(var i=0; i<scores.length; i++){
		total = total + scores[i];
	}
	var avg = (total/scores.length);
	
	//return Math.round(avg);
	console.log(avg);
}

var scores = [10,20,10,20,10,20];
average(scores)

var scores2 = [1,10,24,50,24,51];
average(scores2)
