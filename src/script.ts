const toggleSwitch = <HTMLInputElement>(
	document.querySelector('input[type="checkbox"]')
);
const nav = <HTMLTableSectionElement>document.getElementById("nav");
const toggleIcon = <HTMLSpanElement>document.getElementById("toggle-icon");
const image1 = <HTMLImageElement>document.getElementById("image1");
const image2 = <HTMLImageElement>document.getElementById("image2");
const image3 = <HTMLImageElement>document.getElementById("image3");
const textBox = <HTMLDivElement>document.getElementById("text-box");

// Dark or Light Images
function imageMode(color: String) {
	image1.src = `img/undraw_proud_coder_${color}.svg`;
	image2.src = `img/undraw_feeling_proud_${color}.svg`;
	image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Dark Mode Styles
function darkMode() {
	nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
	textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
	toggleIcon.children[0].textContent = "Dark Mode";
	toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
	imageMode("dark");
}

// Light Mode Styles
function lightMode() {
	nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
	textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
	toggleIcon.children[0].textContent = "Light Mode";
	toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
	imageMode("light");
}

// Switch Theme Dynamically
function switchTheme(event: any) {
	if (event.target.checked) {
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.setItem("theme", "dark");
		darkMode();
	} else {
		document.documentElement.setAttribute("data-theme", "light");
		localStorage.setItem("theme", "light");
		lightMode();
	}
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
	document.documentElement.setAttribute("data-theme", currentTheme);

	if (currentTheme === "dark") {
		toggleSwitch.checked = true;
		darkMode();
	}
}
