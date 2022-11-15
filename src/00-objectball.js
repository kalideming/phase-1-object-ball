function gameObject(){
    return {
        home:{
            teamName: "Brooklyn Nets",
            colors: ["Black","White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away:{
            teamName: 'Charlotte Hornets',
            colors: ["turquoise", "purple"],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 2,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        },
    }
}



// create variables for our teams and all players
//multiple ways to do it
// const game = gameObject()
// const home = game.home
// const away = game.away
// const allPlayers = {...home.players, ...away.players}

const homeTeam = gameObject().home
const awayTeam = gameObject().away
const allPlayers = {...homeTeam.players, ...awayTeam.players}

// const {home, away} = gameObject()

//number of points scored by a player
function numPointsScored(name){
    for (let player in allPlayers){
        if (player === name) return allPlayers[player].points
    }
}
console.log(numPointsScored('Brendan Haywood'))


//shoe size of a player
function shoeSize(name){
    for (let x  in allPlayers){
        if (x === name) return allPlayers[name].shoe
    }
}

console.log(shoeSize('Brendan Haywood'))

function teamColors(name){
    return homeTeam.teamName === name ? homeTeam.colors : awayTeam.colors
}

console.log(teamColors("Brooklyn Nets"))

function teamNames(){
    return [homeTeam.teamName, awayTeam.teamName]
}

console.log(teamNames())

function playersNumbers(teamName){
    let players = (homeTeam.teamName === teamName ? homeTeam.players : awayTeam.players)
    let result = []
    for ( let x in players){
        result.push(players[x].number)
    }
    return result
}

console.log(playersNumbers("Brooklyn Nets"))


function playerStats(name){
    return allPlayers[name]
}

console.log(playerStats('Brendan Haywood'))

function bigShoeRebounds(){
    return allPlayers[bigShoe().player].rebounds
}


//helper functions
function bigShoe(){
    let bigPlayer = {shoe: 0, player: null}
    for (let x in allPlayers){
        if (allPlayers[x].shoe > bigPlayer.shoe){
            bigPlayer.shoe = allPlayers[x].shoe
            bigPlayer.player = x
        }
    }
    return bigPlayer
}

console.log(bigShoeRebounds())

