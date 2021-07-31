var submitForm = document.querySelector(".activity-button");
var formView = document.querySelector("#formView");
var timerView = document.querySelector("#timerView");
var activityInput = document.querySelector(".text-field-long");
var timeInput = document.querySelector(".time-inputs-sections")
var categoryName = document.querySelector("#activityType");
var leftSectionHeader = document.querySelector("#left-section-header");
var minutesInput = document.querySelector(".minutes");
var secondsInput = document.querySelector(".seconds");

submitForm.addEventListener("click", submitActivity);

function switchLeftDisplay(){
   timerView.classList.toggle("hidden");
   formView.classList.toggle("hidden");
}

function submitActivity(event) {
  event.preventDefault();
  switchLeftDisplay();
  
  var categoryChoice = document.querySelector('input[name="activity_categories"]:checked');

  leftSectionHeader.innerText = "Current Activity";
  categoryName.innerText = activityInput.value;  

  // if (categoryChoice.value === "study") {
  //   categoryName.innerText = "Study";
  // } if (categoryChoice.value === "meditate") {
  //   categoryName.innerText = "Meditate";
  // } if (categoryChoice.value === "exercise") {
  //   categoryName.innerText = "Exercise";
  // }
}
