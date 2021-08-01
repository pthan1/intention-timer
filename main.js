var submitForm = document.querySelector(".activity-button");
var formView = document.querySelector("#formView");
var timerView = document.querySelector("#timerView");
var activityInput = document.querySelector(".text-field-long");
var timeInput = document.querySelector(".time-inputs-sections")
var categoryName = document.querySelector("#activityType");
var leftSectionHeader = document.querySelector("#left-section-header");
var minutesInput = document.querySelector(".minutes");
var secondsInput = document.querySelector(".seconds");
var categoryErrMsg = document.querySelector('.category-err-msg');
var studyBtn = document.getElementById('study');
var meditateBtn = document.getElementById('meditate');
var exerciseBtn = document.getElementById('exercise');
var activityCards = [];
var categorySelected;

submitForm.addEventListener("click", validate);

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
}

function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
  return true;
}


function validate(event) { 
  // var allCategoryBtns = document.querySelector('input[name="activity_categories"]');
  event.preventDefault();
  var flag = true;

  if ((!studyBtn.checked) && (!meditateBtn.checked) && (!exerciseBtn.checked)) {   //checking if the form is empty
    console.log('function');
    console.log('function');
    //displaying a message if the form is empty
    flag = false;
    categoryErrMsg.classList.remove('hidden');
    return;
  }

  // if()

  submitActivity(event);
  return flag;

}