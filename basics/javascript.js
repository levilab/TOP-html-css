const container = document.querySelector("#container")
const content = document.createElement("div")
content.classList.add("content")
content.textContent = "text content added!"
content.style.color = "red";
container.appendChild(content)

const text = document.createElement("p") ;
text.textContent = "Hey I'm red!";
text.style.color = "red";

const subheader = document.createElement("h3");
subheader.textContent = "Hey I'm a blue h3!";
subheader.style.color = "blue"

container.appendChild(text)
container.appendChild(subheader)

const newDiv = document.createElement("div");
newDiv.setAttribute("style", "border: black ; background: pink")

const newDivHeader = document.createElement("h1");
newDivHeader.textContent = "I'm in a div";

const newDivText = document.createElement("p");
newDivText.textContent = "ME TOO!";

newDiv.appendChild(newDivHeader);
newDiv.appendChild(newDivText);
container.appendChild(newDiv);

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");
btn.onclick = alertFunction;

const btn1 = document.querySelector('#btn1');
// btn1.addEventListener("click", () => {
//     alert("Hello World");
// })
// btn1.addEventListener("click", alertFunction);
btn1.addEventListener("click", function(e) {
    console.log(e.target.style.background = "blue")
})

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});



