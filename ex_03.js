function fillBus(peopleAtTheBusStops,busSeats) 
{
if (!Array.isArray(peopleAtTheBusStops) || typeof busSeats !=='number' || busSeats < 0) 
 { 
return -1;
 }
let currentCapacity = 0;

 for (let i = 0; i < peopleAtTheBusStops.length; i++) 
  {
   currentCapacity += peopleAtTheBusStops[i];
   if (currentCapacity>= busSeats) return i;
  }
  return -1;
}
 console.log(fillBus ([1,3,10,1],12));

