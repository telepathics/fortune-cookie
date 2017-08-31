let cookie = document.querySelector("#cookie");
let exit = document.querySelector("#exit-trash");
let empty = document.querySelector("#empty-trash");
let oldfortunes = document.querySelector("#oldfortunes");
let trash = document.querySelector("#trash");
let fortune = document.querySelector("#fortune");
let fortunesarchive = [];
let oldfortunesarchive = [];

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

let newFortune = function () {
	let num = Math.floor(Math.random() * fortunesarchive.length);
	fortune.innerHTML = fortunesarchive[num];
}

fetch('https://api.myjson.com/bins/o7h1h').then(function (response) {
	return response.json();
}).then(function (data) {
	data.fortunes.forEach(function(ftn) {
		fortunesarchive.push(ftn);
	})
});
