// JavaScript for form submission response
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('responseMessage').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('responseMessage').classList.add('hidden');
    }, 3000);
});

// JavaScript to show current UTC time
function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(showTime, 1000);
