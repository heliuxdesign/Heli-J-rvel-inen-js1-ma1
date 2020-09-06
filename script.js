const cats = [
	{
		name: "Blob",
		age: 10,
	},
	{
		name: "Harold",
	},
	{
		name: "Blurt",
		age: 21,
	},
];

// Queston 1

const cat = {
	complain: function () {
		console.log("Meow!");
	},
};

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for (const paragraph of paragraphs) {
	paragraph.style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector("div.results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

function logNames(list) {
	for (const o of list) {
		console.log(o.name);
	}
}
logNames(cats);

// Question 8

function createCats(cats) {
	let html = "";
	for (const cat of cats) {
		let age = cat.hasOwnProperty("age") ? cat.age : "Age unknown";
		html += "<div><h5>" + cat.name + "</h5>" + "<p>" + age + "</p></div>";
	}
	return html;
}

const catsHtml = createCats(cats);

document.querySelector("div.cat-container").innerHTML = catsHtml;
