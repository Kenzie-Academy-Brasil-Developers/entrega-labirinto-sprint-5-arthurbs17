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
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

function keyNotAllowed(key){
    if(key !== 'ArrowLeft' && key !== 'ArrowRight' && key !== 'ArrowDown' && key !== 'ArrowUp'){
        return true
    }
    return false
}

function warningNotice(){
    let body = document.getElementById('tela');
    let warning = document.createElement('div');
    let h2 = document.createElement('h2');
    
    warning.classList.add('warning');
    warning.appendChild(h2);
    body.appendChild(warning);

    h2.innerText = 'Somente utilizar as setas, Click to continue!'

    warning.addEventListener('click', function(){
        warning.parentNode.removeChild(warning)
    })
}

function victoryNotice(){
    let body = document.getElementById('tela');
    let victory = document.createElement('div');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    
    victory.classList.add('victory');
    victory.appendChild(h2);
    victory.appendChild(h3)
    body.appendChild(victory);

    h2.innerText = 'Você conseguiu escapar!!'
    h3.innerText = 'Click para jogar novamente'

    victory.addEventListener('click', function(){
        victory.parentNode.removeChild(victory)
        location.reload();
    })
}

function buildMaze(){
    let maze = document.getElementById('maze');

    for (let i = 0; i < map.length; i++){
        let blockMaze = document.createElement('div');
        maze.appendChild(blockMaze);
        blockMaze.classList.add('blockMaze')
        for(let j = 0; j < map[i].length; j++){
            let elementMaze = document.createElement('div');
            blockMaze.appendChild(elementMaze);
            if(i > 10){
                elementMaze.setAttribute('id', `${i}a${j}`)
            }
            else{
                elementMaze.setAttribute('id', `${i}${j}`)
            }
            if (map[i][j] === 'W'){
                elementMaze.classList.add('parede')
            }
            if (map[i][j] === 'S'){
                let player = document.createElement('div');
                elementMaze.appendChild(player)
                player.classList.add('player')
            }
            if (map[i][j] !== 'W' || map[i][j] !== 'S'){
                elementMaze.classList.add('space')
            }
        }
    }

    let i = 9;
    let j = 0;
    let validValueI = 0;
    let validValueJ = 0;
    let exitDiv = document.getElementById('820');

    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        let playerPosition = document.querySelector('.player');
    
        if(keyName === 'ArrowRight'){
            j += 1;
        }
        if(keyName === 'ArrowUp'){
            i -= 1;
        }
        if(keyName === 'ArrowLeft'){
            j -= 1;
        }
        if(keyName === 'ArrowDown'){
            i += 1;
        }
        if(keyNotAllowed(keyName)){
            warningNotice()
        }

        if (j < 0){
            j = 0;
        }

        let newPlayerPosition = document.getElementById(`${i}${j}`);
        if(i > 10){
            newPlayerPosition = document.getElementById(`${i}a${j}`)
        }
        if(newPlayerPosition.className !== 'parede space'){
            newPlayerPosition.appendChild(playerPosition)
            validValueJ = j;
            validValueI = i;
        }else{
            j = validValueJ;
            i = validValueI;
        }
        if (exitDiv.childElementCount === 1){
            victoryNotice()
            console.log('Você venceu')
        }

        console.log(newPlayerPosition);
      });
}

buildMaze()