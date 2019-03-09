const struggleBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => {
    //make a passenger object
    //add it on the bus 

    const passenger = {
        name: name, 
        wallet: wallet, 
        isStruggling: isStruggling
    };

    if (seat === 'back') {
        struggleBus.push(passenger);
    }
    else if (seat === 'front') {
        struggleBus.unshift(passenger);
    } 
    else if (seat === 'middle') {
        const middleArray = struggleBus.length / 2;
        struggleBus.splice(middleArray, 0, passenger);
    }
};

const unloadPassenger = (bus, seat) => {
    //remore a passenger from the bus
    //return the passenger object
    if (seat === 'front') {
        return bus.shift(); //this will take off the first person in the array "index of 0"
    }
    else if (seat === 'back') {
        return bus.pop(); // this will take off the last person in the array "last index".
    } 
};




const allAboard = (bus) => {
    //loop over the passenger
    // given the bus costs 5 bucks
    // if the passenger can afford if, charge them
    // if NOT kick  them off the buss
    const busFare = 5;
    const validPassengers = [];

    bus.forEach((passenger) => {
        if (passenger.wallet >= busFare) {
            passenger.wallet -= busFare;
            validPassengers.push(passenger);
        };
    });
    return validPassengers;
};


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
const busBuilder = (bus) => {
    //build domString
    let domString = '';
    for (let i = 0; i < bus.length; i++) {
        domString += `<div class="bus-seat">`;
        domString += `<h4>${bus[i].name}</h4>`;
        domString += `<p>${bus[i].wallet}</p>`;
        domString += `<p>${bus[i].isStruggling}</p>`;
        domString += `</div>`;
    };
    printToDom('the-bus', domString)
};

const init = () => {
    addPassenger('Michael', 3, true, 'front');
    addPassenger('Zoe', 20, false, 'back');
    addPassenger('Greg', 4, false, 'back');
    addPassenger('Saul', 12, true, 'front');
    addPassenger('Matt1', 5, true, 'front');
    addPassenger('Matt2', 15, true, 'front');
    addPassenger('Matt3', 3, true, 'front');
    addPassenger('testMiddle', 15, true, 'middle');
    addPassenger('test1', 20, true, 'middle');


    const firstPassenger = unloadPassenger(struggleBus, 'front');
    console.log(firstPassenger);

   const busPeople = allAboard(struggleBus);

    busBuilder(busPeople);
    console.log(struggleBus);
};

init();

///Challenge--- create a function that will print a person in the middle. 