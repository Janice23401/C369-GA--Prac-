document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('enquiryForm').addEventListener('submit', function(event) {
      event.preventDefault(); 

      document.getElementById('successMessage').style.display = 'block';

      setTimeout(function() {
        window.location.href = 'contact.html';
      }, 3000);
    });
  });
  