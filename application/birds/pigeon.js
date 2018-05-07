import sing from './../actions/sing.js'
import run from './../actions/run.js'
import swim from './../actions/swim.js'


function Pigeon (name){
	this.name = name;
	this.sing = sing;
	this.run = run;
	this.swim = swim;
}

export default Pigeon;