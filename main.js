var submitForm = document.querySelector(".activity-button");
var formView = document.querySelector("#formView");
var timerView = document.querySelector("#timerView");
var activityInput = document.querySelector(".text-field-long");
var timeInput = document.querySelector(".time-inputs-sections")
var categoryName = document.querySelector("#activityType");
var leftSectionHeader = document.querySelector("#left-section-header");
var minutesInput = document.querySelector(".minutes");
var secondsInput = document.querySelector(".seconds");
var activityCards = [];
var radios = document.querySelector('.radios');

radios.addEventListener('click', updateCategorySelection);
submitForm.addEventListener("click", submitActivity);

function switchLeftDisplay(){
   timerView.classList.toggle("hidden");
   formView.classList.toggle("hidden");
}

function submitActivity(event) {
  event.preventDefault();
  switchLeftDisplay();

  var categoryChoice = document.querySelector('input[name="activity_categories"]:checked');
  var newCard = new Activity(categoryChoice.value, activityInput.value, minutesInput.value, secondsInput.value);  

  leftSectionHeader.innerText = "Current Activity";
  categoryName.innerText = activityInput.value;  
  activityCards.push(newCard);
  // if (categoryChoice.value === "study") {
  //   categoryName.innerText = "Study";
  // } if (categoryChoice.value === "meditate") {
  //   categoryName.innerText = "Meditate";
  // } if (categoryChoice.value === "exercise") {
  //   categoryName.innerText = "Exercise";
  // }
}

function onlyNumberKey(evt) {
          
  // Only ASCII character in that range allowed
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
  return true;
}


function updateCategorySelection(){
    var selectedCategory = document.querySelector('input[name="activity_categories"]:checked');
    document.querySelector('#studyRadio').classList.remove("studyChecked")
    document.querySelector('#meditateRadio').classList.remove("meditateChecked")
    document.querySelector('#exerciseRadio').classList.remove("exerciseChecked")
    if (selectedCategory.value === "study"){
        document.querySelector('#studyRadio').classList.add("studyChecked")
    }
    else if (selectedCategory.value === "meditate"){
        document.querySelector('#meditateRadio').classList.add("meditateChecked")
    }
    else if (selectedCategory.value === "exercise"){
        document.querySelector('#exerciseRadio').classList.add("exerciseChecked")

    }

}