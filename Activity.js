class Activity{
    constructor(category, description, minutes, seconds){
        this.category = category;
        this.description = description;
        this.minutes = minutes;
        this.seconds = seconds;
        this.completed = false;
        this.id = `ID${Date.now()}`;
        // this.countdownTimeInMS = (this.minutes*60000)+(this.seconds*1000);
        // this.duration = countdownTimeInMS/1000
        this.running = false
    }

    startTimer(event){
        if(this.running){
            return;
        }
        this.running = true;
        var seconds = this.seconds;
        var minutes = this.minutes;
        var self = this;
        var interval = setInterval(function(){
            seconds--;

            if (seconds == 0){
                minutes--;
                seconds = 60;
                if(minutes == -1 && seconds == 60){
                  clearInterval(interval);
                  countdownText.innerText = (`00:00`);
                    self.markComplete()
                    document.querySelector("#startTimerButton").innerText = 'Complete!'
                    return
                }
            }
            countdownText.innerText = (`${minutes}:${seconds}`);
            console.log((`${minutes}:${seconds}`));
        }, 1000)
      }

    markComplete(){

        console.log("timer complete")
    }
    saveToStorage(){

    }

    parseTime(){

    }

}
