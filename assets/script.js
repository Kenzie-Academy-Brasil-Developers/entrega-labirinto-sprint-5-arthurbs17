const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W         W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S      W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

function buildMaze(){
    let maze = document.getElementById('maze');
    let playerPosition = [];

    for (let i = 0; i < map.length; i++){
        let blockMaze = document.createElement('div');
        maze.appendChild(blockMaze);
        blockMaze.classList.add('blockMaze')
        for(let j = 0; j < map[i].length; j++){
            let elementMaze = document.createElement('div');
            blockMaze.appendChild(elementMaze)
            if (map[i][j] === 'W'){
                elementMaze.classList.add('parede')
            }
            if (map[i][j] === 'S'){
                elementMaze.classList.add('player')
                playerPosition = [...playerPosition, i, j];
            }
            if (map[i][j] !== 'W' || map[i][j] !== 'S'){
                elementMaze.classList.add('space')
            }
        }
    }

    console.log(playerPosition)
}

buildMaze()