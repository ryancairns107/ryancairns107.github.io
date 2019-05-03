var inventory = {
	Wind: {
		numCode: 0,
		cost: parseInt($("#0Cost").text()),
		clean: parseInt($("#0Clean").text()),
		energy: parseInt($("#0Energy").text()),
		quantity: parseInt($("#0Quantity").text())
	},
	HydroE: {
		numCode: 1,
		cost: parseInt($("#1Cost").text()),
		clean: parseInt($("#1Clean").text()),
		energy: parseInt($("#1Energy").text()),
		quantity: parseInt($("#1Quantity").text())
	},
	Solar: {
		numCode: 2,
		cost: parseInt($("#2Cost").text()),
		clean: parseInt($("#2Clean").text()),
		energy: parseInt($("#2Energy").text()),
		quantity: parseInt($("#2Quantity").text())
	},
	Nuclear: {
		numCode: 3,
		cost: parseInt($("#3Cost").text()),
		clean: parseInt($("#3Clean").text()),
		energy: parseInt($("#3Energy").text()),
		quantity: parseInt($("#3Quantity").text())
	},
	Bio: {
		numCode: 4,
		cost: parseInt($("#4Cost").text()),
		clean: parseInt($("#4Clean").text()),
		energy: parseInt($("#4Energy").text()),
		quantity: parseInt($("#4Quantity").text())
	},
	Geo: {
		numCode: 5,
		cost: parseInt($("#5Cost").text()),
		clean: parseInt($("#5Clean").text()),
		energy: parseInt($("#5Energy").text()),
		quantity: parseInt($("#5Quantity").text())
	},
	Hydrogen: {
		numCode: 6,
		cost: parseInt($("#6Cost").text()),
		clean: parseInt($("#6Clean").text()),
		energy: parseInt($("#6Energy").text()),
		quantity: parseInt($("#6Quantity").text())
	},
	Coal: {
		numCode: 7,
		cost: parseInt($("#7Cost").text()),
		clean: parseInt($("#7Clean").text()),
		energy: parseInt($("#7Energy").text()),
		quantity: parseInt($("#7Quantity").text())
	},
	Oil: {
		numCode: 8,
		cost: parseInt($("#8Cost").text()),
		clean: parseInt($("#8Clean").text()),
		energy: parseInt($("#8Energy").text()),
		quantity: parseInt($("#8Quantity").text())
	},
	Gas: {
		numCode: 9,
		cost: parseInt($("#9Cost").text()),
		clean: parseInt($("#9Clean").text()),
		energy: parseInt($("#9Energy").text()),
		quantity: parseInt($("#9Quantity").text())
	}

};

$("#myWind").text(inventory.Wind.quantity);
$("#myHydroE").text(inventory.HydroE.quantity);
$("#mySolar").text(inventory.Solar.quantity);
$("#myNuclear").text(inventory.Nuclear.quantity);
$("#myBio").text(inventory.Bio.quantity);
$("#myGeo").text(inventory.Geo.quantity);
$("#myHydrogen").text(inventory.Hydrogen.quantity);
$("#myCoal").text(inventory.Coal.quantity);
$("#myOil").text(inventory.Oil.quantity);
$("#myGas").text(inventory.Gas.quantity);

var bank = parseInt($("#myCoins").text());

var city1 = {
	WindMultiplier: parseInt($("#city10M").text()),
	WindQuantity: 0,
	HydroEMultiplier: parseInt($("#city11M").text()),
	HydroEQuantity: 0,
	SolarMultiplier: parseInt($("#city12M").text()),
	SolarQuantity: 0,
	NuclearMultiplier: parseInt($("#city13M").text()),
	NuclearQuantity: 0,
	BioMultiplier: parseInt($("#city14M").text()),
	BioQuantity: 0,
	GeoMultiplier: parseInt($("#city15M").text()),
	GeoQuantity: 0,
	HydrogenMultiplier: parseInt($("#city16M").text()),
	HydrogenQuantity: 0,
	CoalMultiplier: parseInt($("#city17M").text()),
	CoalQuantity: 0,
	OilMultiplier: parseInt($("#city18M").text()),
	OilQuantity: 0,
	GasMultiplier: parseInt($("#city19M").text()),
	GasQuantity: 0,
	EnergyLevel: 0,
	EnergyGoal: parseInt($("#city1EnergyGoal").text()),
	cleanliness: 0
}

var city2 = {
	WindMultiplier: parseInt($("#city20M").text()),
	WindQuantity: 0,
	HydroEMultiplier: parseInt($("#city21M").text()),
	HydroEQuantity: 0,
	SolarMultiplier: parseInt($("#city22M").text()),
	SolarQuantity: 0,
	NuclearMultiplier: parseInt($("#city23M").text()),
	NuclearQuantity: 0,
	BioMultiplier: parseInt($("#city24M").text()),
	BioQuantity: 0,
	GeoMultiplier: parseInt($("#city25M").text()),
	GeoQuantity: 0,
	HydrogenMultiplier: parseInt($("#city26M").text()),
	HydrogenQuantity: 0,
	CoalMultiplier: parseInt($("#city27M").text()),
	CoalQuantity: 0,
	OilMultiplier: parseInt($("#city28M").text()),
	OilQuantity: 0,
	GasMultiplier: parseInt($("#city29M").text()),
	GasQuantity: 0,
	EnergyLevel: 0,
	EnergyGoal: parseInt($("#city2EnergyGoal").text()),
	cleanliness: 0
}

var city3 = {
	WindMultiplier: parseInt($("#city30M").text()),
	WindQuantity: 0,
	HydroEMultiplier: parseInt($("#city31M").text()),
	HydroEQuantity: 0,
	SolarMultiplier: parseInt($("#city32M").text()),
	SolarQuantity: 0,
	NuclearMultiplier: parseInt($("#city33M").text()),
	NuclearQuantity: 0,
	BioMultiplier: parseInt($("#city34M").text()),
	BioQuantity: 0,
	GeoMultiplier: parseInt($("#city35M").text()),
	GeoQuantity: 0,
	HydrogenMultiplier: parseInt($("#city36M").text()),
	HydrogenQuantity: 0,
	CoalMultiplier: parseInt($("#city37M").text()),
	CoalQuantity: 0,
	OilMultiplier: parseInt($("#city38M").text()),
	OilQuantity: 0,
	GasMultiplier: parseInt($("#city39M").text()),
	GasQuantity: 0,
	EnergyLevel: 0,
	EnergyGoal: parseInt($("#city3EnergyGoal").text()),
	cleanliness: 0
}

var city4 = {
	WindMultiplier: parseInt($("#city40M").text()),
	WindQuantity: 0,
	HydroEMultiplier: parseInt($("#city41M").text()),
	HydroEQuantity: 0,
	SolarMultiplier: parseInt($("#city42M").text()),
	SolarQuantity: 0,
	NuclearMultiplier: parseInt($("#city43M").text()),
	NuclearQuantity: 0,
	BioMultiplier: parseInt($("#city44M").text()),
	BioQuantity: 0,
	GeoMultiplier: parseInt($("#city45M").text()),
	GeoQuantity: 0,
	HydrogenMultiplier: parseInt($("#city46M").text()),
	HydrogenQuantity: 0,
	CoalMultiplier: parseInt($("#city47M").text()),
	CoalQuantity: 0,
	OilMultiplier: parseInt($("#city48M").text()),
	OilQuantity: 0,
	GasMultiplier: parseInt($("#city49M").text()),
	GasQuantity: 0,
	EnergyLevel: 0,
	EnergyGoal: parseInt($("#city4EnergyGoal").text()),
	cleanliness: 0
}

var city5 = {
	WindMultiplier: parseInt($("#city50M").text()),
	WindQuantity: 0,
	HydroEMultiplier: parseInt($("#city51M").text()),
	HydroEQuantity: 0,
	SolarMultiplier: parseInt($("#city52M").text()),
	SolarQuantity: 0,
	NuclearMultiplier: parseInt($("#city53M").text()),
	NuclearQuantity: 0,
	BioMultiplier: parseInt($("#city54M").text()),
	BioQuantity: 0,
	GeoMultiplier: parseInt($("#city55M").text()),
	GeoQuantity: 0,
	HydrogenMultiplier: parseInt($("#city56M").text()),
	HydrogenQuantity: 0,
	CoalMultiplier: parseInt($("#city57M").text()),
	CoalQuantity: 0,
	OilMultiplier: parseInt($("#city58M").text()),
	OilQuantity: 0,
	GasMultiplier: parseInt($("#city59M").text()),
	GasQuantity: 0,
	EnergyLevel: 0,
	EnergyGoal: parseInt($("#city5EnergyGoal").text()),
	cleanliness: 0
}

$("#city1EnergyGoalDisplay").text(city1.EnergyGoal);
$("#city2EnergyGoalDisplay").text(city2.EnergyGoal);
$("#city3EnergyGoalDisplay").text(city3.EnergyGoal);
$("#city4EnergyGoalDisplay").text(city4.EnergyGoal);
$("#city5EnergyGoalDisplay").text(city5.EnergyGoal);

for(i = 1; i<= 5; i++){
	if(parseInt($("#city" + i + "EnergyLevel").text()) < parseInt($("#city" + i + "EnergyGoal").text())){
		$("#city" + i + "EnergyLevel").addClass("unsustainable");
	}
}

$("li").click(function(event){
	buyResource(event.target.className, "city" + event.target.parentElement.id);
})


function buyResource(type, city){
 if(bank >= inventory[type].cost && inventory[type].quantity > 0){

 	bank -= inventory[type].cost;
 	$("#myCoins").text(bank);

 	inventory[type].quantity--;
 	$("#my" + type).text(inventory[type].quantity)

 	eval(city)[type + "Quantity"] += 1;
 	$("#" + city + type).text(eval(city)[type + "Quantity"]);
 	
 	eval(city).EnergyLevel += (eval(city)[type + "Multiplier"] * inventory[type].energy);

 	$("#" + city + "EnergyLevel").text(eval(city).EnergyLevel);
 	if(eval(city).EnergyLevel >= eval(city).EnergyGoal){$("#" + city + "EnergyLevel").addClass("sustainable");
 														$("#" + city + "EnergyLevel").removeClass("unsustainable");}
 	else{$("#" + city + "EnergyLevel").removeClass("sustainable");
 		$("#" + city + "EnergyLevel").addClass("unsustainable");}

 	if(eval(city).cleanliness + inventory[type].clean >= 100){eval(city).cleanliness = 100;}
 	else if(eval(city).cleanliness + inventory[type].clean <= 0){eval(city).cleanliness = 0;}
 	else{eval(city).cleanliness += inventory[type].clean;}
 	$("#" + city + "pollution").attr("value",eval(city).cleanliness);
 	$("#" + city + "pollutionText").text(eval(city).cleanliness);

 }
 else{alert("Not enough Money or Resources")}
}