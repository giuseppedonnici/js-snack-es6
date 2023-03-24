/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const bikes = [
    {
        name: "Canyon Ultimate CF",
        weight: 6.7,
    },
    {
        name: "Rose X-Lite",
        weight: 6.9,
    },
    {
        name: "Sarto Asola",
        weight: 5.7,
    },
    {
        name: "Scott Addict RC Premius Disc",
        weight: 6.85,
    },
    {
        name: "Time Alpe D'Huez",
        weight: 6.2,
    },
];

let lessWeightBike = bikes[0].weight;
let nameBike;

bikes.forEach((curBike) => {
    const {weight, name} = curBike;
    if (lessWeightBike > weight) {
        lessWeightBike = weight;
        nameBike = name;
    }
});
console.log(nameBike, lessWeightBike);

const lighterBike = document.querySelector(".lighter-bike");

lighterBike.innerHTML = `${nameBike}, ${lessWeightBike} Kg`;