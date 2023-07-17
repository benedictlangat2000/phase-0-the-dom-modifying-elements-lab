// Write your code here!
const element = document.getElementById("main");
element.style.height = "300px";
element.style.backgroundColor = "#27647B";
const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
  }
  
  element.append(ul);

  li.textContent = "Hi there!";
// => <li>Hi there!</li>
  console.log(li.textContent);
// => "Hi there!"

const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";
element.textContent = "You've changed what's on the screen!";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

element.className = "pet-listing dog";

element.classList.remove("dog");
element.classList.add("cat", "sale");

someElement.removeChild(someChildElement);
document.getElementsByTagName("ul")[0];
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);


// Create a new h1 element
const newHeader = document.createElement("h1");

// Set the id and text content of the new h1 element
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the new h1 element to the DOM
document.body.appendChild(newHeader);

// Add the line below to make the 'newHeader' variable accessible outside the file
window.newHeader = newHeader;
