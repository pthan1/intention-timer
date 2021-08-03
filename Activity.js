class Activity{
    constructor(category, description, minutes, seconds){
        this.category = category;
        this.description = description;
        this.minutes = minutes;
        this.seconds = seconds;
        this.originalTime;
        this.completed = false;
        this.id = `ID${Date.now()}`;
        this.running = false
    }

    startTimer(){
        if (!this.running){
            this.originalTime = [this.minutes , this.seconds]
        }
        if (this.running){
            return;
        }
        this.running = true;
        var seconds = this.seconds;
        var minutes = this.minutes;
        var self = this;
        var interval = setInterval(function(){
            var parsedMinutes = minutes;
            var parsedSeconds = seconds;
            if (parsedMinutes.toString().length < 2){
                parsedMinutes = `0${parsedMinutes}`
            }
            if (parsedSeconds.toString().length < 2){
                parsedSeconds = `0${parsedSeconds}`
            }
            var parsedTime = `${parsedMinutes}:${parsedSeconds}`
            // if (seconds>0 && seconds<10){
            //     parsedSeconds = `0${seconds}`
            // }
            // if (minutes<10){
            //     parsedMinutes = `0${minutes}`
            // }
            // if (seconds === 0){
            //     parsedSeconds = `00`
            // }

            countdownText.innerText = (`${parsedTime}`);
            console.log(`${minutes}-${seconds}`)
            seconds--;
            
            if (seconds == -1){
                minutes--;
                seconds = 59;
                if(minutes == -1 && seconds == 59){
                  clearInterval(interval);
                  countdownText.innerText = (`Way to Slay!`);
                  self.markComplete()
                  document.querySelector("#startTimerButton").innerText = 'COMPLETE!'
                  return
                }
            }
        }, 1000)
      }

    markComplete(){
        this.completed = true;

        document.querySelector('.log-activity-button').classList.remove('hidden')
        document.querySelector('.log-activity-button').addEventListener('click', this.saveToStorage);

    }
    saveToStorage(){
        var objectToStore = newCard;
        var stringifiedObject = JSON.stringify(objectToStore);
        localStorage.setItem(`activity-${(localStorage.length+1)}`, stringifiedObject);
        noActivitiesLoggedStatement.classList.add('hidden');
        populatePastActivities()
        document.querySelector('.log-activity-button').classList.add('hidden')
    }

}
