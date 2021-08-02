class Activity{
    constructor(category, description, minutes, seconds){
        this.category = category;
        this.description = description;
        this.minutes = minutes;
        this.seconds = seconds;
        this.completed = false;
        this.id = `ID${Date.now()}`;
        this.running = false
    }

    startTimer(){
        if(this.running){
            return;
        }
        this.running = true;
        var seconds = this.seconds;
        var minutes = this.minutes;
        var parsedTime;
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
                  countdownText.innerText = (`00:00`);
                  self.markComplete()
                  document.querySelector("#startTimerButton").innerText = 'Complete!'
                  return
                }
            }
        }, 1000)
      }

    markComplete(){

    }
    saveToStorage(){

    }

    parseTime(){

    }
}
