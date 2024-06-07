// HOME
let homeScore = document.getElementById("home-score");
let homeBtn1 = document.getElementById("home-btn1");
let Hscore = 0;

function incrementOneHome() {
  Hscore += 1;
  homeScore.textContent = Hscore;
}

function incrementTwoHome() {
  Hscore += 2;
  homeScore.textContent = Hscore;
}

function incrementThreeHome() {
  Hscore += 3;
  homeScore.textContent = Hscore;
}

// GUEST
let guestScore = document.getElementById("guest-score");
let Gscore = 0;

function incrementOneGuest() {
  Gscore += 1;
  guestScore.textContent = Gscore;
}

function incrementTwoGuest() {
  Gscore += 2;
  guestScore.textContent = Gscore;
}

function incrementThreeGuest() {
  Gscore += 3;
  guestScore.textContent = Gscore;
}
