let messages = [
    "Hey 💖",
    "I have something to tell you 😊",
    "You are very special 🌸",
    "Look at this ❤️",
    "One more 🥰",
    "This is my favorite 💕"
];

let photos = [
    "",
    "",
    "",
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg"
];

let index = 0;

function next() {
    index++;

    if (index < messages.length) {
        document.getElementById("text").innerText = messages[index];

        if (photos[index] !== "") {
            document.getElementById("photo").style.display = "block";
            document.getElementById("photo").src = photos[index];
        } else {
            document.getElementById("photo").style.display = "none";
        }
    }
}
let messages = [
    "Hey 💖",
    "I have something to tell you 😊",
    "You are very special 🌸",
    "Look at this ❤️",
    "One more 🥰",
    "This is my favorite 💕"
];

let photos = [
    "",
    "",
    "",
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg"
];

let index = 0;

function next() {
    index++;

    if (index < messages.length) {
        document.getElementById("text").innerText = messages[index];

        if (photos[index] !== "") {
            document.getElementById("photo").style.display = "block";
            document.getElementById("photo").src = photos[index];
        } else {
            document.getElementById("photo").style.display = "none";
        }
    }
}

function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    const colors = ["#ff4d6d", "#ffafcc", "#ffd166", "#a0c4ff", "#cdb4db"];
    balloon.style.background = colors[Math.floor(Math.random() * colors.length)];

    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = 5 + Math.random() * 5 + "s";

    balloon.addEventListener("click", () => {
        balloon.classList.add("pop");
        setTimeout(() => balloon.remove(), 300);
    });

    document.getElementById("balloons").appendChild(balloon);

    setTimeout(() => balloon.remove(), 10000);
}

setInterval(createBalloon, 600);

