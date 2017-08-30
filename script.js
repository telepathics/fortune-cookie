let cookie = document.querySelector("#cookie");
let exit = document.querySelector("#exit-trash");
let empty = document.querySelector("#empty-trash");
let oldfortunes = document.querySelector("#oldfortunes");
let trash = document.querySelector("#trash");
let fortune = document.querySelector("#fortune");

cookie.onclick = function () {
	oldfortunesarchive.push(fortune.innerText);
	newFortune();
	if (oldfortunesarchive.length >= 2 && oldfortunesarchive.length < 8) {
		trash.src = "./trash-one-third.png";
	} else if (oldfortunesarchive.length >=8 && oldfortunesarchive.length < 16) {
		trash.src = "./trash-two-thirds.png";
	} else if (oldfortunesarchive.length >= 16) {
		trash.src = "./trash-full.png";
	}
}

trash.onclick = function () {
	if (oldfortunesarchive.length <= 1) {
		let emptyTrash = document.createElement("div");
		emptyTrash.classList.add("trash-is-empty");
		emptyTrash.innerHTML = "trash is empty!";
		document.body.appendChild(emptyTrash);
		emptyTrash.style.opacity = "1";
		window.setTimeout(function (){
			emptyTrash.style.opacity = "0";
			window.setTimeout(function () {
				emptyTrash.remove();
			}, 500);
		}, 1500);
		return null;
	} else {
		for (let i = 0; i < oldfortunesarchive.length; i++) {
			if (oldfortunesarchive[i] != "") {
				d = document.createElement("div");
				d.classList.add("fortune");
				d.innerHTML = oldfortunesarchive[i];
				oldfortunes.appendChild(d);
			}
		}
		oldfortunes.style.zIndex = "1";
		oldfortunes.style.opacity = "1";
	}
}

empty.onclick = function () {
	oldfortunes.style.zIndex = "-1";
	oldfortunes.style.opacity = "0";
	
	let fortunes = document.querySelectorAll(".fortune");
	oldfortunesarchive = [];
	trash.src = "./trash-empty.png";
	trash.classList.add("empty");
	for (let i=0; i< fortunes.length; i++) {
		fortunes[i].remove();
	}
}

exit.onclick = function () {
	oldfortunes.style.zIndex = "-1";
	oldfortunes.style.opacity = "0";
}

let oldfortunesarchive = [];
let fortunesarchive = ["A friend asks only for your time not your money.", "Today it's up to you to create the peacefulness you long for.", "If you refuse to accept anything but the best, you very often get it.", "A smile is your passport into the hearts of others.", "A good way to keep healthy is to eat more Chinese food.", "Your high-minded principles spell success.", "Hard work pays off in the future, laziness pays off now.", "Change can hurt, but it leads a path to something better.", "Enjoy the good luck a companion brings you.", "People are naturally attracted to you.", "Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.", "A chance meeting opens new doors to success and friendship.", "You learn from your mistakes... You will learn a lot today.", "If you have something good in your life, don't let it go!", "What ever you're goal is in life, embrace it visualize it, and for it will be yours.", "Your shoes will make you happy today.", "You cannot love life until you live the life you love."]
let newFortune = function () {
	let num = Math.floor(Math.random() * fortunesarchive.length);
	fortune.innerHTML = fortunesarchive[num];
}
