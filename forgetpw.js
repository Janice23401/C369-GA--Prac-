document.addEventListener("DOMContentLoaded", () => {
    const forgotPasswordForm = document.getElementById("forgot-password-form");
    const verificationMessage = document.getElementById("verification-message");
    const verificationForm = document.getElementById("verification-form");

    let verificationCodeSent;

    forgotPasswordForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;

        // Simulate sending a verification code
        verificationCodeSent = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit code
        alert(`Verification code sent to ${email}. Code: ${verificationCodeSent}`); // Simulate sending email

        // Hide the forgot password form and show the verification message
        forgotPasswordForm.style.display = "none";
        verificationMessage.style.display = "block";
    });

    verificationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const verificationCodeEntered = document.getElementById("verification-code").value;

        // Check if the entered verification code matches the sent one
        if (verificationCodeEntered === verificationCodeSent) {
            alert("Verification successful!");
            window.location.href= "service.html"
        } else {
            alert("Invalid verification code. Please try again.");
        }
    });
});
