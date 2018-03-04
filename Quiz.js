var yourPoints = 0;
var pointsLine = document.querySelector(".user_score");
var chooseAnswer = document.querySelectorAll("input[type=radio]");

pointsLine.innerHTML = yourPoints;

function addPoints() {
	
	yourPoints = 0;
	
	for (var i = 0; i < chooseAnswer.length; i++) {
		if (chooseAnswer[i].classList.contains("true") && chooseAnswer[i].checked) {
			yourPoints += 1;
		}
	}
	
	pointsLine.innerHTML = yourPoints;
}

function resetPoints() {
	
	yourPoints = 0;
	
	for (var i = 0; i < chooseAnswer.length; i++) {
		chooseAnswer[i].checked = false;
	}
	
	pointsLine.innerHTML = yourPoints;
}