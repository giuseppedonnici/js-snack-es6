/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse 
proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo 
nomi e falli subiti e stampiamo tutto in console.
*/

const teams = [
    {
        name: "Milan",
        points: 0,
        foulsSuffered: 0,
    },
    {
        name: "Juventus",
        points: 0,
        foulsSuffered: 0,
    },
    {
        name: "Inter",
        points: 0,
        foulsSuffered: 0,
    },
    {
        name: "Napoli",
        points: 0,
        foulsSuffered: 0,
    },
    {
        name: "Roma",
        points: 0,
        foulsSuffered: 0,
    },
];


teams.forEach((curTeam) => {
   curTeam.points = generateRndNumber();
   curTeam.foulsSuffered = generateRndNumber();
});

console.log(teams);

const newTeams = [];

teams.forEach((curTeam) => {
    const {name, foulsSuffered} = curTeam;
    newTeams.push({name, foulsSuffered});
})

console.log(teams, newTeams);

// FUNCTIONS
function generateRndNumber() {
    result = Math.floor((Math.random() * 100) + 1);
    return result;
}

