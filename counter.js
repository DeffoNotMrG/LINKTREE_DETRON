let counter = document.getElementById('jobCounter');
let currentCount = 0;
let targetCount = 34;  // Target number
let duration = 2000;  // Duration of the animation in milliseconds
let increment = targetCount / (duration / 50);  // Calculate the increment

let countJobs = setInterval(() => {
    currentCount += increment;
    if (currentCount >= targetCount) {
        clearInterval(countJobs);
        counter.textContent = targetCount;
    } else {
        counter.textContent = Math.floor(currentCount);
    }
}, 50);
