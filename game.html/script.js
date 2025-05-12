
score = 0;
cross = true;
document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        Dino = document.querySelector('.Dino');
        Dino.classList.add('animateDino');
        setTimeout(() => {
            Dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        Dino = document.querySelector('.Dino');
        DinoX = parseInt(window.getComputedStyle(Dino, null).getPropertyValue('left'));
        Dino.style.left = DinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
        Dino = document.querySelector('.Dino');
        DinoX = parseInt(window.getComputedStyle(Dino, null).getPropertyValue('left'));
        Dino.style.left = (DinoX - 112) + "px";
    }
    setInterval(() => {
        Dino = document.querySelector('.Dino');
        Gameover = document.querySelector('.Gameover');
        obstacle = document.querySelector('.obstacle');
        dx = parseInt(window.getComputedStyle(Dino, null).getPropertyValue('left'));
        dy = parseInt(window.getComputedStyle(Dino, null).getPropertyValue('top'));

        ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
        oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

        offsetX = Math.abs(dx - ox);
        offsetY = Math.abs(dy - oy);
        //console.log(offsetX, offsetY)//
        if (offsetX < 113 && offsetY < 52) {
            Gameover.style.visiblity = 'visible';
            obstacle.classList.remove('obstacleAni')
        }
        else if (offsetX < 145 && cross) {
            score += 1;
            updateScore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
            setTimeout(() => {

            }, 500);
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }
    }, 10);
}
function updateScore(score) {
    scorecont.innerHTML = "Your Score: " + score
}
