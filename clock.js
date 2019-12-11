    
    //------------------------- THE CLOCK!!!!! -------------------------
    //other functions were somehow conflicting with this one (new file).
    function displayTime(){
        var mydate = new Date();
        var year = mydate.getFullYear();
            if(year < 1000){
                year += 1900
            }
            var day = mydate.getDay();
            var month = mydate.getMonth();
            var daym = mydate.getDate();
            var dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
            var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var date = dayArray[day] + " " + daym + " " + monthArray[month] + " " + year //string display of complete date

            var currentTime = new Date();

            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();
            var seconds = currentTime.getSeconds();
            var time = hours + ":" + minutes + ":" + seconds //string display of complete time



            if (hours === 24) {hours = 0;}
            else if (hours > 12) {hours = hours - 0;}
            if (hours < 10) {hours = "0" + hours;}
            if (minutes < 10) {minutes = "0" + minutes;}
            if (seconds < 10) {seconds = "0" + seconds;}

            var myClock = document.getElementById("time-display");
            myClock.textContent = "" + date + " | " + time
            myClock.innerText = "" + date + " | " + time

            setTimeout("displayTime()", 1000);
    }

    //calling the clock function so that it continuously updates the display on-screen
    displayTime();