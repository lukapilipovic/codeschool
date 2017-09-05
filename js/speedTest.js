function SpeedTest ( testImplement , testParams, repetitions){
	this.testImplement = testImplement;
	this.testParams = testParams;
	this.repetitions = repetitions || 5000;
	this.avgTime;

}

SpeedTest.prototype = {
	



	startTest : function() {
		var startTime, endTime, sumTime = 0;
		for (var i = 0, x = this.repetitions; i < x ; i++){
			startTime = +new Date();
			this.testImplement( this.testParams );
			endTime = +new Date();
			sumTime += endTime - startTime;
		}
		this.avgTime = sumTime / x;
		console.log ("Average time for " + x + " repetitions is " + this.avgTime);
	}



}