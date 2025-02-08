let steps = ["intro", "event-2019", "event-2021", "event-2022", "love-letter", "valentine"];
let currentStep = 0;

const sectionImages = {
    "intro": "IMG_7933.PNG",
    "event-2019": "IMG_5238.JPG",
    "event-2021": "IMG_4851.jpg",
    "event-2022": "1c1deef9-70d6-43eb-938e-bde80f5cad49.JPG",
    "love-letter": "pic3.jpg",
    "valentine": "IMG_3600.HEIC"
};

function nextStep(nextId) {
    document.getElementById(steps[currentStep]).classList.remove("active");
    currentStep++;
    document.getElementById(nextId).classList.add("active");

    document.getElementById("section-image").src = sectionImages[nextId];
}

function yesAnswer() {
    document.getElementById("valentine").classList.remove("active");

    let finalContainer = document.createElement("div");
    finalContainer.classList.add("final-container");

    let loveMessage = document.createElement("div");
    loveMessage.classList.add("love-message");
    loveMessage.innerHTML = "<h1>I LOVE YOU AND I ALWAYS WILL ❤️</h1>";

    let loveImage = document.createElement("img");
    loveImage.src = "love-image.jpg"; 
    loveImage.classList.add("love-image");

    finalContainer.appendChild(loveMessage);
    finalContainer.appendChild(loveImage);
    document.body.appendChild(finalContainer);

    // Generate floating hearts
    let heartsContainer = document.createElement("div");
    heartsContainer.classList.add("hearts-container");
    document.body.appendChild(heartsContainer);

    for (let i = 0; i < 50; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        heartsContainer.appendChild(heart);
    }
}

// Autoplay music as soon as the page loads
window.addEventListener("load", () => {
    let music = document.getElementById("bg-music");
    music.volume = 0.5; // Set a reasonable volume level
    music.play().catch(error => {
        console.log("Autoplay blocked. User must interact first.", error);
    });
});

// Initialize first section
document.getElementById("intro").classList.add("active");

// Add CSS for floating hearts dynamically
let heartStyles = document.createElement("style");
heartStyles.innerHTML = `
    .hearts-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        overflow: hidden;
    }
    .heart {
        position: absolute;
        bottom: -10px;
        width: 20px;
        height: 20px;
        background-color: red;
        clip-path: polygon(50% 0%, 100% 40%, 80% 100%, 50% 80%, 20% 100%, 0% 40%);
        animation: floatUp 5s linear infinite;
    }
    @keyframes floatUp {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-100vh); opacity: 0; }
    }
`;
document.head.appendChild(heartStyles);


