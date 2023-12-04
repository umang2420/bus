function validbus() {

const start = document.getElementById("start").value;
const destination = document.getElementById("end").value;
const date = document.getElementById("date").value;

if (start === "" || destination === "") {
    alert("Please select a starting point and destination");
    return false;
}

if (date === "") {
    alert("Please select a date");
    return false;
}

const selectedDate = new Date(date);
const currentDate = new Date();

if (selectedDate < currentDate) {
    alert("You cannot select a previous date for the ticket.");
    return false;
}

const currentYear = currentDate.getFullYear();
const selectedYear = selectedDate.getFullYear();

if (selectedYear < currentYear) {
    alert("You cannot select a previous year for the ticket.");
    return false;
}

const existingTrips = JSON.parse(localStorage.getItem("trips") || "[]");
const newTrip = { start, destination, date };

if (existingTrips.some((trip) => trip.start === newTrip.start && trip.destination === newTrip.destination && trip.date === newTrip.date)) {
    alert("You cannot select the same starting point, destination point, and date again.");
    return false;
}

    existingTrips.push(newTrip);
localStorage.setItem("trips", JSON.stringify(existingTrips));

    alert('Welcome');
    window.location.href="./list.html";
}
