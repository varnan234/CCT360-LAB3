// CCT360 Lab 3 - The Power of Sequencing
// Same 3 pictures, but the order changes the story

// story A pictures and captions
var storyAImages = ["img1.jpg", "img2.jpg", "img3.jpg"];
var storyACaptions = [
  "The crew is relaxing on the ship at sunset while Brook plays music. Everything is calm and they are ready for their adventure.",
  "Then trouble shows up. Luffy has to face three admirals and the crew is in danger.",
  "They made it through! The whole crew has a big feast together to celebrate."
];

// story B pictures and captions (same pictures, different order)
var storyBImages = ["img3.jpg", "img1.jpg", "img2.jpg"];
var storyBCaptions = [
  "The whole crew is at the table eating and laughing. It looks like the best night ever.",
  "But the party ends and the ship sails off into the sunset. Everyone knows something is coming.",
  "Luffy ends up facing the admirals. He remembers the feast and that is what he is fighting for."
];

var stageNames = ["Beginning", "Middle", "End"];

// these change when the user clicks stuff
var currentImages = storyAImages;
var currentCaptions = storyACaptions;
var currentTitle = "Story A: The Adventure";
var position = 0;

// getting stuff from the html
var pic = document.getElementById("pic");
var title = document.getElementById("title");
var stage = document.getElementById("stage");
var caption = document.getElementById("caption");
var counter = document.getElementById("counter");
var nextBtn = document.getElementById("nextBtn");
var backBtn = document.getElementById("backBtn");
var storyABtn = document.getElementById("storyABtn");
var storyBBtn = document.getElementById("storyBBtn");

// shows the current picture and text
function showScene() {
  pic.src = currentImages[position];
  title.innerHTML = currentTitle;
  stage.innerHTML = stageNames[position];
  caption.innerHTML = currentCaptions[position];
  counter.innerHTML = (position + 1) + " of 3";

  // turn off the buttons at the start and end
  if (position == 0) {
    backBtn.disabled = true;
  } else {
    backBtn.disabled = false;
  }

  if (position == 2) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

function goNext() {
  if (position < 2) {
    position = position + 1;
    showScene();
  }
}

function goBack() {
  if (position > 0) {
    position = position - 1;
    showScene();
  }
}

function chooseStoryA() {
  currentImages = storyAImages;
  currentCaptions = storyACaptions;
  currentTitle = "Story A: The Adventure";
  position = 0;
  storyABtn.classList.add("selected");
  storyBBtn.classList.remove("selected");
  showScene();
}

function chooseStoryB() {
  currentImages = storyBImages;
  currentCaptions = storyBCaptions;
  currentTitle = "Story B: The Farewell";
  position = 0;
  storyBBtn.classList.add("selected");
  storyABtn.classList.remove("selected");
  showScene();
}

// click the picture to go to the next one
function clickPicture() {
  if (position == 2) {
    position = 0;
  } else {
    position = position + 1;
  }
  showScene();
}

// event listeners
nextBtn.addEventListener("click", goNext);
backBtn.addEventListener("click", goBack);
storyABtn.addEventListener("click", chooseStoryA);
storyBBtn.addEventListener("click", chooseStoryB);
pic.addEventListener("click", clickPicture);

// show the first picture when the page loads
showScene();
