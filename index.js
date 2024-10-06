let dialogueIndex = 0;
const dialogues = [
    "Ahoy, sailor! In the top-left corner of the game lobby, you’ll find Algae Island. This level is perfect for curious explorers who love the ocean and want to learn about the tiny plants that shape its health. If you enjoy discovering how nature works, this is the place for you!",
    "Located in the center-top of the game lobby, this island is for space enthusiasts who love science and exploration. Learn how NASA's instruments monitor our planet from above and track Earth's changes. Perfect for players excited by technology and discovery!",
    "Discover how tiny aerosols change our weather and the air we breathe! Perfect for curious players who want to explore the hidden forces of the atmosphere. Set sail for adventure in just one click, located in the top right corner!",
    "Ahoy, captain! Right here, your imagination takes control—just describe an idea, and watch as DALL·E brings it to life! Perfect for creative players who love turning visions into stunning pictures. Ready to create? Set sail!"
];


function updateDialogue() {
    document.getElementById("npcDialogue").textContent = dialogues[dialogueIndex];
    
    // 更新按鈕顯示狀態
    document.getElementById("nextButton").style.display = dialogueIndex === dialogues.length - 1 ? "none" : "inline-block";
    document.getElementById("prevButton").style.display = dialogueIndex === 0 ? "none" : "inline-block";
}

function nextDialogue() {
    if (dialogueIndex < dialogues.length - 1) {
        dialogueIndex++;
        updateDialogue();
    }
}

function prevDialogue() {
    if (dialogueIndex > 0) {
        dialogueIndex--;
        updateDialogue();
    }
}

// 初始加載對話
updateDialogue();