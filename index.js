function distanceFromHqInBlocks(pickUpStreet){
    return Math.abs(pickUpStreet-42);

}

function distanceFromHqInFeet(pickUpStreet){
    return distanceFromHqInBlocks(pickUpStreet)*264;

}

function distanceTravelledInFeet(pickUpStreet,dropOffStreet){
    return Math.abs(pickUpStreet-dropOffStreet)*264;

}
function calculatesFarePrice(pickUpStreet,dropOffStreet){
   
    if (distanceTravelledInFeet(pickUpStreet,dropOffStreet)<400) {
        return(0);
    }
    else if(distanceTravelledInFeet(pickUpStreet,dropOffStreet)>=400&&distanceTravelledInFeet(pickUpStreet,dropOffStreet)<=2000){
        return((distanceTravelledInFeet(pickUpStreet,dropOffStreet)-400)*0.02);
    }
    else if(distanceTravelledInFeet(pickUpStreet,dropOffStreet)>2000&&distanceTravelledInFeet(pickUpStreet,dropOffStreet)<=2500){
        return 25;
    }
    else if(distanceTravelledInFeet(pickUpStreet,dropOffStreet)>2500){
        return 'cannot travel that far';
    }
}
