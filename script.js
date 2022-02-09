var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li_array=document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function toggleDone(event){
	this.classList.toggle("done");
}

function deleteListElement(event){
	var index=Array.from(ul.children).indexOf(this);
	ul.removeChild(ul.children[index-1]);
	this.remove();
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick=deleteListElement;
	ul.appendChild(btn);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



li_array.forEach(listElement => listElement.addEventListener('click',toggleDone));

li_array.forEach(listElement => listElement.insertAdjacentHTML('afterend',"<button> Delete </button>"));
var ulButtons=document.querySelectorAll("ul button");
ulButtons.forEach(listElement => listElement.addEventListener('click',deleteListElement));