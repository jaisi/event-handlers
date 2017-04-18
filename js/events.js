console.log("i am here");

var output = document.getElementsByClassName("article-section");

for(var i=0; i<output.length;i++){
	output.item(i).addEventListener("click", handleSectionClick);
}

function handleSectionClick(event){
	var elementText = event.target.innerHTML;
	outputTarget = document.getElementById("output-target");
	outputTarget.innerHTML = "You clicked on the "+elementText+ " section";
}

var h1 = document.getElementById("page-title");
h1.addEventListener("mouseover", handleHeaderMouseOver);
h1.addEventListener("mouseout", handleHeaderMouseOut);


function handleHeaderMouseOver(event){
	outputTarget = document.getElementById("output-target");
	outputTarget.innerHTML = "you moved your mouse over the header";
}

function handleHeaderMouseOut(event){
	outputTarget = document.getElementById("output-target");
	outputTarget.innerHTML = "you left me!!!";
}


var input = document.getElementById("keypress-input");
input.addEventListener("keyup", handleKeypress);

function handleKeypress(event){
	outputTarget = document.getElementById("output-target");
	outputTarget.innerHTML = event.target.value;
}

var color = document.getElementById("add-color");
color.addEventListener("click", handleColor);

var hulkify = document.getElementById("make-large");
hulkify.addEventListener("click", handleHulkify);

var border = document.getElementById("add-border");
border.addEventListener("click", handleCapture);

var round = document.getElementById("add-rounding");
round.addEventListener("click", handleRounded);

function handleColor(event){
	target = document.getElementById("guinea-pig");
	target.classList.toggle("blue");
}

function handleHulkify(event){
	target = document.getElementById("guinea-pig");
	target.classList.toggle("large");
}

function handleCapture(event){
	target = document.getElementById("guinea-pig");
	target.classList.toggle("bordered");
}

function handleRounded(event){
	target = document.getElementById("guinea-pig");
	target.classList.toggle("rounded");
}


