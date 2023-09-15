const myImage = document.getElementById("pillar");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./images/cater1.png") {
    myImage.setAttribute("src", "./images/cater2.png");
  } else {
    myImage.setAttribute("src", "./images/cater1.png");
  }
};

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

// function setUserName() {
//     const myName = prompt("Please enter your name.");
//     if (!myName) {
//       setUserName();
//     } else {
//       localStorage.setItem("name", myName);
//       myHeading.textContent = `Mozilla is cool, ${myName}`;
//     }
// }  

// // if (!localStorage.getItem("name")) {
// //     setUserName();
// //   } else {
// //     const storedName = localStorage.getItem("name");
// //     myHeading.textContent = `Mozilla is cool, ${storedName}`;
// //   }

// myButton.onclick = () => {
//     setUserName();
// };