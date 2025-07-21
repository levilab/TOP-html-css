const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";

link.href = "https://developer.mozilla.org";

link.addEventListener('click',function(event) {
    console.log('clicked');
    event.preventDefault();
});

const sect = document.querySelector("section");

const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride";

sect.appendChild(para)

const text = document.createTextNode(  " — the premier source for web development knowledge.",
);

const joinText = document.querySelector("p");
joinText.appendChild(text)

sect.appendChild(joinText)

para.setAttribute("class","highlight");