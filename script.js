/* ==================================================
   DATA DIRI
================================================== */

const data = {

    name: "Nazam Royiba",

    age: 15,

    school: "SMKN 1 JAKARTA",

    major: "TKJ",

    bio: "Saya adalah pribadi yang memiliki rasa ingin tahu tinggi, senang mempelajari hal baru, dan terus berusaha memberikan hasil terbaik dalam setiap proses yang dijalani.",


    /* ================= PENDIDIKAN ================= */

    education: [

        {
            year: "2012 — 2014",
            level: "PAUD",
            name: "TPAUD Kencana",
            desc: "Awal perjalanan pendidikan"
        },

        {
            year: "2017 — 2023",
            level: "SD",
            name: "SDN KKA 01 PG",
            desc: "Membangun fondasi dan pengalaman pertama"
        },

        {
            year: "2023 — 2026",
            level: "SMP",
            name: "SMPN 132 JAKARTA",
            desc: "Mulai menemukan minat dan mengembangkan kemampuan"
        },

        {
            year: "2026 — NOW",
            level: "SMK",
            name: "SMKN 1 JAKARTA",
            desc: "Mengembangkan kompetensi dan mempersiapkan masa depan"
        }

    ],


    /* ================= PRESTASI ================= */

    achievements: [

        {
            title: "Juara 1 Lomba Kaligrafi",
            detail: "Tingkat Kabupaten",
            year: "2023"
        },

        {
            title: "Juara 3 mayoret",
            detail: "Tingkat Kota",
            year: "2024"
        },

        {
            title: "Juara 1 Mayoret",
            detail: "Tingkat Provinsi",
            year: "2025"
        },

        {
            title: "Sertifikat Pencapaian",
            detail: "Bidang Akademik",
            year: "2026"
        },

        {
            title: "Penghargaan Sekolah",
            detail: "Bidang Non-Akademik",
            year: "2023"
        }

    ]

};


/* ==================================================
   MEMASUKKAN DATA DIRI
================================================== */

document.getElementById("heroName").textContent =
    data.name;


document.getElementById("fullName").textContent =
    data.name;


document.getElementById("age").textContent =
    String(data.age).padStart(2, "0");


document.getElementById("ageDetail").textContent =
    `${data.age} Tahun`;


document.getElementById("schoolDetail").textContent =
    data.school;


document.getElementById("majorDetail").textContent =
    data.major;


document.getElementById("bio").textContent =
    data.bio;


document.getElementById("currentSchool").textContent =
    data.school;


document.getElementById("currentMajor").textContent =
    data.major;


document.getElementById("contactName").textContent =
    data.name;


document.getElementById("footerName").textContent =
    data.name;


/* ==================================================
   JUMLAH PRESTASI
================================================== */

document.getElementById("achievementCount").textContent =
    String(data.achievements.length).padStart(2, "0");


/* ==================================================
   TIMELINE PENDIDIKAN
================================================== */

document.getElementById("timeline").innerHTML =

    data.education.map(item => `

        <div class="timeline-item">

            <div class="timeline-year">
                ${item.year}
            </div>

            <div class="timeline-level">
                ${item.level}
            </div>

            <div>

                <div class="timeline-name">
                    ${item.name}
                </div>

                <span class="timeline-desc">
                    ${item.desc}
                </span>

            </div>

            <div class="timeline-arrow">
                ↗
            </div>

        </div>

    `).join("");



/* ==================================================
   DAFTAR PRESTASI
================================================== */

document.getElementById("achievementList").innerHTML =

    data.achievements.map((item, i) => `

        <div class="achievement-item">

            <div class="achievement-index">
                ${String(i + 1).padStart(2, "0")}
            </div>

            <div>

                <div class="achievement-title">
                    ${item.title}
                </div>

                <div class="achievement-detail">
                    ${item.detail}
                </div>

            </div>

            <div class="achievement-year">
                ${item.year}
            </div>

            <div class="achievement-arrow">
                ↗
            </div>

        </div>

    `).join("");



/* ==================================================
   ANIMASI SCROLL
================================================== */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                /*
                 * Setelah muncul, observer tidak perlu
                 * mengamati elemen tersebut lagi.
                 */

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


/* Semua elemen dengan class reveal */

document
    .querySelectorAll(".reveal")
    .forEach(el => observer.observe(el));



/* ==================================================
   EFEK CAHAYA MENGIKUTI MOUSE
================================================== */

document.addEventListener("mousemove", e => {

    const x =
        (e.clientX / window.innerWidth - 0.5) * 2;

    const y =
        (e.clientY / window.innerHeight - 0.5) * 2;


    const orbOne =
        document.querySelector(".orb-one");

    const orbTwo =
        document.querySelector(".orb-two");


    orbOne.style.transform =
        `translate(${x * 18}px, ${y * 18}px)`;


    orbTwo.style.transform =
        `translate(${x * -12}px, ${y * -12}px)`;

});



/* ==================================================
   FOTO ERROR HANDLER
================================================== */

const photo =
    document.getElementById("profilePhoto");


photo.addEventListener("error", () => {

    /*
     * Kalau foto.jpg tidak ditemukan,
     * gambar disembunyikan.
     */

    photo.style.display = "none";

});
/* ==================================================
   NAZAM // SIGNATURE CURSOR
================================================== */

const nzCursor = document.createElement("div");
nzCursor.className = "nz-cursor";

const nzRing = document.createElement("div");
nzRing.className = "nz-ring";

const nzRing2 = document.createElement("div");
nzRing2.className = "nz-ring-2";

const nzCross = document.createElement("div");
nzCross.className = "nz-cross";

const nzLabel = document.createElement("div");
nzLabel.className = "nz-label";
nzLabel.textContent = "NAZAM // 01";

document.body.appendChild(nzCursor);
document.body.appendChild(nzRing);
document.body.appendChild(nzRing2);
document.body.appendChild(nzCross);
document.body.appendChild(nzLabel);


/* ==================================================
   MOUSE POSITION
================================================== */

let nzMouseX = window.innerWidth / 2;
let nzMouseY = window.innerHeight / 2;

let nzRingX = nzMouseX;
let nzRingY = nzMouseY;

let nzRing2X = nzMouseX;
let nzRing2Y = nzMouseY;

document.addEventListener("mousemove", (e) => {

    nzMouseX = e.clientX;
    nzMouseY = e.clientY;

    nzCursor.style.left = nzMouseX + "px";
    nzCursor.style.top = nzMouseY + "px";

    nzCross.style.left = nzMouseX + "px";
    nzCross.style.top = nzMouseY + "px";

    nzLabel.style.left = nzMouseX + "px";
    nzLabel.style.top = nzMouseY + "px";
});


/* ==================================================
   SMOOTH RINGS
================================================== */

function nzAnimateCursor() {

    nzRingX += (nzMouseX - nzRingX) * 0.16;
    nzRingY += (nzMouseY - nzRingY) * 0.16;

    nzRing2X += (nzMouseX - nzRing2X) * 0.08;
    nzRing2Y += (nzMouseY - nzRing2Y) * 0.08;

    nzRing.style.left = nzRingX + "px";
    nzRing.style.top = nzRingY + "px";

    nzRing2.style.left = nzRing2X + "px";
    nzRing2.style.top = nzRing2Y + "px";

    requestAnimationFrame(nzAnimateCursor);
}

nzAnimateCursor();


/* ==================================================
   PARTICLE TRAIL
================================================== */

const nzParticles = [];

for (let i = 0; i < 14; i++) {

    const particle = document.createElement("div");

    particle.className = "nz-particle";

    document.body.appendChild(particle);

    nzParticles.push({
        element: particle,
        x: nzMouseX,
        y: nzMouseY,
        delay: i
    });
}


function nzAnimateParticles() {

    let targetX = nzMouseX;
    let targetY = nzMouseY;

    nzParticles.forEach((particle, index) => {

        const speed = 0.22 - index * 0.008;

        particle.x +=
            (targetX - particle.x) * speed;

        particle.y +=
            (targetY - particle.y) * speed;

        particle.element.style.left =
            particle.x + "px";

        particle.element.style.top =
            particle.y + "px";

        const scale =
            1 - index / nzParticles.length;

        particle.element.style.transform =
            `translate(-50%, -50%) scale(${scale})`;

        targetX = particle.x;
        targetY = particle.y;
    });

    requestAnimationFrame(nzAnimateParticles);
}

nzAnimateParticles();


/* ==================================================
   HOVER DETECTION
================================================== */

const nzHoverTargets = document.querySelectorAll(
    "a, button, .timeline-item, .achievement-item, .photo-frame"
);

nzHoverTargets.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        document.body.classList.add("nz-hover");

    });

    element.addEventListener("mouseleave", () => {

        document.body.classList.remove("nz-hover");

    });

});


/* ==================================================
   CLICK BURST
================================================== */

document.addEventListener("click", (e) => {

    document.body.classList.add("nz-click");

    setTimeout(() => {

        document.body.classList.remove("nz-click");

    }, 250);


    const burst = document.createElement("div");

    burst.className = "nz-burst";

    burst.style.left = e.clientX + "px";
    burst.style.top = e.clientY + "px";

    document.body.appendChild(burst);

    setTimeout(() => {

        burst.remove();

    }, 600);

});
/* =========================================================
   NAZAM OS — EXTRA EFFECTS
   TAMBAHAN SAJA — TIDAK MENGUBAH CODE LAMA
   ========================================================= */

(() => {
    const finePointer =
        window.matchMedia("(pointer:fine)").matches &&
        window.innerWidth > 700;

    const reducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* =====================================================
       ALIEN HUD CURSOR
       ===================================================== */

    if (finePointer && !reducedMotion) {

        const cursor = document.createElement("div");

        cursor.className = "gx-cursor";

        cursor.innerHTML = `
            <div class="gx-orbit gx-orbit-a"></div>
            <div class="gx-orbit gx-orbit-b"></div>
            <div class="gx-orbit gx-orbit-c"></div>

            <div class="gx-cross"></div>

            <div class="gx-tick gx-tl"></div>
            <div class="gx-tick gx-tr"></div>
            <div class="gx-tick gx-bl"></div>
            <div class="gx-tick gx-br"></div>

            <div class="gx-satellite"></div>

            <div class="gx-core"></div>
        `;

        document.body.appendChild(cursor);

        let mouseX = -100;
        let mouseY = -100;

        document.addEventListener("mousemove", (e) => {

            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.left = mouseX + "px";
            cursor.style.top = mouseY + "px";

            cursor.classList.add("active");

            /* PARTICLE */

            if (Math.random() > 0.55) {

                const particle =
                    document.createElement("div");

                particle.className =
                    Math.random() > 0.5
                        ? "gx-particle"
                        : "gx-star";

                particle.style.left =
                    mouseX + "px";

                particle.style.top =
                    mouseY + "px";

                particle.style.setProperty(
                    "--gx-x",
                    ((Math.random() - .5) * 35) + "px"
                );

                particle.style.setProperty(
                    "--gx-y",
                    ((Math.random() - .5) * 35) + "px"
                );

                document.body.appendChild(particle);

                setTimeout(() => {
                    particle.remove();
                }, 1000);
            }
        });


        document.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
        });


        /* HOVER TARGET */

        const targets = document.querySelectorAll(`
            a,
            button,
            .timeline-item,
            .achievement-item,
            .photo-frame
        `);

        targets.forEach((target) => {

            target.addEventListener("mouseenter", () => {
                cursor.classList.add("gx-hover");
            });

            target.addEventListener("mouseleave", () => {
                cursor.classList.remove("gx-hover");
            });

        });
    }


    /* =====================================================
       PHOTO SCAN EFFECT
       ===================================================== */

    const photoFrame =
        document.querySelector(".photo-frame");

    if (photoFrame) {

        const scan =
            document.createElement("div");

        scan.className = "gx-photo-scan";

        photoFrame.appendChild(scan);

        let scanTimer;

        photoFrame.addEventListener("mouseenter", () => {

            clearTimeout(scanTimer);

            scan.classList.remove("active");

            void scan.offsetWidth;

            scan.classList.add("active");

            scanTimer = setTimeout(() => {
                scan.classList.remove("active");
            }, 1800);
        });
    }


    /* =====================================================
       SCROLL PROGRESS
       ===================================================== */

    if (finePointer) {

        const progress =
            document.createElement("div");

        progress.className =
            "gx-scroll-progress";

        progress.innerHTML = `
            <div class="gx-scroll-progress-bar"></div>
        `;

        document.body.appendChild(progress);

        const bar =
            progress.querySelector(
                ".gx-scroll-progress-bar"
            );

        const updateProgress = () => {

            const scrollTop =
                window.scrollY;

            const scrollHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const percentage =
                scrollHeight > 0
                    ? (scrollTop / scrollHeight) * 100
                    : 0;

            bar.style.height =
                percentage + "%";
        };

        window.addEventListener(
            "scroll",
            updateProgress,
            { passive: true }
        );

        updateProgress();
    }


    /* =====================================================
       SYSTEM STATUS
       ===================================================== */

    if (finePointer) {

        const status =
            document.createElement("div");

        status.className =
            "gx-system-status";

        status.innerHTML = `
            <div>
                <span class="gx-system-dot"></span>
                SYSTEM ONLINE
            </div>
            <div>MODE: TKJ_PORTFOLIO</div>
            <div>STATUS: LEARNING</div>
        `;

        document.body.appendChild(status);
    }


    /* =====================================================
       ACHIEVEMENT UNLOCK EFFECT
       ===================================================== */

    document
        .querySelectorAll(".achievement-item")
        .forEach((item) => {

            item.addEventListener(
                "mouseenter",
                () => {

                    item.classList.add(
                        "gx-unlocked"
                    );

                    setTimeout(() => {
                        item.classList.remove(
                            "gx-unlocked"
                        );
                    }, 1200);

                }
            );

        });


    /* =====================================================
       SECRET TERMINAL — CTRL + K
       ===================================================== */

    const terminal =
        document.createElement("div");

    terminal.className =
        "gx-terminal";

    terminal.innerHTML = `
        <div class="gx-terminal-header">

            <div class="gx-terminal-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>

            NAZAM_OS // TERMINAL

        </div>

        <div class="gx-terminal-body">

            <div id="gxTerminalOutput">
                NAZAM OS TERMINAL v1.0<br>
                SYSTEM READY.<br>
                Type <b>help</b> for commands.
            </div>

            <div class="gx-terminal-input">
                <span>&gt;</span>
                <input
                    id="gxTerminalInput"
                    autocomplete="off"
                    spellcheck="false"
                />
            </div>

        </div>
    `;

    document.body.appendChild(terminal);


    const terminalInput =
        terminal.querySelector(
            "#gxTerminalInput"
        );

    const terminalOutput =
        terminal.querySelector(
            "#gxTerminalOutput"
        );


    document.addEventListener(
        "keydown",
        (e) => {

            if (
                e.ctrlKey &&
                e.key.toLowerCase() === "k"
            ) {

                e.preventDefault();

                terminal.classList.toggle("open");

                if (
                    terminal.classList.contains("open")
                ) {
                    setTimeout(() => {
                        terminalInput.focus();
                    }, 100);
                }
            }

            if (
                e.key === "Escape" &&
                terminal.classList.contains("open")
            ) {

                terminal.classList.remove("open");
            }
        }
    );


    terminalInput.addEventListener(
        "keydown",
        (e) => {

            if (e.key !== "Enter") return;

            const command =
                terminalInput.value
                    .trim()
                    .toLowerCase();

            terminalInput.value = "";

            let response = "";


            if (command === "help") {

                response = `
                    <br>
                    AVAILABLE COMMANDS:<br>
                    ─────────────────────<br>
                    about<br>
                    skills<br>
                    education<br>
                    contact<br>
                    clear<br>
                `;

            }

            else if (command === "about") {

                response = `
                    <br>
                    PERSONAL PORTFOLIO SYSTEM.<br>
                    USER: NAZAM<br>
                    FIELD: TKJ / INFORMATION TECHNOLOGY<br>
                `;

            }

            else if (command === "skills") {

                response = `
                    <br>
                    SKILLS DATABASE:<br>
                    HTML<br>
                    CSS<br>
                    JAVASCRIPT<br>
                    COMPUTER NETWORKING<br>
                    TKJ FUNDAMENTALS<br>
                `;

            }

            else if (command === "education") {

                response = `
                    <br>
                    EDUCATION DATABASE LOADED.<br>
                    ACCESSING TIMELINE...
                `;

            }

            else if (command === "contact") {

                response = `
                    <br>
                    CONTACT MODULE AVAILABLE.<br>
                    CHECK PORTFOLIO CONTACT SECTION.
                `;

            }

            else if (command === "clear") {

                terminalOutput.innerHTML = "";

                return;

            }

            else if (command === "") {

                return;

            }

            else {

                response = `
                    <br>
                    COMMAND NOT FOUND:<br>
                    ${command}<br>
                    Type <b>help</b>.
                `;
            }


            terminalOutput.innerHTML +=
                `<br>&gt; ${command}${response}`;

            terminalInput.scrollIntoView({
                behavior: "smooth",
                block: "end"
            });
        }
    );


    /* =====================================================
       LOGO EASTER EGG
       KLIK LOGO 7X
       ===================================================== */

    const logo =
        document.querySelector(".logo");

    if (logo) {

        let clicks = 0;
        let resetTimer;

        logo.addEventListener(
            "click",
            () => {

                clicks++;

                clearTimeout(resetTimer);

                resetTimer = setTimeout(() => {
                    clicks = 0;
                }, 1500);


                if (clicks >= 7) {

                    clicks = 0;

                    showAccessGranted();
                }
            }
        );
    }


    function showAccessGranted() {

        const access =
            document.createElement("div");

        access.className =
            "gx-access";

        access.innerHTML = `
            <div class="gx-access-text">
                SYSTEM OVERRIDE<br>
                <small>ACCESS GRANTED</small>
            </div>
        `;

        document.body.appendChild(access);

        requestAnimationFrame(() => {
            access.classList.add("show");
        });

        setTimeout(() => {

            access.classList.remove("show");

            setTimeout(() => {
                access.remove();
            }, 400);

        }, 1800);
    }


    /* =====================================================
       PAGE LOAD SYSTEM EFFECT
       ===================================================== */

    if (!reducedMotion) {

        document.documentElement
            .style
            .scrollBehavior = "smooth";
    }

})();
/* =========================================================
   NAZAM X // SYSTEM 9-12
   SAFE VERSION
   ========================================================= */

(() => {

    "use strict";


    /* =====================================================
       CREATE SAFE ELEMENT
       ===================================================== */

    function createElement(className) {

        const element =
            document.createElement("div");

        element.className =
            className;

        document.body.appendChild(
            element
        );

        return element;
    }


    /* =====================================================
       09 — CINEMATIC BOOT
       ===================================================== */

    const boot =
        document.createElement("div");

    boot.className =
        "zx-boot";

    boot.innerHTML = `

        <div class="zx-boot-box">

            <div class="zx-boot-logo">
                NAZAM<span style="color:white">.SYS</span>
            </div>

            <div class="zx-boot-sub">
                PERSONAL PORTFOLIO // X TKJ
            </div>

            <div
                class="zx-boot-terminal"
                id="zx-boot-terminal"
            ></div>

            <div class="zx-boot-progress">
                <span
                    id="zx-boot-progress"
                ></span>
            </div>

            <div
                class="zx-boot-status"
                id="zx-boot-status"
            >
                INITIALIZING...
            </div>

        </div>

    `;

    document.body.appendChild(
        boot
    );


    const bootLines = [

        "BOOTING PERSONAL SYSTEM",

        "CHECKING CORE MODULES",

        "LOADING PORTFOLIO DATABASE",

        "INITIALIZING VISUAL ENGINE",

        "CONNECTING INTERFACE",

        "CALIBRATING USER SYSTEM",

        "ACCESSING PERSONAL DATA",

        "SYSTEM STATUS: ONLINE"

    ];


    const bootTerminal =
        document.getElementById(
            "zx-boot-terminal"
        );

    const bootProgress =
        document.getElementById(
            "zx-boot-progress"
        );

    const bootStatus =
        document.getElementById(
            "zx-boot-status"
        );


    let bootIndex = 0;

    let bootFinished =
        false;


    function removeBoot() {

        if (bootFinished)
            return;

        bootFinished =
            true;

        boot.classList.add(
            "zx-boot-hidden"
        );

        setTimeout(() => {

            if (boot.parentNode) {

                boot.remove();

            }

        }, 800);

    }


    function nextBootLine() {

        if (bootFinished)
            return;


        if (
            bootIndex >=
            bootLines.length
        ) {

            bootStatus.textContent =
                "ACCESS GRANTED // WELCOME";

            setTimeout(
                removeBoot,
                450
            );

            return;
        }


        const line =
            document.createElement(
                "div"
            );

        line.className =
            "zx-boot-line";

        line.textContent =
            bootLines[
                bootIndex
            ];

        bootTerminal.appendChild(
            line
        );


        const percentage =
            Math.round(
                (
                    (bootIndex + 1) /
                    bootLines.length
                ) * 100
            );


        bootProgress.style.width =
            percentage + "%";


        bootStatus.textContent =
            "SYSTEM INITIALIZATION " +
            percentage +
            "%";


        bootIndex++;


        setTimeout(
            nextBootLine,
            170
        );
    }


    setTimeout(
        nextBootLine,
        300
    );


    /*
       FAIL-SAFE

       Kalau ada error apa pun,
       layar boot TETAP akan hilang.
    */

    setTimeout(
        removeBoot,
        5000
    );


    /* =====================================================
       HUD
       ===================================================== */

    const hud =
        createElement(
            "zx-hud"
        );

    hud.innerHTML = `

        <div class="zx-hud-header">

            <span>
                NAZAM // SYS
            </span>

            <span class="zx-live">
                ● LIVE
            </span>

        </div>


        <div class="zx-hud-row">

            <span>
                STATUS
            </span>

            <span
                class="zx-hud-value"
                id="zx-status"
            >
                ONLINE
            </span>

        </div>


        <div class="zx-hud-row">

            <span>
                VELOCITY
            </span>

            <span
                class="zx-hud-value"
                id="zx-speed"
            >
                0%
            </span>

        </div>


        <div class="zx-hud-bar">
            <span
                id="zx-speed-bar"
            ></span>
        </div>


        <div class="zx-hud-row">

            <span>
                SCROLL
            </span>

            <span
                class="zx-hud-value"
                id="zx-scroll"
            >
                0%
            </span>

        </div>


        <div class="zx-hud-bar">
            <span
                id="zx-scroll-bar"
            ></span>
        </div>


        <div class="zx-hud-row">

            <span>
                ACTIVITY
            </span>

            <span
                class="zx-hud-value"
                id="zx-activity"
            >
                NORMAL
            </span>

        </div>


        <div class="zx-radar"></div>

    `;


    /* =====================================================
       MESSAGE
       ===================================================== */

    const message =
        createElement(
            "zx-message"
        );


    message.innerHTML = `

        <div class="zx-message-title">
            SYSTEM MESSAGE
        </div>

        <div id="zx-message-text">
            SYSTEM ONLINE
        </div>

    `;


    let messageTimeout;


    function showMessage(text) {

        const messageText =
            document.getElementById(
                "zx-message-text"
            );


        if (!messageText)
            return;


        messageText.textContent =
            text;


        message.classList.add(
            "zx-message-visible"
        );


        clearTimeout(
            messageTimeout
        );


        messageTimeout =
            setTimeout(() => {

                message.classList.remove(
                    "zx-message-visible"
                );

            }, 2500);

    }


    /* =====================================================
       GLITCH
       ===================================================== */

    const glitch =
        createElement(
            "zx-glitch"
        );


    function glitchEffect() {

        glitch.classList.remove(
            "zx-glitch-active"
        );


        void glitch.offsetWidth;


        glitch.classList.add(
            "zx-glitch-active"
        );

    }


    /* =====================================================
       SCANLINES
       ===================================================== */

    const scanlines =
        createElement(
            "zx-scanlines"
        );


    function scanMode() {

        scanlines.classList.add(
            "zx-scan-active"
        );


        setTimeout(() => {

            scanlines.classList.remove(
                "zx-scan-active"
            );

        }, 5000);

    }


    /* =====================================================
       10 — SECRET CONSOLE
       ===================================================== */

    const consoleLayer =
        createElement(
            "zx-console"
        );


    consoleLayer.innerHTML = `

        <div class="zx-console-top">

            <span>
                NAZAM // SECRET CONSOLE
            </span>

            <span>
                ESC TO EXIT
            </span>

        </div>


        <div class="zx-console-title">
            SYSTEM TERMINAL
        </div>


        <div class="zx-console-description">

            TYPE "help" TO DISPLAY
            AVAILABLE COMMANDS

        </div>


        <div
            class="zx-console-output"
            id="zx-console-output"
        >

            <div class="zx-console-line">

                SYSTEM TERMINAL CONNECTED.

            </div>

            <div class="zx-console-line">

                ACCESS LEVEL:
                VISITOR

            </div>

        </div>


        <div class="zx-console-input">

            <span>
                root@nazam:~$
            </span>

            <input
                type="text"
                class="zx-command-input"
                id="zx-command-input"
                autocomplete="off"
                spellcheck="false"
            >

        </div>

    `;


    const commandInput =
        document.getElementById(
            "zx-command-input"
        );


    const consoleOutput =
        document.getElementById(
            "zx-console-output"
        );


    function openConsole() {

        consoleLayer.classList.add(
            "zx-console-open"
        );


        setTimeout(() => {

            commandInput.focus();

        }, 100);

    }


    function closeConsole() {

        consoleLayer.classList.remove(
            "zx-console-open"
        );

    }


    function consolePrint(
        text,
        isCommand = false
    ) {

        const line =
            document.createElement(
                "div"
            );


        line.className =
            "zx-console-line";


        if (isCommand) {

            line.classList.add(
                "zx-console-command"
            );

        }


        line.textContent =
            text;


        consoleOutput.appendChild(
            line
        );


        consoleOutput.scrollTop =
            consoleOutput.scrollHeight;

    }


    /* =====================================================
       SHORTCUT
       
       CTRL + SHIFT + `
       
       Juga mendukung:
       CTRL + SHIFT + ~
       
       DAN:
       CTRL + K
       ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {


            const secretShortcut =
                event.ctrlKey &&
                event.shiftKey &&
                (
                    event.code ===
                    "Backquote" ||

                    event.key === "`" ||

                    event.key === "~"
                );


            const easyShortcut =
                event.ctrlKey &&
                event.key.toLowerCase()
                === "k";


            if (
                secretShortcut ||
                easyShortcut
            ) {

                event.preventDefault();


                if (
                    consoleLayer
                        .classList
                        .contains(
                            "zx-console-open"
                        )
                ) {

                    closeConsole();

                } else {

                    openConsole();

                }

            }


            if (
                event.key === "Escape"
            ) {

                closeConsole();

            }

        }
    );


    /* =====================================================
       COMMAND INPUT
       ===================================================== */

    commandInput.addEventListener(
        "keydown",
        (event) => {


            if (
                event.key !==
                "Enter"
            ) {

                return;

            }


            const command =
                commandInput.value
                    .trim()
                    .toLowerCase();


            commandInput.value = "";


            if (!command)
                return;


            consolePrint(
                "> " + command,
                true
            );


            runCommand(
                command
            );

        }
    );


    /* =====================================================
       COMMANDS
       ===================================================== */

    function runCommand(
        command
    ) {


        if (
            command ===
            "help"
        ) {

            consolePrint(
                "AVAILABLE COMMANDS:"
            );

            consolePrint(
                "help"
            );

            consolePrint(
                "whoami"
            );

            consolePrint(
                "system"
            );

            consolePrint(
                "scan"
            );

            consolePrint(
                "matrix"
            );

            consolePrint(
                "orbit"
            );

            consolePrint(
                "overdrive"
            );

            consolePrint(
                "shutdown"
            );

            return;
        }


        if (
            command ===
            "whoami"
        ) {

            consolePrint(
                "USER: NAZAM ROYIBA"
            );

            consolePrint(
                "ROLE: STUDENT // TKJ"
            );

            consolePrint(
                "SYSTEM: PERSONAL PORTFOLIO"
            );

            return;
        }


        if (
            command ===
            "system"
        ) {

            consolePrint(
                "SYSTEM: NAZAM.SYS"
            );

            consolePrint(
                "STATUS: ONLINE"
            );

            consolePrint(
                "INTERFACE: ACTIVE"
            );

            consolePrint(
                "SECURITY: VISITOR ACCESS"
            );

            return;
        }


        if (
            command ===
            "scan"
        ) {

            consolePrint(
                "SCANNING PORTFOLIO..."
            );


            setTimeout(() => {

                consolePrint(
                    "NAVIGATION: OK"
                );

            }, 250);


            setTimeout(() => {

                consolePrint(
                    "EDUCATION: OK"
                );

            }, 500);


            setTimeout(() => {

                consolePrint(
                    "ACHIEVEMENTS: OK"
                );

            }, 750);


            setTimeout(() => {

                consolePrint(
                    "VISUAL ENGINE: OK"
                );

            }, 1000);


            return;
        }


        if (
            command ===
            "matrix"
        ) {

            consolePrint(
                "VISUAL MATRIX ACTIVATED."
            );

            scanMode();

            return;
        }


        if (
            command ===
            "orbit"
        ) {

            consolePrint(
                "ORBITAL PARTICLE SYSTEM DEPLOYED."
            );

            particleBurst(
                window.innerWidth / 2,
                window.innerHeight / 2,
                35
            );

            return;
        }


        if (
            command ===
            "overdrive"
        ) {

            consolePrint(
                "OVERDRIVE MODE ACTIVATED."
            );

            activateOverdrive();

            return;
        }


        if (
            command ===
            "shutdown"
        ) {

            consolePrint(
                "TERMINAL CONNECTION CLOSED."
            );


            setTimeout(
                closeConsole,
                500
            );


            return;
        }


        consolePrint(
            'UNKNOWN COMMAND. TYPE "help".'
        );

    }


    /* =====================================================
       PARTICLE BURST
       ===================================================== */

    function particleBurst(
        x,
        y,
        amount = 20
    ) {


        for (
            let i = 0;
            i < amount;
            i++
        ) {


            const particle =
                document.createElement(
                    "div"
                );


            particle.className =
                "zx-particle";


            particle.style.left =
                x + "px";


            particle.style.top =
                y + "px";


            const angle =
                Math.random() *
                Math.PI *
                2;


            const distance =
                30 +
                Math.random() *
                150;


            particle.style.setProperty(
                "--zx-px",
                Math.cos(angle) *
                distance +
                "px"
            );


            particle.style.setProperty(
                "--zx-py",
                Math.sin(angle) *
                distance +
                "px"
            );


            document.body.appendChild(
                particle
            );


            setTimeout(() => {

                particle.remove();

            }, 800);

        }

    }


    /* =====================================================
       11 — OVERDRIVE
       ===================================================== */

    const overdrive =
        createElement(
            "zx-overdrive-overlay"
        );


    function activateOverdrive() {


        overdrive.classList.add(
            "zx-overdrive-active"
        );


        glitchEffect();

        scanMode();


        particleBurst(
            window.innerWidth / 2,
            window.innerHeight / 2,
            70
        );


        showMessage(
            "OVERDRIVE MODE ACTIVATED"
        );


        setTimeout(() => {

            overdrive.classList.remove(
                "zx-overdrive-active"
            );

        }, 6000);

    }


    /* =====================================================
       12 — DYNAMIC WORLD
       ===================================================== */

    let previousScroll =
        window.scrollY;

    let previousTime =
        performance.now();


    window.addEventListener(
        "scroll",
        () => {


            const now =
                performance.now();


            const currentScroll =
                window.scrollY;


            const distance =
                Math.abs(
                    currentScroll -
                    previousScroll
                );


            const time =
                Math.max(
                    now -
                    previousTime,
                    1
                );


            const velocity =
                Math.min(
                    100,
                    Math.round(
                        (
                            distance /
                            time
                        ) * 12
                    )
                );


            const maxScroll =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;


            const percentage =
                maxScroll > 0
                    ? Math.round(
                        (
                            currentScroll /
                            maxScroll
                        ) * 100
                    )
                    : 0;


            const speed =
                document.getElementById(
                    "zx-speed"
                );


            const speedBar =
                document.getElementById(
                    "zx-speed-bar"
                );


            const scroll =
                document.getElementById(
                    "zx-scroll"
                );


            const scrollBar =
                document.getElementById(
                    "zx-scroll-bar"
                );


            const activity =
                document.getElementById(
                    "zx-activity"
                );


            if (speed)
                speed.textContent =
                    velocity + "%";


            if (speedBar)
                speedBar.style.width =
                    velocity + "%";


            if (scroll)
                scroll.textContent =
                    percentage + "%";


            if (scrollBar)
                scrollBar.style.width =
                    percentage + "%";


            if (
                velocity > 60
            ) {

                if (activity)
                    activity.textContent =
                        "HIGH VELOCITY";


                showMessage(
                    "HIGH VELOCITY DETECTED"
                );

            } else {

                if (activity)
                    activity.textContent =
                        "NORMAL";

            }


            if (
                percentage >= 99
            ) {

                showMessage(
                    "END OF SYSTEM REACHED"
                );

            }


            previousScroll =
                currentScroll;

            previousTime =
                now;

        },
        {
            passive: true
        }
    );


    /* =====================================================
       MOUSE PARTICLES
       ===================================================== */

    let mouseX = 0;

    let mouseY = 0;

    let oldX = 0;

    let oldY = 0;


    document.addEventListener(
        "mousemove",
        (event) => {


            mouseX =
                event.clientX;


            mouseY =
                event.clientY;


            const dx =
                mouseX -
                oldX;


            const dy =
                mouseY -
                oldY;


            const speed =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                speed > 50 &&
                Math.random() > .75
            ) {

                particleBurst(
                    mouseX,
                    mouseY,
                    2
                );

            }


            oldX =
                mouseX;


            oldY =
                mouseY;

        }
    );


    /* =====================================================
       HOVER REACTION
       ===================================================== */

    document.querySelectorAll(
        ".photo-frame"
    ).forEach(
        element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    showMessage(
                        "VISUAL TARGET DETECTED"
                    );

                }
            );

        }
    );


    document.querySelectorAll(
        ".achievement-item"
    ).forEach(
        element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    showMessage(
                        "ACHIEVEMENT DATABASE ACCESSED"
                    );

                }
            );

        }
    );


    document.querySelectorAll(
        ".timeline-item"
    ).forEach(
        element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    showMessage(
                        "TIMELINE NODE ACCESSED"
                    );

                }
            );

        }
    );


    /* =====================================================
       IDLE SYSTEM
       ===================================================== */

    let idleTimer;


    function resetIdle() {


        clearTimeout(
            idleTimer
        );


        const status =
            document.getElementById(
                "zx-status"
            );


        if (status) {

            status.textContent =
                "ONLINE";

        }


        idleTimer =
            setTimeout(() => {


                if (status) {

                    status.textContent =
                        "MONITORING";

                }


                showMessage(
                    "USER IDLE // SYSTEM MONITORING"
                );


            }, 8000);

    }


    [
        "mousemove",
        "keydown",
        "scroll",
        "click"
    ].forEach(
        eventName => {

            document.addEventListener(
                eventName,
                resetIdle,
                {
                    passive: true
                }
            );

        }
    );


    resetIdle();


})();