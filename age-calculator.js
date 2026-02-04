const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let valid = true;

  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "This field is required";
      valid = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
    }
  });

  if (monthInp.value > 12) {
    monthInp.style.borderColor = "red";
    monthInp.parentElement.querySelector("small").innerText = "Invalid month";
    valid = false;
  }

  if (dayInp.value > 31) {
    dayInp.style.borderColor = "red";
    dayInp.parentElement.querySelector("small").innerText = "Invalid day";
    valid = false;
  }

  return valid;
}

function handleSubmit(e) {
  e.preventDefault();

  if (validate()) {
    if (dayInp.value > day) {
      day += months[month - 1];
      month--;
    }

    if (monthInp.value > month) {
      month += 12;
      year--;
    }

    dayOtp.innerHTML = day - dayInp.value;
    monthOtp.innerHTML = month - monthInp.value;
    yearOtp.innerHTML = year - yearInp.value;
  }
}
