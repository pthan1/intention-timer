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
var descriptionErrMsg = document.querySelector('.desc-err-msg');
var timeErrMsg = document.querySelector('.time-err-msg');
var studyBtn = document.getElementById('study');
var meditateBtn = document.getElementById('meditate');
var exerciseBtn = document.getElementById('exercise');
var leftSection = document.querySelector('.left-section');
var activityCards = [];
var radios = document.querySelector('.radios');
var selectedCategory = document.querySelector('input[name="activity_categories"]:checked');
var categoryChoice2;
var startTimerBtn = document.querySelector('#startTimerButton');
var countdownText = document.querySelector('#countdownTimerText');
var newCard; 
var logActivityBtn = document.querySelector('.log-activity-button');
var myStorage = window.localStorage;
var noActivitiesLoggedStatement = document.getElementById('no-activities-logged');

radios.addEventListener('click', updateCategorySelection);
// logActivityBtn.addEventListener('click', newCard.saveToStorage);
//MOVED TO ACTIVITY.JS in MarkComplete method

submitForm.addEventListener("click", validate);
startTimerBtn.addEventListener("click", beginCountDown);

window.onload = function() {
  if (localStorage.length > 0) {
  noActivitiesLoggedStatement.classList.add('hidden');
  }
}

function beginCountDown() {
  categoryChoice2.startTimer();
}

function switchLeftDisplay(){
   timerView.classList.toggle("hidden");
   formView.classList.toggle("hidden");
}

function submitActivity(event) {
  event.preventDefault();
  switchLeftDisplay();
  var categoryChoice = document.querySelector('input[name="activity_categories"]:checked');
  newCard = new Activity(categoryChoice.value, activityInput.value, minutesInput.value, secondsInput.value);
  
  var parsedMinutes = minutesInput.value;
  var parsedSeconds = secondsInput.value;
    if (minutesInput.value.toString().length < 2){
        var parsedMinutes = `0${minutesInput.value}`
    }
    
    if (secondsInput.value.toString().length < 2){
        var parsedSeconds = `0${secondsInput.value}`
    }   
    if (!minutesInput.value){
        var parsedMinutes = "00"
    }
    if (!secondsInput.value){
        var parsedSeconds = "00"
    }


  
  countdownText.innerText = (`${parsedMinutes}:${parsedSeconds}`);
  categoryChoice2 = newCard;
  leftSectionHeader.innerText = "Current Activity";
  startTimerBtn.classList.add(`${categoryChoice.value}-start-button`);
  categoryName.innerText = activityInput.value;
  // activityCards.push(newCard);
}

function onlyNumberKey(evt) {
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
  return true;
}



function validate(event) {
    event.preventDefault();
    var flag = true;
    categoryErrMsg.classList.add('hidden');
    descriptionErrMsg.classList.add('hidden');
    timeErrMsg.classList.add('hidden');
    activityInput.style.cssText = "border-bottom: 1px solid #fff;";
    minutesInput.style.cssText = "border-bottom: 1px solid #fff";
    secondsInput.style.cssText = "border-bottom: 1px solid #fff";
    
    if ((!studyBtn.checked) && (!meditateBtn.checked) && (!exerciseBtn.checked)) {
        flag = false;
        categoryErrMsg.classList.remove('hidden');
    }
    
    if (activityInput.value === "") {
        flag = false;
        activityInput.style.cssText = "border-bottom: 1px solid #EFB7EC;";
        descriptionErrMsg.classList.remove('hidden');
    }
    
    if (minutesInput.value === "" && secondsInput.value === "") {
        flag = false;
        minutesInput.style.cssText = "border-bottom: 1px solid #EFB7EC"
        secondsInput.style.cssText = "border-bottom: 1px solid #EFB7EC"
        timeErrMsg.classList.remove('hidden');
    }
    
    if (flag === true) {
        submitActivity(event);}
        
        return flag;
}
    
function updateCategorySelection(){
    var selectedCategory = document.querySelector('input[name="activity_categories"]:checked');
    document.querySelector('#studyRadio').classList.remove("studyChecked")
    document.querySelector('#meditateRadio').classList.remove("meditateChecked")
    document.querySelector('#exerciseRadio').classList.remove("exerciseChecked")
    if(!selectedCategory){
        return;
    }
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

function populatePastActivities(){
  var pastActivityContainer = document.querySelector('#past-activities-container');
  pastActivityContainer.innerHTML = "";
  for (var i = 1; i < localStorage.length+1; i++){

            var activity = `activity-${i}`;
            var LSActivityNotParsed = localStorage.getItem(activity);
            var LSActivityObject = JSON.parse(LSActivityNotParsed);
            var HTMLPerObject = pastActivityHTML(LSActivityObject, i);
            // var pastActivityContainer = document.querySelector('.no-activities-view');
            pastActivityContainer.insertAdjacentHTML('afterbegin', HTMLPerObject);

            // console.log(HTMLPerObject)
            
        }
        
}

function pastActivityHTML(LSObject, position){
    return `
    <article id="PastActivityNum${position}" class="saved-activity-card-view">
        <h2 id="saved-activity-category-text">${LSObject.category}</h2>
        <p id="saved-activity-duration">${LSObject.originalTime}</p>
        <p id="saved-activity-input">${LSObject.description}</p>
        <div class="${LSObject.category}-activity-marker"></div>
    </article>
    `
}

populatePastActivities()


// MOVED TO Activity.js method
    // function setActivityCardIntoLS() {
    //   var objectToStore = newCard;
    //   console.log('after', objectToStore);
    //   var stringifiedObject = JSON.stringify(objectToStore);
    //   console.log('after stringify', stringifiedObject);
    //   localStorage.setItem(`${newCard.id}`, stringifiedObject);
    // }