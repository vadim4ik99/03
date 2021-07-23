const houseBlueprint = {
	address:'',
	description:'',
	owner:'',
	date: new Date(),
	_averageBuildSpeed: 0.5,
	size: 0,
	getDaysToBuild() {
		return (this.size / this._averageBuildSpeed);
	}
	
	//getDaysToBuild(){ console.log('1');}
	
};
 
function HouseBuilder(address, description, owner, size, roomCount){
	this.address = address;
	this.description = description;
	this.owner = owner;
	this.size = size;
	this.roomCount = roomCount;
}