var submitForm = document.querySelector(".activity-button");
var formView = document.querySelector("#formView");
var timerView = document.querySelector("#timerView");
var activityInput = document.querySelector(".text-field-long");
var timeInput = document.querySelector(".time-inputs-sections")
var categoryName = document.querySelector(".category-name");
var leftSectionHeader = document.querySelector("#left-section-header")

submitForm.addEventListener("click", submitActivity);

function switchLeftDisplay(){
   timerView.classList.toggle("hidden");
   formView.classList.toggle("hidden");
}

function submitActivity(event) {
  event.preventDefault();
  switchLeftDisplay();
  leftSectionHeader.innerText = "Current Activity";
  var categoryChoice = document.querySelector('input[name="activity_categories"]:checked');
  if (categoryChoice.value === "study") {
    categoryName.innerText = "Study";
  } if (categoryChoice.value === "meditate") {
    categoryName.innerText = "Meditate";
  } if (categoryChoice.value === "exercise") {
    categoryName.innerText = "Exercise";
  }
}
