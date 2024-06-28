// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    //returns the number of blocks given a value
  return Math.abs(block- 42);
}
distanceFromHqInBlocks(43-42)
console.log(43-42)


function distanceFromHqInFeet(block) {
   distanceFromHqInBlocks(block)
   // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
return Math.abs((block - 42)*264)
  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}



function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
 const distanceFromHqInFeet = Math.abs(destination - start) * 264;
 return distanceFromHqInFeet
}

function calculatesFarePrice(start, destination) {
     //returns the fare for the customer
     const feetTravelled = distanceTravelledInFeet(start, destination)
     if (feetTravelled <= 400 ){
        return 0;
     } else if (feetTravelled > 400 && feetTravelled <= 2000){
        return (feetTravelled - 400) * 0.02;
     } else if (feetTravelled > 2000 && feetTravelled <= 2500){
        return 25;
     } else {
        return 'cannot travel that far'
     }
     
}
