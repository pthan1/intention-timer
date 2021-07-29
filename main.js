var submitForm = document.querySelector(".activity-button");
var formView = document.querySelector(".left-section");
var timerView = document.querySelector(".timer-container");
var activityInput = document.querySelector(".text-field-long");
var timeInput = document.querySelector(".time-inputs-sections")
var categoryName = document.querySelector(".category-name");

submitForm.addEventListener("click", submitActivity);


function submitActivity(event) {
  event.preventDefault();
  formView.classList.add("hidden");
  timerView.classList.remove("hidden");
  var categoryChoice = document.querySelector('input[name="activity_categories"]:checked');
  if (categoryChoice.value === "study") {
    categoryName.innerText = "Study";
  } if (categoryChoice.value === "meditate") {
    categoryName.innerText = "Meditate";
  } if (categoryChoice.value === "exercise")
    categoryName.innerText = "Exercise";

}
