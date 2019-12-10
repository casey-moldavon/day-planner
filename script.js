$(document).ready(function() {
    //used to start Jquery

    var currentTime = new Date();

    var hours = currentTime.getHours();
    console.log(hours)

    //------------------------- Current Time highlights -------------------------
    //this section contains the code directed at altering the color for each textarea...
    //based on if the current hour is equal to, before or after that of the textarea's.

    var nineAm = document.getElementById("9am-textarea"); //each works as text input and output
    var tenAm = document.getElementById("10am-textarea");
    var elevenAm = document.getElementById("11am-textarea");
    var twelvePm = document.getElementById("12pm-textarea");
    var onePm = document.getElementById("1pm-textarea");
    var twoPm = document.getElementById("2pm-textarea");
    var threePm = document.getElementById("3pm-textarea");
    var fourPm = document.getElementById("4pm-textarea");
    var fivePm = document.getElementById("5pm-textarea");

    var saveButtons = document.querySelectorAll(".button");


    //------------------------- conditionals (changes textarea coloring) -------------------------
    //color is set to ref in css
    //past hours are then colored gray (bellow) while hours that have not yet occured are colored green.

    function timeHighlight(){

        if (hours > 9) {nineAm.style.backgroundColor = "#c5c5c5"};
        if (hours < 9) {nineAm.style.backgroundColor = "#007000"};

        if (hours > 10) {tenAm.style.backgroundColor = "#c5c5c5"};
        if (hours < 10) {tenAm.style.backgroundColor = "#007000"};

        if (hours > 11) {elevenAm.style.backgroundColor = "#c5c5c5"};
        if (hours < 11) {elevenAm.style.backgroundColor = "#007000"};

        if (hours > 12) {twelvePm.style.backgroundColor = "#c5c5c5"};
        if (hours < 12) {twelvePm.style.backgroundColor = "#007000"};

        if (hours > 13) {onePm.style.backgroundColor = "#c5c5c5"};
        if (hours < 13) {onePm.style.backgroundColor = "#007000"};

        if (hours > 14) {twoPm.style.backgroundColor = "#c5c5c5"};
        if (hours < 14) {twoPm.style.backgroundColor = "#007000"};

        if (hours > 15) {threePm.style.backgroundColor = "#c5c5c5"};
        if (hours < 15) {threePm.style.backgroundColor = "#007000"};

        if (hours > 16) {fourPm.style.backgroundColor = "#c5c5c5"};
        if (hours < 16) {fourPm.style.backgroundColor = "#007000"};

        if (hours > 17) {fivePm.style.backgroundColor = "#c5c5c5"};
        if (hours < 17) {fivePm.style.backgroundColor = "#007000"};

    };

    timeHighlight();

    // function storeValue() {
    //     localStorage.setItem("9am-save", "nineAm");
    //     console.log();
    //     document.getElementById("9am-textarea").innerHTML = localStorage.getItem("9am-save");
    // };

    saveButtons = document.addEventListener("click", function(){
        localStorage.nineText = nineAm.value
        console.log(localStorage.nineText);


        document.getElementById("9am-textarea").innerHTML = localStorage.nineText;
    });


//     localStorage.value=yourValue;

// // Store
// localStorage.lastname = "Smith";
// // Retrieve
// document.getElementById("result").innerHTML = localStorage.lastname;



// saveButtons.addEventListener("click", updateOutput());

// nineAm.textContent = localStorage.getItem("content");
// nineAm.textContent.value = localStorage.getItem("content");

// function updateOutput() {

//     localStorage.setItem("content", nineAm.value);

//     nineAm.textContent = nineAm.value;
// }


// // Check browser support
// if (typeof(Storage) !== "undefined") {
//     // Store
//     localStorage.setItem("lastname", "Smith");
//     // Retrieve
// //     document.getElementById("9am-textarea").innerHTML = localStorage.getItem("");
// //   } else {
// //     document.getElementById("9am-textarea").innerHTML = "Sorry, your browser does not support Web Storage...";
// //   }






// var input_textarea = document.querySelector('.content-input');
// var output_div = document.querySelector('.content-output');
// var save_button = document.querySelector('.save-button');

// save_button.addEventListener('click', updateOutput);

// output_div.textContent = localStorage.getItem('content');
// input_textarea.value = localStorage.getItem('content');

// function updateOutput() {
// 	localStorage.setItem('content', input_textarea.value);
	
// 	output_div.textContent = input_textarea.value;
// }















});


// self note: create values for each textarea
// create variables calling each textarea and each connecting button
// add event listeners for each button to pull value from textarea
// save value to local storage
// display local storaged data in textarea (?)





    //if statement:
    //if container-#am/pm = current current hour, change textarea to red
    //$("9am-textarea").css({color: "red"});
    //personal note: possibly use military time to be more precise with conditionals
    //also change time-row font color to match the text box (personal extra feature)

    //possibly design feature: after saved to local stroage, all text that has been saved is made bold

        // if (hours > 9) {$("9am-textarea").css({"background-color": "red"})};
        // if (hours < 9) {$("9am-textarea").css({"background-color": "green"})};


