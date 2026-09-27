/* =========================================
   CLOCK
========================================= */

function updateClock() {

    const clock =
        document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    const hour =
        String(now.getHours()).padStart(2, "0");

    const minute =
        String(now.getMinutes()).padStart(2, "0");

    const second =
        String(now.getSeconds()).padStart(2, "0");

    clock.textContent =
        `${hour}:${minute}:${second}`;
}

setInterval(updateClock, 1000);

updateClock();


/* =========================================
   WINDOWS
========================================= */

const nodes =
    document.querySelectorAll(".node");

const windows =
    document.querySelectorAll(".window");

const closeButtons =
    document.querySelectorAll(".close");

const player =
    document.getElementById("youtubePlayer");


/* =========================================
   STOP MUSIC
========================================= */

function stopMusic() {

    if (player) {
        player.src = "";
    }

}


/* =========================================
   CLOSE WINDOWS
========================================= */

function closeAllWindows() {

    windows.forEach(function(window) {

        window.classList.remove("active");

    });

    stopMusic();

}


/* =========================================
   OPEN NODE
========================================= */

nodes.forEach(function(node) {

    node.addEventListener("click", function() {

        const targetId =
            this.dataset.window;

        const target =
            document.getElementById(targetId);

        if (!target) return;


        closeAllWindows();

        target.classList.add("active");


        /* MUSIC */

        if (targetId === "musicWindow") {

            if (player) {

                player.src =
                    "https://www.youtube.com/embed/U3SA9Nb5GY8?autoplay=1&rel=0";

            }

        }

    });

});


/* =========================================
   CLOSE BUTTON
========================================= */

closeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const window =
            this.closest(".window");

        if (!window) return;

        window.classList.remove("active");

        if (window.id === "musicWindow") {

            stopMusic();

        }

    });

});


/* =========================================
   ESC
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeAllWindows();

    }

});


/* =========================================
   CLICK OUTSIDE
========================================= */

document.addEventListener("click", function(event) {

    windows.forEach(function(window) {

        if (
            window.classList.contains("active") &&
            !window.contains(event.target) &&
            !event.target.closest(".node")
        ) {

            window.classList.remove("active");

            if (window.id === "musicWindow") {
                stopMusic();
            }

        }

    });

});


/* =========================================
   CORE EFFECT
========================================= */

const core =
    document.getElementById("core");

if (core) {

    core.addEventListener("click", function() {

        this.style.transform =
            "translate(-50%, -50%) scale(1.12)";

        setTimeout(function() {

            core.style.transform =
                "translate(-50%, -50%) scale(1)";

        }, 300);

    });

}


/* =========================================
   ARCADE GAME
========================================= */

const startGame =
    document.getElementById("startGame");

const target =
    document.getElementById("target");

const gameArea =
    document.getElementById("gameArea");

const scoreText =
    document.getElementById("score");

const timeText =
    document.getElementById("gameTime");

const gameMessage =
    document.getElementById("gameMessage");


let score = 0;
let time = 10;
let gameRunning = false;
let timer = null;


/* RANDOM TARGET */

function moveTarget() {

    if (!gameArea || !target) return;

    const maxX =
        gameArea.clientWidth -
        target.offsetWidth;

    const maxY =
        gameArea.clientHeight -
        target.offsetHeight;

    const x =
        Math.random() * maxX;

    const y =
        Math.random() * maxY;

    target.style.left =
        `${x}px`;

    target.style.top =
        `${y}px`;

}


/* START GAME */

if (startGame) {

    startGame.addEventListener(
        "click",
        function() {

            if (gameRunning) return;

            score = 0;
            time = 10;

            gameRunning = true;

            scoreText.textContent = "000";
            timeText.textContent = "10";

            gameMessage.style.display =
                "none";

            target.style.display =
                "block";

            startGame.textContent =
                "GAME RUNNING...";

            moveTarget();


            timer = setInterval(
                function() {

                    time--;

                    timeText.textContent =
                        String(time).padStart(2, "0");

                    if (time <= 0) {

                        clearInterval(timer);

                        gameRunning = false;

                        target.style.display =
                            "none";

                        gameMessage.style.display =
                            "block";

                        gameMessage.textContent =
                            `SCORE: ${String(score).padStart(3, "0")}`;

                        startGame.textContent =
                            "PLAY AGAIN";

                    }

                },
                1000
            );

        }
    );

}


/* TARGET CLICK */

if (target) {

    target.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

            if (!gameRunning) return;

            score++;

            scoreText.textContent =
                String(score).padStart(3, "0");

            moveTarget();

        }
    );

}