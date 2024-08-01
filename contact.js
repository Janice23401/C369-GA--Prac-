document.addEventListener("DOMContentLoaded", () => {
    const advisorForm = document.getElementById("advisor-form");
    const enquiryForm = document.getElementById("enquiry-form");
    
    if (advisorForm) {
      advisorForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const location = document.getElementById("location").value;
        const specialty = document.getElementById("specialty").value;
    
        function findAdvisors(location, specialty) {
          return [
            { name: "John Doe", location: "New York", specialty: "Retirement Planning" },
            { name: "Jane Smith", location: "California", specialty: "Investment Strategies" }
          ];
        }
    
        const advisors = findAdvisors(location, specialty);
        const advisorResults = document.getElementById("advisor-results");
        advisorResults.innerHTML = "";
        advisors.forEach(advisor => {
          const div = document.createElement("div");
          div.textContent = `Name: ${advisor.name}, Location: ${advisor.location}, Specialty: ${advisor.specialty}`;
          advisorResults.appendChild(div);
        });
      });
    }
    
    if (enquiryForm) {
      enquiryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
    
        function sendEnquiry(name, email, message) {
          console.log("Enquiry sent:", { name, email, message });
          return true;
        }
    
        if (sendEnquiry(name, email, message)) {
          alert("Enquiry sent successfully!");
          enquiryForm.reset();
        } else {
          alert("Failed to send enquiry. Please try again.");
        }
      });
    }
    
    const cards = document.querySelectorAll(".card button");
  
    cards.forEach(card => {
      card.addEventListener("click", (event) => {
        const targetHref = event.currentTarget.getAttribute("onclick").replace("window.location.href=", "").replace(/'/g, "");
        window.location.href = targetHref;
      });
    });
  });
  