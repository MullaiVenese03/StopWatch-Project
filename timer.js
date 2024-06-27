const input = document.getElementById('input')
const timer = document.getElementById('timer')
const total = document.getElementById('total')
const progressBar = document.getElementById('progress-Bar')

let interval
let currVal
let totalVal

function handleChange(event) {
    clearInterval(interval)             // This is used to clear the previous operation of setinterval running in the browser 
    total.innerText = event.target.value
    timer.innerText = event.target.value
    currVal = event.target.value
    totalVal = event.target.value

    progressBar.style.width = '100%'            // This is used to assign the color bar upto full to start the timer in first when the number is entered  

    interval = setInterval (()=> {
        currVal--
        progressBar.style.width = `${(currVal/totalVal)*100}%`                  // This $ is used to set an operation in the string using operand whit the help od " ` " is symbol 
        if (currVal < 0) {
            alert("Time Is Up!")
            clearInterval(interval)
        } else {
            timer.innerText = currVal
        }
    }, 1000)
}

input.addEventListener('change',handleChange)