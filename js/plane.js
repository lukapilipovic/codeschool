class Plane extends FlyingObject {
	constructor (name){
		super (name);
	}



	boardPassengers(passengersList = []){
		let passengerNumber = 0;
		for (let passenger of passengersList){
			passengerNumber++
			console.log(passenger.name + " passenger number : " + passengerNumber);
		}
	}



}

export { "Plane" };