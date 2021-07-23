//runTimer("Bleep", 1000, 5);
/*
Console output:

Timer Bleep started (delay=1000,  stopCount=5)
Timer Bleep Tick! | cycles left 4
Timer Bleep Tick! | cycles left 3
Timer Bleep Tick! | cycles left 2
Timer Bleep Tick! | cycles left 1
Timer Bleep Tick! | cycles left 0
Timer Bleep stopped
*/
class Timer {
	constructor(title,delay,stopCount) {
		this.title = title;
		this.delay = delay;
		this.stopCount = stopCount;
	}
	
	start() {
		console.log(`Timer ${this.title} started (delay=${this.delay},  stopCount=${this.stopCount})`);
		for(var i = 1; i <= 5; i++) {
			(function(i) {
				setTimeout(function() {
					console.log(i);
				}, i * this.delay);
			})(i);
		}

	}
	
	tick(i){
		console.log(`Timer ${this.title} Tick! | cycles left ${i}!`);
	}
	// stop(){
		// console.log(`Timer ${this.title) stopped`);
	// }
}
let o = new Timer("Bla", 5000, 5);
o.start();

// function runTimer(id, delay, counter) {
	// let o = new Timer(id, delay, counter);
	// return o;
// }
