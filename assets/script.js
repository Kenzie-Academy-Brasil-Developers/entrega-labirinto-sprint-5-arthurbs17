const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

function maze(){
    let maze = document.getElementById('maze');

    for (let i = 0; i < map.length; i++){
        let blockMaze = document.createElement('div');
        maze.appendChild(blockMaze);
        for(let j = 0; j < map[i].length; j++){
            let elementMaze = document.createElement('div');
            blockMaze.appendChild(elementMaze)
            blockMaze.classList.add('blockMaze')
            if (map[i][j] === 'W'){
                elementMaze.classList.add('parede')
            }
            if (map[i][j] === 'S'){
                elementMaze.classList.add('player')
            }
            if (map[i][j] === ' '){
                elementMaze.classList.add('space')
            }
        }
    }
}

maze()