function houseEnergyStore(housingList){

}



// This lines will display the result for you
if (typeof houseEnergyScore === "function") {
	const scores = [["Hutch", 30],["Loft", 345], ["Castle", 560], ["Igloo", 12], ["Villa", 232], ["Flat", 212]];
	const result = houseEnergyScore();
	displayResult(result);
}
