//console.log(document);

//const heading = document.querySelector("h1");
//console.log(heading);

const element1 = document.querySelector(".value");
console.log(element1);

const element2 = document.querySelector("button");
console.log(element2);

const element3 = document.querySelector(".area");
console.log(element3);

const element4 = document.querySelector(".stat div");
console.log(element4);

const element5 = document.querySelector(".hello");
console.log(element5);

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
/*for (let element of heading3List.values()) {
  console.log(element);
}*/
for (let i = 0; i < heading3List.length; i++) {
    const element = heading3List[i];
    console.log(element);
  }

const ratings = document.querySelectorAll(".rating .value");

/*for (let element of ratings.values()) {
    console.log(ratings);
}*/

for (let i = 0; i < ratings.length; i++) {
    const element = ratings[i];
    console.log(element);
}

// Get a list of descriptions
const list = document.querySelectorAll(".description");

// Log them to the console
Array.prototype.forEach.call(list, function (element) {
  console.log(element);
});
