var elements = ["One","Two", "Three"]
var pos = 1
console.log(elements.length);

for (var i = 0; i < elements.length; i++) {
	var newElement = document.createElement("div");
	newElement.id = i;
	newElement.className = "element deselected";
	newElement.innerHTML = elements[i];

	document.getElementById("container").appendChild(newElement);
}

document.getElementById("0").className = "element selected";

function outputKeypress(event) {
	var input = event.which || event.keyCode;

	console.log(input)

	var element = document.getElementById("keycode_return");

	if (input == 37) {
		/* Left */

	} else if (input == 38){
		/* Up */

		if (pos > 1){
			document.getElementById(pos-1).className = "element deselected"
			pos = pos - 1;
			document.getElementById(pos-1).className = "element selected"
			console.log(pos);
		}

	} else if (input == 39){
		/* Right */

	} else if (input == 40){
		/* Down */

		if (pos < elements.length){
			document.getElementById(pos-1).className = "element deselected"
			pos = pos + 1;
			document.getElementById(pos-1).className = "element selected"
			console.log(pos);
		}

	}
}

document.onkeydown = outputKeypress