document.addEventListener("DOMContentLoaded", function () {
    // Get form elements
    const nameInput = document.getElementById("name");
    const educationInput = document.getElementById("education");
    const universityInput = document.getElementById("university");
    const mobileInput = document.getElementById("mobile");
    const emailInput = document.getElementById("email");
    const interestsInput = document.getElementById("interests");
    const saveButton = document.getElementById("submitBtn");

    // Get display elements
    const nameDisplay = document.getElementById("displayName");
    const educationDisplay = document.getElementById("displayEducation");
    const universityDisplay = document.getElementById("displayUniversity");
    const mobileDisplay = document.getElementById("displayMobile");
    const emailDisplay = document.getElementById("displayEmail");
    const interestsDisplay = document.getElementById("displayInterests");

    // Add event listener to save button
    saveButton.addEventListener("click", function () {
        // Validate input fields before updating display
        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            return;
        }
        if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (mobileInput.value.trim() === "" || !validateMobile(mobileInput.value)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        // Update profile display with entered values
        nameDisplay.textContent = `Name: ${nameInput.value}`;
        educationDisplay.textContent = `Education: ${educationInput.value}`;
        universityDisplay.textContent = `University: ${universityInput.value}`;
        mobileDisplay.textContent = `Mobile: ${mobileInput.value}`;
        emailDisplay.textContent = `Email: ${emailInput.value}`;
        interestsDisplay.textContent = `Interests: ${interestsInput.value}`;

        alert("Profile updated successfully!");
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Function to validate mobile number format (10-digit)
    function validateMobile(mobile) {
        const mobilePattern = /^[0-9]{10}$/;
        return mobilePattern.test(mobile);
    }
});
