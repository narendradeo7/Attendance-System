console.log("scanner js is working");
// getting current date for timestamp 
var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
console.log(dateTime);


const scanner = new Html5QrcodeScanner('reader', {
    // Scanner will be initialized in DOM inside element with id of 'reader'
    qrbox: {
        width: 250,
        height: 250,   
    }, // Sets dimensions of scanning box (set relative to reader element width)
    fps: 20, // Frames per second to attempt a scan
    pausedText: 'Attendance Marked ✔',

    
    

});


scanner.render(success, error);
// Starts scanner

function success(result) {


// for sending data to the google sheets 
// adding sheetname to the data 
var sheetname="bain";
const data = { stamptime:dateTime, enrollment: "'"+result ,sheetn:sheetname};
console.log(data);
const url = "https://script.google.com/macros/s/AKfycbxhAF8k3jNfG-K22CdyzNadX1BfDSvk5ddcfcU-Ueg9OEAJeP7oOE1jS0NG_22JuRjX/exec";
const options = {
  method: "POST",
//   allow no cors 
  mode: 'no-cors',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
};
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));




    // playing a beep sound 

    var beepSound = new Audio("../music/beep.mp3");
    beepSound.play();


    // beep sound ends 

// Pause the scanner for 2 seconds
scanner.pause();
setTimeout(function () {
  scanner.resume();
}, 2000);











    // document.getElementById('result').innerHTML = `
    // <h2>Success!</h2>
    // <p><a href="${result}">${result}</a></p>
    // `;
    // console.log(result);


    // // Prints result as a link inside result element

    // scanner.clear();
    // // Clears scanning instance

    // document.getElementById('reader').remove();
    // // Removes reader element from DOM since no longer needed

}

function error(err) {
    console.error(err);
    // Prints any errors to the console
}


