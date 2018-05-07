import sweep from './../actions/sweep.js'
import eat from './../actions/eat.js'
import fly from './../actions/fly.js'


function Chicken (name){
	this.name = name;
	this.sweep = sweep;
	this.eat = sweep;
	this.fly = sweep;
}

export default Chicken;