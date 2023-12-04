const maxSeats = 4;
const seats = document.querySelectorAll('.seat-button');
let total = 0; 
function updateTotal() {
    let selectedCount = 0;

    seats.forEach(seat => {
    if (seat.classList.contains('selected')) {
    selectedCount++;
    }
});

if(selectedCount > maxSeats) {
    seats.forEach(seat => {
    seat.classList.remove('selected'); 
    });

    alert("You can only select "+ maxSeats +" seats");
    return;
}
if (selectedCount < 2) {
    alert("Please select at least 2 seats");
    return;
  }

total = 0;

seats.forEach(seat => {
    if (seat.classList.contains('selected')) {
    total += parseInt(seat.dataset.price);

    }
});
document.getElementById('total-price').innerHTML = total;

}
seats.forEach(seat => { 
seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
    updateTotal();
});

});

let submit = document.getElementById("btn3");
    submit.addEventListener("click", function(e) {
    e.preventDefault();
    let seatsSelected = false;
    seats.forEach(seat => {
    if (seat.classList.contains('selected')) {
    seatsSelected = true; 
    }
});

if(!seatsSelected) {
    alert("Please select at least 1 seat");
    return;
}
alert('download invoice');
window.location.href = './invoice.html';
});
