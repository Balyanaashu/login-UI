let user = document.querySelector(".username");
let pass = document.querySelector(".pass");

let form = document.querySelector(".main-form");

let p = document.createElement("p");
p.classList.add("error");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (user.value.trim() === "") {
    p.textContent = "Username required";
    user.parentElement.appendChild(p);
  } else if (pass.value.trim() === "") {
    p.textContent = "Password required";
    pass.parentElement.appendChild(p);
  } else {
    console.log("wellcome buddy");
    p.remove();
  }
});
