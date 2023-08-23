// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - 42);
}

function distanceFromHqInFeet(blockNumber) {
    return Math.abs((blockNumber - 42) * 264)
}

function distanceTravelledInFeet(blockNumber, targetDestination) {
    return Math.abs((blockNumber - targetDestination) *264)
}

function calculatesFarePrice(blockNumber, targetDestination) {
    const totalDistance = distanceTravelledInFeet(blockNumber, targetDestination);
    if (totalDistance <= 400) {
        console.log("Free")
        return 0;
    } else if (totalDistance > 400 && totalDistance <= 2000) {
        console.log("The price is 2 cents per foot")
        return (totalDistance - 400) * 0.02
    } else if (totalDistance > 2000 && totalDistance < 2500) {
        console.log('Charges 25 dollars for a distance over 2000 feet')
        return 25
    } else if (totalDistance >= 2500 ) {
        return 'cannot travel that far'
    }
}