function addHousing(hounsingList){

let housingList = new Map ();
addHousing ( housingList , " Flat " , 2)
addHousing ( housingList , " Log " , 3)
addHousing ( housingList , " Flat " , 3)
addHousing ( housingList , " Hutch " , 2)
displayResult ( housingList ) ;


}


// Here is some code to test and display your function output:
// (you must modify it to test out your code but /!\ do not deliver it /!\ ). Only deliver your function
const result = new Map([["Flat",5],["Log",3],["Hutch",2]]);
displayResult(result);
