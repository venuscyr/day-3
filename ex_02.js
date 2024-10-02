function findHousing(housingToFind,hounsingList) {
let i = 0  
            
            while(i < housingList.length )  {
           if ( housingList  [i] === housingToFind ){
              return [i,housingList[i]];
            }
i++;
}
   return[-1,null];

}
//Use console.log to debug you're code ! It is very useful
console.log("I'm debugging")

//Some code to display your function output: (you must modify it but /!\ do not deliver it /!\ ). Only deliver your function
displayResult([5,"House"])
