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

    startTimer(){
        if(this.running){
            return;
        }
        this.running = true;
        var seconds = this.seconds;
        var minutes = this.minutes;
        var self = this;
        var interval = setInterval(function(){
            console.log(minutes+" " + seconds);
            // document.querySelector("#timer").innerHTML = minute + ":" + seconds;
            seconds--;
            if (seconds == 0){
                minutes--;
                seconds = 60;
                if(minutes == -1){
                    clearInterval(interval);
                    self.markComplete()
                    return ""
                    // document.querySelector("#timer").innerHTML = 'Complete!'
                }
            }
        }, 1000) //run through the setInterval function every 1000 milliseconds


    }
    markComplete(){
        
        console.log("timer complete")
    }
    saveToStorage(){

    }

    parseTime(){
        
    }

}
