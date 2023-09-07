document.addEventListener("DOMContentLoaded", function () {
  // Function to handle form submission
  function successfully() {
    // Show the success modal
    $("#successModal").modal("show");
    // Close the booking modal (if it's still open)
    $("#myModal").modal("hide");
    $("#myModal").on("hidden.bs.modal", function () {
      // Clear the input fields in the form
      document.getElementById("Name").value = "";
      // Add more lines to clear other form fields as needed
    });
  }

  // Function to initialize parking slot statuses
  function initializeSlotStatuses() {
    var parkingSlots = document.querySelectorAll(".parking-slot");
    parkingSlots.forEach(function (slot) {
      slot.dataset.status = "Available";
    });
  }

  // Call the initialization function when the page loads
  initializeSlotStatuses();

  // Function to update the dropdown options based on slot statuses

  function color() {
    var selectedSlot = document.getElementById("slotSelector").value;
    var parkingSlots = document.querySelectorAll(".parking-slot");
    for (var i = 0; i < parkingSlots.length; i++) {
      var slot = parkingSlots[i];
      if (slot.getAttribute("data-slot") === selectedSlot) {
        if (slot.dataset.status === "Available") {
          slot.style.backgroundColor = "red";
          slot.style.color = "black";
          slot.textContent = "Booked";
          slot.dataset.status = "Booked";
        } else {
          alert("Success");
        }
      }
    }
  }

  function updateBookingList() {
    var name = document.getElementById("Name").value;
    var licensePlate = document.getElementById("Licenseplate").value;
    var phoneNumber = document.getElementById("Phonenumber").value;
    var carBrand = document.getElementById("Carbrand").value;
    var selectedSlot = document.getElementById("slotSelector").value;
    var startTime = document.getElementById("Starttime").value;
    var endTime = document.getElementById("Endtime").value;
    // Add more code to retrieve other form field values as needed

    // Create a new list item
    var listItem = document.createElement("div");
    listItem.className = "booking-item";
    // Populate the list item with form data and slot status
    listItem.innerHTML = `
      <strong>Name:</strong> ${name}<br>
      <strong>License Plate:</strong> ${licensePlate}<br>
      <strong>Phone Number:</strong> ${phoneNumber}<br>
      <strong>Car Brand:</strong> ${carBrand}<br>
      <strong>Parking Slot:</strong> ${selectedSlot}<br>
      <strong>Start Time:</strong> ${startTime}<br>
      <strong>End Time:</strong> ${endTime}<br>
      <strong>Status:</strong> Booked
    `;
    // Append the list item to the booking list
    var bookingList = document.getElementById("bookingList");
    bookingList.appendChild(listItem);
  }

  // Add an event listener to the form for when it is submitted
  document
    .querySelector("#myModal form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from actually submitting
      // Call the color() function to change the color and text of the parking slot
      color();
      // Call the updateBookingList() function to add the booking to the list
      updateBookingList();
      // Call the successfully() function to show the alert
      successfully();
    });
});

// Add an event listener to the logout button
document.getElementById("logout-button").addEventListener("click", function () {
  // Redirect to the login page
  window.location.href = "http://127.0.0.1:5500/parking.html"; // Replace "login.html" with the actual URL of your login page
});
