const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    let result = mpg * fuelLeft;
    if(distanceToPump <= result) {
      return true;
    }else{
      return false;
    }
}