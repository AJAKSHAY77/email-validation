

const btn = document.getElementById("btn");
 const outputsuccess = document.getElementById("succ"); 
//  btn = document.getElementById("form");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const mailinput = document.getElementById("mail").value;
  const pass = document.getElementById("password").value;
  

  if (mailinput.indexOf("@") === -1 || pass.length < 8) {
    outputsuccess.innerText = "invalid ";
  } else {
    outputsuccess.innerText = "valid";
  }
});

// const form = document.getElementById("form");
// const outputsuccess = document.getElementById("succ");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const mailinput = document.getElementById("mail").value;
//   const pass = document.getElementById("password").value;

//   if (mailinput.indexOf("@") === -1 || pass.length < 8) {
//     outputsuccess.innerText = "invalid";
//   } else {
//     outputsuccess.innerText = "valid";
//   }
// });




