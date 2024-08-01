document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Show success message
    const successMessage = document.querySelector('.successMessage');
    successMessage.style.display = 'block'; // Display the success message

    // For debugging, add a console log
    console.log('Success message displayed');

    // Redirect after a delay
    setTimeout(function() {
      window.location.href = 'contact.html';
    }, 3000);
  });
});
