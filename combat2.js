const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const battleBackgroundImg = new Image();
battleBackgroundImg.src = "./img/battleBg.png";

const battleBackground = new Sprite({
	position: {
		x: 0,
		y: 0,
	},
	image: battleBackgroundImg,
	scale: 1,
});

function findTrueAnswer(object) {
	return Object.keys(object).find((key) => object[key] === true);
}

let enemy;
let player;
let renderedSprites;
let questionQueue = [questions.q1, questions.q2, questions.q3, questions.q4];
let musicPlayed = false;

function bindButtonListeners() {
	document.querySelectorAll("button").forEach((button) => {
		button.addEventListener("click", (e) => {
			// 答對->攻擊
			if (questionQueue[0].options[e.currentTarget.innerHTML]) {
				if (!musicPlayed) {
					musicPlayed = true;
					audio.battle.play();
				}
				document.querySelector("#dialogueBox").style.color = "green";
				document.querySelector("#dialogueBox").innerHTML =
					"Congrats! You're right";
				const randomAttack =
					player.attacks[Math.floor(Math.random() * player.attacks.length)];
				player.attack({
					attack: randomAttack,
					recipient: enemy,
					renderedSprites,
				});

				// 勝利跳轉頁面
				if (enemy.health === 0) {
					audio.battle.stop();
					audio.victory.play();
					document.querySelector("#dialogueBox").innerHTML =
						"Congrats! You're right<br>You will be sent to next challenge in few seconds ...";
					setTimeout(function () {
						window.location.href = "index.html"; // 3 秒後跳轉到指定頁面
					}, 3000);
				}

				// 刷新題目
				document.querySelector("#options-container").innerHTML = ""; //清空container
				questionQueue.shift();
				document.querySelector(
					"#question"
				).innerHTML = `${questionQueue[0].name}<br>${questionQueue[0].description}`;
				Object.keys(questionQueue[0].options).forEach(function (option) {
					const button = document.createElement("button");
					button.innerHTML = option;
					document.querySelector("#options-container").append(button);
				});

				// 為新按鈕綁定事件
				bindButtonListeners();
			}
			// 答錯->被攻擊
			else {
				document.querySelector("#dialogueBox").style.color = "red";
				document.querySelector(
					"#dialogueBox"
				).innerHTML = `You are wrong! The correct answer is ${findTrueAnswer(
					questionQueue[0].options
				)}`;
				const randomAttack =
					enemy.attacks[Math.floor(Math.random() * enemy.attacks.length)];
				enemy.attack({
					attack: randomAttack,
					recipient: player,
					renderedSprites,
				});

				// 失敗刷新頁面重新挑戰
				if (player.health === 0) {
					audio.lose.play();
					setTimeout(function () {
						location.reload(); // 3 秒後刷新頁面
					}, 3000);
				}

				// 刷新題目
				document.querySelector("#options-container").innerHTML = ""; //清空 container
				questionQueue.push(questionQueue.shift());
				document.querySelector(
					"#question"
				).innerHTML = `${questionQueue[0].name}<br>${questionQueue[0].description}`;
				Object.keys(questionQueue[0].options).forEach(function (option) {
					const button = document.createElement("button");
					button.innerHTML = option;
					document.querySelector("#options-container").append(button);
				});

				// 為新按鈕綁定事件
				bindButtonListeners();
			}
		});
	});
}

function initBattle() {
	enemy = new Character(characters.alien);
	// TODO 變性別
	player = new Character(characters.male);
	renderedSprites = [enemy, player];

	// 刷新第一題
	document.querySelector(
		"#question"
	).innerHTML = `${questionQueue[0].name}<br>${questionQueue[0].description}`;
	Object.keys(questionQueue[0].options).forEach(function (option) {
		const button = document.createElement("button");
		button.innerHTML = option;
		document.querySelector("#options-container").append(button);
	});
	// 綁定初始按鈕的事件監聽器
	bindButtonListeners();
}

function animateBattle() {
	window.requestAnimationFrame(animateBattle);
	battleBackground.draw();
	renderedSprites.forEach((sprite) => {
		sprite.draw();
	});
}
initBattle();
animateBattle();
