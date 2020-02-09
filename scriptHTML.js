
window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");

  dogInput.addEventListener('click', () function(){
    sounds[0].currentTime = 0;
    sounds[0].play();
  });
});

function alertName() {
  var name = window.prompt("Enter your name: ");
  alert("Your name is " + name);
}

function titleButton() {
  var header = document.getElementById("myHeader1");
  if (header.innerHTML != "You are BUTIFUL!!!") {
    header.innerHTML = "You are BUTIFUL!!!"
    header.style = "color:#CAC911;"
  } else {
    header.innerHTML = "Remember to Shmile!!!"
    header.style = "color:black;"
  }
  document.getElementById("info1").style.display = "inline-block";
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('#openbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

/* For DOGGITAP!!! */
var countTaps = 0;
var loveLevel = 0;
function dogInput() {
  countTaps++;
  // DogLoveLevel increase by 0-9 %
  var increment = Math.floor(Math.random()*10);
  loveLevel+= increment;
  // Once you get past 100% the dog will speak
  if (increment >= 7 && loveLevel >= 100) {
    dogMessage();
  }
  document.getElementById("dogTapLabel").innerHTML =
  "You tapped the dog " + countTaps + " times!";
  document.getElementById("dogLoveLabel").innerHTML =
  "Woof! Woof! The dog's love level is at " + loveLevel + "%!";
}

function dogMessage() {
  // randNum to determine the message
  var randNum = Math.round(Math.random()*5);
  var message = "";
  switch (randNum) {
    case 0:
      message = "The dog just died for " +
      Math.round(Math.random()*1000)/1000 + " seconds from an orgasm."
      break;
    case 1:
      message = "\"PET ME MORE!!!\" says the doggi."
      break;
    case 2:
      message = "The doggi says, \"WOOF! WOOF! I wanna pee pee!\""
      break;
    case 3:
      message = "\"EEE EEE!!!\""
      break;
    case 4:
      message = "The doggi is staring into your soul.";
      break;
    default:
      message = "The dog stares contemptly.";
  }
  alert(message);
}

/* Calculator */
function calculator() {
  var num1 = parseInt(document.getElementById("num1"));
  var num2 = parseInt(document.getElementById("num1"));
  var op = $("input[name=op]:checked").val();

  if (op == "plus") {
    document.getElementById("calcAnswer").innerHTML = "Answer: " + (num1 + num2);
  }
  else if (op == "minus") {
    document.getElementById("calcAnswer").innerHTML = "Answer: " + (num1 - num2);
  }
  else if (op == "divide") {
    document.getElementById("calcAnswer").innerHTML = "Answer: " + (num1 / num2);
  }
  else if (op == "multiply") {
    document.getElementById("calcAnswer").innerHTML = "Answer: " + (num1 * num2);
  }
  else if (op == "modulus") {
    document.getElementById("calcAnswer").innerHTML = "Answer: " + (num1 % num2);
  }
}
